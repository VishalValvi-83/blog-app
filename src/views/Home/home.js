import React, { useEffect, useState } from 'react'
import blogs from './../../data';
import BlogCard from './../../components/BlogCard/BlogCard';
import Sidebar from './../../components/BlogCard/sidbar';
import './Home.css' 
import BlogCardSkeleton from '../../components/Skeleton';


function Home(){
    const [loadSkeleton, setLoadSkeleton] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoadSkeleton(false);
        }, 2000);
      }, []);
    return (
        <>
        <h1 className='blog-heading' data-aos="fade-right">Blogs On Startups</h1>
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
                           {!loadSkeleton ? <BlogCard
                                id={id}
                                key={i}
                                title={title}
                                image={image}
                                content={content}
                                author={author}
                                date={date}
                                category={category}
                            />
                            :
                        <BlogCardSkeleton key={i}/>}
                        </>
                    )
                })
                }
            </div>
            <div className="sidebar-container" data-aos="zoom-in-left">
                <Sidebar blogs={blogs} />
            </div>
            

        </div>
        </>
    )
}

export default Home