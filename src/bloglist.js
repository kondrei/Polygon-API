const BlogList = ({ blog, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blog.posts.map((item) => (
        <div className="blog-preview" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <p>Written by: {item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
