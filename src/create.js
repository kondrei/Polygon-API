// import useFetch from './useFetch'

import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [title, setTile] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useNavigate()

    const handleSumbit = (e) => {
        e.preventDefault()
        setIsPending(true)
        const blog = { title, body, author }
        fetch('http://localhost:3004/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)

        })
            .then(() => {
                console.log('addet')
                history('/')
            })
    }

    return (
        <div className="Create post">
            <form onSubmit={handleSumbit}>
                <label htmlFor="title"> Blog title</label>
                <input type="text" name="title" required
                    value={title}
                    onChange={(e) => setTile(e.target.value)}
                />
                <label htmlFor="body"> Blog body</label>
                <textarea name="body" required cols="50" rows="5"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label htmlFor="author">Author</label>
                <select name="author" id="" required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="" disabled >--select author--</option>
                    <option value="andrei">andrei</option>
                    <option value="vasile">vasile</option>
                </select>
                <button type="submit">Add record</button>
                {isPending && <div>Adding...</div>}
            </form >
        </div >
    );
}

export default Create;