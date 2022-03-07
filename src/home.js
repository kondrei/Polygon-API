import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blog, isLoading, error } = useFetch('http://localhost:3004/posts')
  // for external JSON server to preserve number of requests

  // const { data: blog, isLoading, error } = useFetch(
  //   "https://api.jsonstorage.net/v1/json/3659862b-6e7b-4bfa-9071-854d9425875e/8a9d0669-99fd-4c6e-afd5-196adcd9d711"
  // );

  // for external JSON server to preserve number of requests

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && <BlogList blog={blog} title="All blog" />}
    </div>
  );
};

export default Home;
