import {useState} from 'react'

function Form({sendData}) {
    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");
    return (
		<form action={sendData} className='flex flex-col text-center justify-center items-center'>
			<input className='w-2/6 p-2 m-4 text-center' type="text" value={name} onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)} placeholder='name' />
            <input className='w-4/6 p-2 m-4 text-center' value={feedback} onChange={(e: React.FormEvent<HTMLInputElement>) => setFeedback(e.currentTarget.value)} placeholder='feedback' />
		</form>
	)
}

export default Form