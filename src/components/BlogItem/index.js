import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishesDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="blog-details-container">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-published-date">{publishesDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}

export default BlogItem
