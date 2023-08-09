import { createContext } from "react";
import { useQuery } from "react-query";
import { fetchBlogs, fetchCarieer,fetchProjects } from "./context/fetching";
import { useContext } from "react";

export const AppContext = createContext();

const DataCollection = ({ children }) => {
    const { data: blogs, isLoading: blogsLoading } = useQuery("blogs", fetchBlogs);
    const { data: carieer, isLoading: carieerLoading } = useQuery("carieer", fetchCarieer);
    const { data: projects, isLoading: projectsLoading } = useQuery("projects", fetchProjects);


    const value = { blogs, blogsLoading, carieer, carieerLoading,projects,projectsLoading };
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