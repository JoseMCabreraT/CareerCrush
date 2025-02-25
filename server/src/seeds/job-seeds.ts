import { Job } from '../models/index.js';

export const seedJobs = async () => {
  await Job.bulkCreate(
    [
      { 
        date: '2025-09-01', 
        status: 'Applied',
        company: 'The Amazing Company' ,
        position: 'Software Engineer' ,
        contact: 'hr@amazingco.io' ,
        description: 'Software Engineer at The Amazing Company',
        username: "SunnyScribe" // Add username field
        }, 
        { 
          date: '2025-09-01', 
          status: 'Applied',
          company: 'New Company' ,
          position: 'Fullstack Developer' ,
          contact: 'hr@fullstack.io' ,
          description: 'Fullstack Developer at New Company',
          username: "JollyGuru" // Add username field
          }, 
          { 
            date: '2025-09-11', 
            status: 'Applied',
            company: 'The Fullstack Company' ,
            position: 'Backend Engineer' ,
            contact: 'hr@fullstack.io' ,
            description: 'Backend Engineer at The Fullstack Company',
            username: "SunnyScribe" // Add username field
            }, 
            { 
              date: '2025-10-11', 
              status: 'Applied',
              company: 'New Company' ,
              position: 'Fullstack Developer' ,
              contact: 'hr@fullstack.io' ,
              description: 'Fullstack Developer at New Company',
              username: "JollyGuru" // Add username field
              }
    ],
    { individualHooks: false }
  );
};
