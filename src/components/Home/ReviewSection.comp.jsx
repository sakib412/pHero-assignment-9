import React from 'react'
import Reviews from '../Reviews/Reviews.comp'

const ReviewSection = () => {
    return (
        <section className='my-5'>
            <h2 className='text-center mb-1'>Customer Reviews (3)</h2>
            <Reviews />
        </section>
    )
}

export default ReviewSection