import { useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "./url";

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const blogUrl=`${baseUrl}/api/posts/activeposts`
        fetch(blogUrl)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return [blogs, setBlogs];
}

export default useBlogs;