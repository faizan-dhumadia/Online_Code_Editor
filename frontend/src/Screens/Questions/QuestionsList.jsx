import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import questionContext from '../../context/question/questionContext'
import { Link } from 'react-router-dom'

const QuestionsList = () => {

    const context = useContext(questionContext);

    const dispatch = useDispatch()
    const { question } = useSelector((state) => state.question);

    const { allQuestion } = context;
    useEffect(() => {
        allQuestion()
        console.log("Que", question);
    }, [])

    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Problems</h1>

                    </div>
                    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Difficulty</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Category</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                {question.payload !== undefined && question.payload.map((Question) => {
                                    return <tr>
                                        <td class="px-1 py-1 md:px-4 md:py-3"><Link to={`${Question._id}`}>{Question.title} </Link></td>
                                        <td class="px-1 py-1 md:px-4 md:py-3">{Question.difficulty}</td>
                                        <td class="px-1 py-1 md:px-4 md:py-3">{Question.category}</td>
                                        <td className='px-1 py-1 md:px-4 md:py-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </td>

                                    </tr>

                                })}


                            </tbody>
                        </table>
                    </div>
                    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default QuestionsList