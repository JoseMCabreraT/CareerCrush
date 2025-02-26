
import React, { useState, useEffect } from 'react';
import type { JobAttributes } from "../../../server/src/models/jobs";
import { retrieveJobs } from '../api/jobAPI';
import '../index.css'; 
import Auth from '../utils/auth';


const DeleteJob: React.FC = () => {

    const [jobs, setJobs] = useState<JobAttributes[] | null>(null);
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    const fetchJobs = async () => {
        try {
            const data = await retrieveJobs();
            setJobs(data)
        } catch (err) {
            console.error('Failed to retrieve jobs', err);
            // setError(true);
        }
    
    }//fetchJobs

    useEffect(() => {
        fetchJobs();
    }, []);//useEffect

    // Delete a job from the database
    const handleDelete = async (jobId: number) => {
        try {
            const response = await fetch(`/api/jobs/${jobId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${Auth.getToken()}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete job');
            }

            // Update UI after deletion
            setJobs((prevJobs) => prevJobs ? prevJobs.filter(job => job.id !== jobId) : null);
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };


    return (
        <>
            <h2 className="pb-5">
              Delete Application
            </h2>
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
                            <th>Delete</th>
                            <th>Update</th>
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
                            <td><button className="btn"onClick={() => handleDelete(job.id)}>Delete</button></td>
                            <td><button className="btn">Update</button></td>
                        </tr>
                        ))}
                        </tbody>
                    </table>
                    
                </div>
            
        </>
    );//return
};

export default DeleteJob;
