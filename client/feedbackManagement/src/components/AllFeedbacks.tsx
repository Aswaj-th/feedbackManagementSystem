import FeedbackCard from "./FeedbackCard";

type feedbackType = {
    name: string
    feedback: string
}[];

function AllFeedbacks({feedbacks} : {feedbacks : feedbackType}) {
    return (
        <div className="bg-gradient-to-r from-indigo-950 via-purple-800 to-indigo-950 flex w-full flex-col justify-center items-center">
            {
                feedbacks.map((feedback, i) => {
                    return (
                        <FeedbackCard key={i} feedback={feedback}/>
                    )
                })
            }
        </div>
    )
}

export default AllFeedbacks