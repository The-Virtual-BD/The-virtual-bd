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

//Fetch Notices
export const fetchNotice = async () => {
    const res = await fetch(`${baseUrl}/api/notices/allnotice`);
    const data = await res.json();
    return data?.data;
};

//Fetch Services
export const fetchServices = async () => {
    const res = await fetch(`${baseUrl}/api/services/activeservices`);
    const data = await res.json();
    return data?.data;
};