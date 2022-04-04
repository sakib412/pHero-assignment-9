import React from 'react'
import useReview from '../../hooks/useReview'
import Reviews from './Reviews.comp'

const ReviewPage = () => {
    const { reviews } = useReview()
    return (
        <div className='mt-5'>
            <h2 className='text-center'>What our readers say!</h2>
            <Reviews reviews={reviews} />

        </div>
    )
}

export default ReviewPage