import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Auth from '../utils/auth';
import '../styles/AddJob.css'; // Import the CSS file

const AddJob: React.FC = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const [job, setJob] = useState({
        date: '',
        status: '',
        company: '',
        position: '',
        contact: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const username = Auth.getProfile()?.username;
        const jobdata = { ...job, username };
        e.preventDefault();
        try {
            const response = await fetch('/api/jobs', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${Auth.getToken()}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jobdata),
            });

            const data = await response.json();
            console.log(data.message);

            if (response.ok) {
                setJob({ date: '', status: '', company: '', position: '', contact: '', description: '' });
                navigate('/'); // Navigate to home page after successful submission
            }
        } catch (error) {
            console.error('Error creating job:', error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" value={job.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <input type="text" id="status" name="status" value={job.status} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company:</label>
                    <input type="text" id="company" name="company" value={job.company} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position:</label>
                    <textarea id="position" name="position" value={job.position} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact:</label>
                    <textarea id="contact" name="contact" value={job.contact} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Job Description:</label>
                    <textarea id="description" name="description" value={job.description} onChange={handleChange} required></textarea>
                </div>
                <div className="button-group">
                    <button type="submit" className="btn">Add Job</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;