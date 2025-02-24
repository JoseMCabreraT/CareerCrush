import React from 'react';
import '../styles/AddJob.css'; //// Here we are importing a CSS file as a dependency.
import type { JobAttributes } from '../../../server/src/models/jobs';
import Auth from '../utils/auth';
import { useState } from 'react';


const AddJob: React.FC = () => {

    
        const [job, setJob] = useState({
            date: '',
            status: '',
            company: '',
            position: '',
            contact: '',
            description: '',
        });

        const handleChange = (e) => {
            setJob({ ...job, [e.target.name]: e.target.value });
          };

          const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              const response = await fetch('/api/jobs', {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${Auth.getToken()}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(job),
              });
        
              const data = await response.json();
              console.log(data.message);
        
              if (response.ok) {
                setJob({ date: '', status: '', company: '', position: '', contact: '', description: '' });
              }
            } catch (error) {
              console.error('Error creating job:', error);
            }
          };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="jobTitle">Date:</label>
                <input type="text" id="date" name="date" value={job.date} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="status">Status:</label>
                <input type="text" id="status" name="status" value={job.status} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company" value={job.company} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="position">Position:</label>
                <textarea id="position" name="position" value={job.position} onChange={handleChange} required></textarea>
            </div>
            <div>
                <label htmlFor="contact">Contact:</label>
                <textarea id="contact" name="contact" value={job.contact} onChange={handleChange} required></textarea>
            </div>
            <div>
                <label htmlFor="description">Job Description:</label>
                <textarea id="description" name="description" value={job.description} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Add Job</button>
        </form>
            
        </>
    );//return
};//AddJob

export default AddJob;
