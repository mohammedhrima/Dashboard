import React from 'react'
import { Star } from "lucide-react"

type RatingProps = {
    rating: number
}

function Rating({ rating }: RatingProps) {
    return [1, 2, 3, 4].map((index) => (
        <Star
            key={index}
            color={index <= rating ? "#FFC107" : "#E4E5E"}
            className='w-4 h-'
        />
    ))
}

export default Rating