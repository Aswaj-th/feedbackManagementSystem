import './App.css'
import AllFeedbacks from './components/AllFeedbacks';
import Form from './components/Form';

export default function App() {
	const sendData = (formData) => {
		console.log(formData);
	}
	return (
		<>
		<Form sendData/>
		<AllFeedbacks feedbacks={[{name: "hey", feedback: 'yeah'}]}/>
		</>
	)
}