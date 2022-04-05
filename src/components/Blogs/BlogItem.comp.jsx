import React from 'react'

const BlogItem = ({ blog }) => {
    return (
        <article className="blog-item bg-light p-3 rounded my-2 w-75 mx-auto">
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
        </article>
    )
}

export default BlogItem