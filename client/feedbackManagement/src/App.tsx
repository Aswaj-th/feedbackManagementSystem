import { useEffect, useState } from 'react';
import './App.css'
import AllFeedbacks from './components/AllFeedbacks';
import Form from './components/Form';
import axios, { AxiosResponse } from 'axios';

type feedbackType = {
    name: string
    feedback: string
}[];

export default function App() {
	const [feedbacks, setFeedbacks] = useState<[] | feedbackType>([]);
	useEffect(() => {
		axios.get("http://localhost:8000/api/requests")
		.then((data: AxiosResponse) => {
			// console.log(data.data);
			setFeedbacks(data.data);
		})
	}, [feedbacks])
	return (
		<>
		<Form setFeedbacks={setFeedbacks}/>
		<AllFeedbacks feedbacks={feedbacks}/>
		</>
	)
}