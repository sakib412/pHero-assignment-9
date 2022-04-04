import React from 'react'
import { DynamicStar } from 'react-dynamic-star';
import './review-card.css'

const ReviewCard = ({ review }) => {
    const { text, user, rating } = review
    return (
        <div className="col-md-6 col-lg-4 item">
            <div className="box">
                <img className="rounded-circle" alt={user.name} src={user.image} />
                <h3 className="name">{user.name}</h3>
                <div className="title d-flex">Ratings: &nbsp; <DynamicStar width={13} height={13} rating={rating} outlined /></div>
                <p className="description">{text}</p>
            </div>
        </div>
    )
}

export default ReviewCard