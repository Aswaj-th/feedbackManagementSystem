type feedbackType = {
    name: string
    feedback: string
}[];

function AllFeedbacks({feedbacks} : {feedbacks : feedbackType}) {
    return (
        <div>
            {
                feedbacks.map((feedback) => {
                    return (
                        <>
                        <div>{feedback.name}</div>
                        <div>{feedback.feedback}</div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default AllFeedbacks