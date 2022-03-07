import { useNavigate, useParams } from "react-router-dom";

import useFetch from "./useFetch";



const BlogDetails = ({ }) => {
    const { id } = useParams()
    const { data, error, isPending } = useFetch(`http://localhost:3004/posts/${id}`)
    const history = useNavigate()
    const handleClic = () => {
        fetch(`http://localhost:3004/posts/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                console.log('done')
                history('/')
            })

    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Writtent by {data.author}</p>
                    <p>{data.body}</p>
                    <button onClick={handleClic}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;