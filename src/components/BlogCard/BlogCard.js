import './BlogCard.css'
import Clock from './update.svg';

function BlogCard({ title, image, content, author, date, category }) {
    return (
        <div className="blog-card-container">
            <div className="blog-card">
                <div className="img-wrap">
                <img src={image} alt={title} />
                    
                </div>
                <div className="blog-body">
                    <h2 className="blog-title">{title.substring(0, 50)}</h2>
                    <p className="blog-content">{content.substring(0, 70)}...<span className='read-more'>Read more</span></p>
                    <div className="blog-meta">
                        <p className="blog-author">By : <strong className='author-name'>{author.name.substring(0, 22)}...</strong></p>
                        <p className="blog-date"> <img src={Clock}  alt=''/> {date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Sidebar = ({ blogs }) => {
    if (!blogs) return <div>No blogs available</div>;
    return (
        <div class="side-cards">
            <h3 className="logo-title">Top Blogs</h3>
            <ul class="list-unstyled latest-bloglist">
            {blogs.slice(0, 4).map((blog, index) => (
                <li key={index} >
                    <d href='/'>
                        <span className="blog-date"> <img src={Clock}  alt=''/>{blog.date}</span>
                        <p>{blog.title}</p>
                        <span className="author-details">By : <span className="author-name">{blog.author.name.substring(0, 22)}...</span></span>
                    </d>
                </li>
                ))}
            </ul>
        </div>
    )
}

export { Sidebar }
export default BlogCard