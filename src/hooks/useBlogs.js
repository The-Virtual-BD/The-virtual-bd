import { useEffect } from "react";
import { useState } from "react";

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/bloggerblog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return [blogs, setBlogs];
}

export default useBlogs;