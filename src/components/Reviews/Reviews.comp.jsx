import React from 'react'
import ReviewCard from './ReviewCard.comp'
import './reviews.css'

const Reviews = () => {
    const reviews = Array(3).fill(3)
    return (
        <div className="team-boxed">
            <div className="row people">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </div>
    )
}

export default Reviews