const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Questions = require("../models/Questions");
const { body, validationResult } = require('express-validator');


//GET "/api/questions/list"
router.get('/list', async(req, res) => {
    try {
        const Qlist = await Questions.find({});
        res.send(Qlist)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured at /list api")
    }
})


//POST "/api/questions/post" Login is Required
router.post('/post', fetchuser, [
    body('title', 'Enter the valid title').isLength({ min: 3 }),
    body('description', 'Enter the valid description').isLength({ min: 5 }),
    body('constraints', 'Enter the valid constraints').isLength({ min: 5 }),
    body('expectedOutput', 'Enter the valid expectedOutput'),
    body('difficulty', 'Enter the valid difficulty').isLength({ min: 3 }),
    body('category', 'Enter the valid category'),
], async(req, res) => {
    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description, constraints, expectedOutput, difficulty, category } = req.body;
        const { examples } = req.body;
        console.log(examples);
        const ques = new Questions({
            title,
            description,
            constraints,
            expectedOutput,
            difficulty,
            category,
            examples,
            user: req.user.id
        });
        const saveQues = await ques.save();
        res.json(saveQues);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})


//DELETE "/api/questions/deleteQues/:id" Login is Required
router.delete('/deleteQues/:id', fetchuser, async(req, res) => {
    try {
        let ques = await Questions.findById(req.params.id);
        console.log(ques);
        if (!ques) {
            return res.status(404).send("Question found");
        }
        if (ques.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed")
        }
        ques = await Questions.findByIdAndDelete(req.params.id)
        res.json({ "Success:": "Question has been deleted", ques: ques });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

//PUT "/api/questions/updateQues/:id" Login is Required
router.put('/updateQues/:id', fetchuser, async(req, res) => {
    try {
        const { title, description, constraints, expectedOutput, difficulty, category, examples } = req.body;
        //Create a new node object
        const newQues = {};
        if (title) {
            newQues.title = title;
        }
        if (description) {
            newQues.description = description;
        }
        if (constraints) {
            newQues.constraints = constraints;
        }
        if (expectedOutput) {
            newQues.expectedOutput = expectedOutput;
        }
        if (difficulty) {
            newQues.difficulty = difficulty;
        }
        if (category) {
            newQues.category = category;
        }
        if (examples) {
            newQues.examples = examples;
        }

        //Find the node and update
        let ques = await Questions.findById(req.params.id);
        if (!ques) {
            return res.status(404).send("Question found")
        }
        if (ques.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed")
        }

        ques = await Questions.findByIdAndUpdate(req.params.id, { $set: newQues }, { new: true })
        res.json(ques);


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})




module.exports = router;