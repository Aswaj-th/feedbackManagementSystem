import {useState} from 'react'
import axios from 'axios';

function Form({setFeedbacks}) {
    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");
    return (
		<form onSubmit={(e) => {
			e.preventDefault();
			if(name === "" || feedback === "") return;
			const data = {
				name: name,
				feedback: feedback
			}
			axios.post('http://localhost:8000/api/feedbacks', data)
			.then((res) => {
				console.log(res);
				setFeedbacks(res.data);
			})
			.catch((err) => {
				console.log(err)
			})
			setName("");
			setFeedback("");
		}} className='flex flex-col text-center justify-center items-center'>
			<input className='w-2/6 p-2 m-4 text-center' type="text" value={name} onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)} placeholder='name' />
			<input className='w-4/6 p-2 m-4 text-center' value={feedback} onChange={(e: React.FormEvent<HTMLInputElement>) => setFeedback(e.currentTarget.value)} placeholder='feedback' />
			<button type="submit">Submit</button>
		</form>
	)
}

export default Form