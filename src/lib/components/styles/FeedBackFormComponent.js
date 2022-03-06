import React, {useState} from 'react';
import Rating from "react-rating";

const FeedBackFormComponent = (props) => {
    const [radioInput, setRadio] = useState('yes');

    const handleChange = e => {
        const {name, value} = e.target;

        setRadio(value);
        console.log(radioInput);
    };

    function handleSubmit(event) {
        alert('A name was submitted: ');
        event.preventDefault();
    }

    return (
        <div className={'flex'}>
            <div className="bg-white rounded-2xl border shadow-xl p-5">
                <div className="flex flex-col items-center space-y-5  ">
                    <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">Feedback Form</h1>
                    <p className="text-sm text-gray-500 text-center w-5/6">Do you have some feedback to offer or need to
                        report a bug? Pleas let the team know!</p>
                    <h2 className="font-bold text-xl text-gray-600 w-4/6 text-center"> Category</h2>

                    <ul className="grid grid-cols-3 gap-x-5 m-5 max-w-md mx-auto">
                        <li className="relative">
                            <input className="sr-only peer" type="radio" value="yes" name="answer" id="answer_yes"
                                   onChange={handleChange}/>
                            <label
                                className={`flex text-sm p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50   ${radioInput === 'yes' ? "ring-blue-500 ring-2 border-transparent" : ''}`}
                                htmlFor="answer_yes">Bug</label>

                            {/*<div className={`absolute  w-5 h-5 peer-checked:block ${radioInput==='yes'? "block" : 'hidden' } top-5 right-3`}>*/}
                            {/*    🐞*/}
                            {/*</div>*/}
                        </li>

                        <li className="relative">
                            <input className="sr-only peer" type="radio" value="no" name="answer"
                                   id="answer_no" onChange={handleChange}/>
                            <label
                                className={`flex text-sm p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50   ${radioInput === 'no' ? "ring-blue-500 ring-2 border-transparent" : ''}`}
                                htmlFor="answer_no">Kudos</label>

                            {/*<div className={`absolute ${radioInput==='no'? "block" : 'hidden' } w-5 h-5  top-5 right-3`}>*/}
                            {/*    ✨*/}
                            {/*</div>*/}
                        </li>

                        <li className="relative">
                            <input className="sr-only peer" type="radio" value="maybe" name="answer"
                                   id="answer_maybe" onChange={handleChange}/>
                            <label
                                className={`flex p-5 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50   ${radioInput === 'maybe' ? "ring-blue-500 ring-2 border-transparent" : ''}`}
                                htmlFor="answer_maybe">Suggestion</label>


                        </li>
                    </ul>
                    <h2 className="font-bold text-xl text-gray-600 w-4/6 text-center"> Your Rating (optional)</h2>
                    <Rating
                        stop={3}
                        emptySymbol={["fa fa-frown-o fa-2x", "fa fa-meh-o fa-2x ", "fa fa-smile-o fa-2x"]}
                        fullSymbol={["fa fa-frown-o fa-2x yellow", "fa fa-meh-o fa-2x orange", "fa fa-smile-o fa-2x red"]}
                        fractions={2}

                    />
                    <textarea placeholder="Your Feedback" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"/>
                    <button
                        className="bg-blue-400 text-white rounded-md font-semibold px-4 py-3 w-full">Submit Feedback
                    </button>

                </div>

            </div>


            <form onSubmit={handleSubmit}>
                <div>
                    <div style={{backgroundColor: 'blue'}}>

                    </div>
                    <input type="radio" value="Bug" name="gender"/> Bug
                    <input type="radio" value="Feedback" name="gender"/> Feedback
                    <input type="radio" value="Other" name="gender"/> Other
                </div>
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
export default FeedBackFormComponent;