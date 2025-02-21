import { useState, useEffect, useLayoutEffect } from "react";
//import { retrieveUsers } from "../api/userAPI";
//import type { UserData } from "../interfaces/UserData";
import ErrorPage from "./ErrorPage";
//import UserList from '../components/Users';
import auth from '../utils/auth';
import JobListPage from '../pages/JobListPage';
import { JobAttributes } from "../../../server/src/models/jobs";
import { retrieveJobs } from "../api/jobAPI";

const Home = () => {

    //const [users, setUsers] = useState<UserData[]>([]);
    const [error, setError] = useState(false);
    const [loginCheck, setLoginCheck] = useState(false);
    const [jobs, setJobs] = useState<JobAttributes[] | null>(null);

    useEffect(() => {
        if (loginCheck) {
            fetchJobs();
        }
    }, [loginCheck]);

    useLayoutEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };

    /*const fetchUsers = async () => {
        try {
            const data = await retrieveUsers();
            setUsers(data)
        } catch (err) {
            console.error('Failed to retrieve tickets:', err);
            setError(true);
        }
    }*/

    const fetchJobs = async () => {
        try {
            const data = await retrieveJobs();
            setJobs(data)
        } catch (err) {
            console.error('Failed to retrieve jobs', err);
            setError(true);
        }

    }//fetchJobs



    if (error) {
        return <ErrorPage />;
    }

    return (
        <>
            {
                !loginCheck ? (
                    <div className='login-notice'>
                        <h1>
                            Your next awesome job awaits!
                        </h1>
                    </div>
                ) : (
                    <JobListPage jobs={jobs} />
                )}
        </>
    );
};

export default Home;
