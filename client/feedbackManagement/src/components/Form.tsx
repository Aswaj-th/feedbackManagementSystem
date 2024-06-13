import React, {useState} from 'react'
import axios from 'axios';
import Popup from './Popup';

type feedbackType = {
    name: string
    feedback: string
}[];

function Form({setFeedbacks} : {setFeedbacks : React.Dispatch<React.SetStateAction<[]|feedbackType>>}) {
    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");
	const [showPopup, setShowPopup] = useState(false);
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(name === "" || feedback === "") {
			setShowPopup(true);
			return;
		}
		const data = {
			name: name,
			feedback: feedback
		}
		axios.post('http://localhost:8000/api/feedbacks', data)
		.then((res) => {
			// console.log(res);
			setFeedbacks(res.data);
		})
		.catch((err) => {
			console.log(err)
		})
		setName("");
		setFeedback("");
	}
    return (
		<>
		<form onSubmit={(e) => submitHandler(e)} className='flex flex-col text-center justify-center items-center my-6 bg-theme1-400 rounded-lg'>
			{showPopup ? <Popup setShowPopup={setShowPopup}/> : null}
			<h2 className='my-4 text-2xl text-theme1-600'>Feedback Form</h2>
			<input className='w-4/6 p-2 m-2 text-center rounded bg-theme1-100' type="text" value={name} onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)} placeholder='name' />
			<textarea className='w-4/6 p-2 m-2 text-center rounded h-20 bg-theme1-100 resize-none' value={feedback} onChange={(e: React.FormEvent<HTMLTextAreaElement>) => setFeedback(e.currentTarget.value)} placeholder='feedback' />
			<button type="submit" className='px-4 py-1 m-2 bg-theme1-500 rounded text-white'>Submit</button>
		</form>
		</>
	)
}

export default Form