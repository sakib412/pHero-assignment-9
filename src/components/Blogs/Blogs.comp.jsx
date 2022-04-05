import React from 'react'
import BlogItem from './BlogItem.comp'
import './blogs.css'

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "What is Context API?",
            content: "Context API gives a method for going information through the part tree without passing props down at each level.In React application, data is passed hierarchical (parent to child) through props, however such utilization can be unwieldy for specific sorts of props (for example UI theme) that are expected by a many components inside an application. Context gives a method for sharing qualities like these between parts without having to go a prop through each level of the tree expressly."
        },
        {
            id: 2,
            title: "Whats are Semantic tag?",
            content: ""
        }
    ]
    return (
        <div className='mt-5'>
            <h1 className='text-center'>Blogs</h1>
            <div className="blogs">
                {blogs.map(blog => (
                    <BlogItem blog={blog} />
                ))}
            </div>
        </div>
    )
}

export default Blogs