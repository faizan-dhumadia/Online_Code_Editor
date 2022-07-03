import React from 'react';
import {useLocation} from 'react-router-dom' 
function QuestionDescription(props) {
    const {state} = useLocation();
    console.log(state)
    return (
        <div className="container">
            <h1>{state.title}</h1>
        </div>
    );
}

export default QuestionDescription;