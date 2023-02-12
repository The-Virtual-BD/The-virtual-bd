import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';
import { FaFileDownload } from 'react-icons/fa';
import CareerHero from '../Career/CareerHero/CareerHero';
import Menu from '../Header/Menu';
import TopHeader from '../TopHeader/TopHeader';
import Table from '../UserDashboard/Table';

const Notices = () => {
    const [projects, setProjects] = useState([]);
    // const newProject=projects.reverse();

    useEffect(() => {
        // const url = `${baseUrl}/api/user/subscriptions`;
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const Notice_COLUMNS = () => {
        return [
            {
                Header: "SL",
                accessor: "_id",
                sortType: 'basic',

            },
            {
                Header: "Title",
                accessor: "blogShortDesc",
                sortType: 'basic',

            },
            {
                Header: 'Action',
                accessor: 'action',
                Cell: ({ row }) => {
                    const { _id } = row.original;
                    return (<div className='d-flex justify-content-center align-items-center  gap-2 '>

                        <button className='project-action-btn project-view-btn'>
                            <div> <FiDownload className=' ' /></div>
                        </button>
                    </div>);
                },
            },


        ];
    };



    return (
        <>
            <TopHeader />
            <Menu />
            <CareerHero>Notice</CareerHero>
            <Container>
                {projects.length && (
                    <Table columns={Notice_COLUMNS()} data={projects} headline={" "} />
                )}
            </Container>
        </>
    );
};

export default Notices;