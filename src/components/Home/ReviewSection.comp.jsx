import React from 'react'
import { Link } from 'react-router-dom'
import useReview from '../../hooks/useReview'
import Reviews from '../Reviews/Reviews.comp'

const ReviewSection = () => {
    const { reviews } = useReview()
    const reducedReviews = reviews.slice(0, 3)
    return (
        <section className='my-5'>
            <h2 className='text-center mb-1'>Customer Reviews (3)</h2>
            <Reviews reviews={reducedReviews} />
            <div className='d-flex justify-content-center'>
                <Link to="/reviews" className='btn btn-primary'>See all reviews</Link>
            </div>
        </section>
    )
}

export default ReviewSection