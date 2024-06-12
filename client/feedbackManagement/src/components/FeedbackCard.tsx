type feedbackType = {
    name: string
    feedback: string
};

function FeedbackCard({feedback} : {feedback: feedbackType}) {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl w-4/5 m-2">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-white">{feedback.name}</h2>
                <p className="text-sm mb-4 text-white">{feedback.feedback}</p>
            </div>
        </div>

    )
}

export default FeedbackCard