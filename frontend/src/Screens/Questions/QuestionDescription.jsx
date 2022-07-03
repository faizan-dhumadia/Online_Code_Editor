import React from 'react';
import { useLocation } from 'react-router-dom'
function QuestionDescription(props) {
    const { state } = useLocation();
    console.log(state)
    return (
        <div className=" m-3 md:mx-36 bg-gray-300 border rounded-xl p-4">
            <h1 className='text-5xl font-bold mx-3 flex items-center justify-center'>{state.title}</h1>
            <div className=''>

                {state.difficultyLevel === 'Easy' && <span className='bg-green-500 px-3 py-1 rounded-2xl text-white font-bold my-4 '>
                    {state.difficultyLevel}
                </span>}
                {state.difficultyLevel === 'Medium' && <span className='bg-yellow-500 px-3 py-1 rounded-2xl text-white font-bold my-4 '>
                    {state.difficultyLevel}
                </span>}
                {state.difficultyLevel === 'Hard' && <span className='bg-red-500 px-3 py-1 rounded-2xl text-white font-bold my-4 '>
                    {state.difficultyLevel}
                </span>}

                <span className={`m-4 bg-blue-500 px-3 py-1 rounded-2xl text-white font-bold my-4 `}>{state.category}</span>
            </div>
            <p className='my-4'>{state.description}</p>
            <div className="inputDesc">
                <h3 className='font-bold text-lg'>Input Description</h3>
                <p className='bg-gray-200 p-4 border rounded-lg mt-2'>

                    {state.inputDesc}
                </p>
            </div>
            <div className="outputDesc mt-4">
                <h3 className='font-bold text-lg'>Output Description</h3>
                <p className='bg-gray-200 p-4 border rounded-lg mt-2'>

                    {state.outputDesc}
                </p>
            </div>
            <div className="Example mt-4">
                <h3 className='font-bold text-lg'>Example</h3>
                <div className='bg-gray-200 p-3 border rounded-lg '>

                    <div className=''>
                        <span className='font-bold'>
                            Input:
                        </span> {state.exampleInput}
                    </div>
                    <div className=''>
                        <span className='font-bold'>
                            Output:
                        </span> {state.exampleOutput}
                    </div>
                </div>
            </div>
            <div className='mt-4'>

                <h3 className='font-bold text-xl'>Constraints</h3>
                <div className='constrain p-3 bg-white  border rounded-md'>
                    {state.constraints}
                </div>
            </div>
        </div>
    );
}

export default QuestionDescription;