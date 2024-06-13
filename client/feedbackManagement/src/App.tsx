import { useEffect, useState } from 'react';
import './App.css'
import AllFeedbacks from './components/AllFeedbacks';
import Form from './components/Form';
import worker_script from './worker';

type feedbackType = {
    name: string
    feedback: string
}[];

let worker: Worker;

export default function App() {
	const [feedbacks, setFeedbacks] = useState<[] | feedbackType>([]);
	
	if(window.Worker) {
		worker = new Worker(worker_script)
	} 

	useEffect(() => {
		worker.postMessage("start");
		worker.onmessage = e => {
			setFeedbacks(e.data);
		}
	}, []);

	return (
		<>
		<Form setFeedbacks={setFeedbacks}/>
		<AllFeedbacks feedbacks={feedbacks}/>
		</>
	)
}