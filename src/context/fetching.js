import { baseUrl } from "../hooks/url";

//Fetch Blogs
export const fetchBlogs = async () => {
    const res = await fetch(`${baseUrl}/api/posts/activeposts`);
    const data = await res.json();
    return data?.data;
};

//Fetch Carieer
export const fetchCarieer = async () => {
    const res = await fetch(`${baseUrl}/api/vaccancies/activevaccancies`);
    const data = await res.json();
    return data?.data;
};

//Fetch Portfolio
export const fetchProjects = async () => {
    const res = await fetch(`${baseUrl}/api/projects/activeprojects`);
    const data = await res.json();
    return data?.data;
};

//Fetch News
export const fetchNews = async () => {
    const res = await fetch(`${baseUrl}/news/all`);
    const data = await res.json();
    return data?.data;
};