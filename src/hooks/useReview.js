import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('data/reviews.json')
            .then(data => data.json())
            .then(result => {
                setReviews(result)
            })
    }, [])
    return {
        reviews
    }
}

export default useReview