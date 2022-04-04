import React from 'react'
import './review-card.css'

const ReviewCard = ({ review }) => {
    const { text, user } = review
    return (
        <div className="col-md-6 col-lg-4 item">
            <div className="box">
                <img className="rounded-circle" src="images/person-1.png" />
                <h3 className="name">Ben Johnson</h3>
                <p className="title">Ratings: </p>
                <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                <div className="social">

                </div>
            </div>
        </div>
    )
}

export default ReviewCard