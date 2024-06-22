import React from 'react'
import blogs from './../../data';
import BlogCard, { Sidebar } from './../../components/BlogCard/BlogCard';
import './Home.css'


const home = () => {
    console.log(blogs);
    return (
        <div className='container'>
            <div className='blog-container'>
                {blogs.map((blogObject, i) => {
                    const {
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