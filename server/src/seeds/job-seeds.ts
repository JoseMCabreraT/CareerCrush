import { Job } from '../models/index.js';

export const seedJobs = async () => {
  await Job.bulkCreate(
    [
      { date: '2025-09-01', 
        status: 'Applied',
        company: 'The Amazing Company' ,
        position: 'Software Engineer' ,
        contact: 'password' ,
        description: 'Software Engineer at The Amazing Company' 
        }, 
        { date: '2025-09-01', 
          status: 'Applied',
          company: 'New Company' ,
          position: 'Fullstack Developer' ,
          contact: 'password' ,
          description: 'Fullstack Developer at New Company' 
          }, 
    ],
    { individualHooks: false }
  );
};
