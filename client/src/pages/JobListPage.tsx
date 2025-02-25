import React from 'react';
import type { JobAttributes } from "../../../server/src/models/jobs";
import { Link } from 'react-router-dom';

import '../index.css'; // Import the CSS file
//import {login }from './../api/authAPI';

interface JobListProps {
    jobs: JobAttributes[] | null;
}//interface

const JobList: React.FC<JobListProps> = ({ jobs }) => {
    return (
        <>
            <h2 className="pb-5">
              Job Listings:
            </h2>
                <Link to='/add-job'>Add New Job</Link>
                <div className="table-container" >
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Contact</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {jobs && jobs.map((job) => (
                            <tr key={job.id}>
                        
                            <td>{job.date}</td>
                            <td>{job.status}</td>
                            <td>{job.company}</td>
                            <td>{job.position}</td>
                            <td>{job.contact}</td>
                            <td>{job.description}</td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                    
                </div>
            
        </>
    );//return
};

export default JobList;
