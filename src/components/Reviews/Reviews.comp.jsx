import React from 'react'
import useReview from '../../hooks/useReview'
import ReviewCard from './ReviewCard.comp'
import './reviews.css'

const Reviews = () => {
    let { reviews } = useReview()
    reviews = reviews.slice(0, 3)

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