import React from 'react';
import type { JobAttributes } from "../../../server/src/models/jobs";
import '../index.css'; // Import the CSS file
//import {login }from './../api/authAPI';

interface JobListProps {
    jobs: JobAttributes[] | null;
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    //add check to see who is logged in
    
    
    return (
        <div className="container">
            <h2 className="heading">
                Job Applications:
            </h2>
            <div className="table-container">
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
                                <td>{formatDate(job.date)}</td>
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
        </div>
    );
};

export default JobList;