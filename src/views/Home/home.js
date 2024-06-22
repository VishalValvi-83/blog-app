import React from 'react'
import blogs from './../../data';
import BlogCard from './../../components/BlogCard/BlogCard';
import Sidebar from './../../components/BlogCard/sidbar';
import './Home.css'

const home = () => {
    return (
        <div className='container'>
            <div className='blog-container'>
                {blogs.map((blogObject, i) => {
                    const {
                        id,
                        title,
                        image,
                        content,
                        author,
                        date,
                        category,

                    } = blogObject

                    return (
                        <>
                            <BlogCard
                                id={id}
                                key={i}
                                title={title}
                                image={image}
                                content={content}
                                author={author}
                                date={date}
                                category={category}
                            />

                        </>
                    )
                })
                }
            </div>
            <div className="sidebar-container">
                <Sidebar blogs={blogs} />
            </div>
            

        </div>
    )
}

export default home