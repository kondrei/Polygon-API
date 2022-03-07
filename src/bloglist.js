import { Link } from "react-router-dom";

const BlogList = ({ blog, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {/* {blog.posts.map((item) => ( 
        for external JSON server to preserve number of requests
        */}
      {blog.map((item) => (
        <div className="blog-preview" key={item.id}>
          <Link to={`/blogs/${item.id}`}>
            <h2>{item.title}</h2>
            <p>Written by: {item.author}</p>
          </Link>
        </div >
      ))}
    </div >
  );
};

export default BlogList;
