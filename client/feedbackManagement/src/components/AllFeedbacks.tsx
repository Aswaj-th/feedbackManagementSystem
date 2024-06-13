import FeedbackCard from "./FeedbackCard";

type feedbackType = {
    name: string
    feedback: string
}[];

function AllFeedbacks({feedbacks} : {feedbacks : feedbackType}) {
    return (
        <div className="flex w-full flex-col justify-center items-center">
            <h2 className="text-3xl text-theme1-600 my-4">All feedbacks</h2>
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