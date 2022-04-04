import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <section>
            <div className="row mt-5">
                <div className="col-md-8 my-5">
                    <h1>Read your favourite book</h1>
                    <p className='pe-5 pt-3'>
                        Published book reviews can appear in academic journals, newspapers, and magazines. They provide an overview of the book and indicate whether the reviewer recommends the book to the reader or not.
                    </p>
                    <Link className='btn btn-lg btn-info mt-3 text-white' to='/#'>Live Demo</Link>
                </div>
                <div className="col-md-4">
                    <img className='img-fluid' alt='steel like an artist' src='images/steel-like-an-artist.jpg' />
                </div>
            </div>

        </section>
    )
}

export default HeroSection