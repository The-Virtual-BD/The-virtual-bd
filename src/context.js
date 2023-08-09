import { createContext } from "react";
import { useQuery } from "react-query";
import { fetchBlogs, fetchCarieer, fetchNotice, fetchProjects, fetchServices } from "./context/fetching";
import { useContext } from "react";

export const AppContext = createContext();

const DataCollection = ({ children }) => {
    const { data: blogs, isLoading: blogsLoading } = useQuery("blogs", fetchBlogs);
    const { data: carieer, isLoading: carieerLoading } = useQuery("carieer", fetchCarieer);
    const { data: projects, isLoading: projectsLoading } = useQuery("projects", fetchProjects);
    const { data: notices, isLoading: noticesLoading } = useQuery("notices", fetchNotice);
    const { data: services, isLoading: servicesLoading } = useQuery("services", fetchServices);


    const value = { blogs, blogsLoading, carieer, carieerLoading, projects, projectsLoading, notices, noticesLoading, services, servicesLoading };
    // console.log(value)

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

};

//Create Hooks for send data
export const useCollection = () => {
    const context = useContext(AppContext);
    return context;
};

export default DataCollection;