import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title,setTitle]=useState('');
    const [text,setText]=useState('');
    const [author,setAuthor]=useState('Ocean');
    const [isPending, setIsPending]=useState(false);
    const history = useHistory();


    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog = { title, text, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
    }

    return (  
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type ="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Text:</label>
                <textarea
                    required
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                value ={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Ocean">Ocean</option>
                    <option value="Coastline">Coastline</option>
                    <option value="Shore">Shore</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>} 
            </form>
        </div>
    );
}
 
export default Create;