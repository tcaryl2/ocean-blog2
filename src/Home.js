import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // "data:blogs" means we imported "data" and named it "blogs"
    const {data: blogs, isPending,error}=useFetch('http://localhost:8000/blogs');

    // const handleDelete=(id)=>{
    //     const newBlogs = blogs.filter(blog=>blog.id!==id);
    //     setBlogs(newBlogs);
    // }

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}
 
export default Home;