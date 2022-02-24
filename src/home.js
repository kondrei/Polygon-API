import BlogList from './bloglist';
import useFetch from './useFetch'

const Home = () => {
    const { data: blog, isLoading, error } = useFetch('http://192.168.1.171:3004/posts')

    return (
        <div className="home">
            {isLoading && <div>loading...</div>}
            {error && <div>{error}</div>}
            {blog && <BlogList blog={blog} title="All blog" />}
        </div>
    );
}

export default Home;