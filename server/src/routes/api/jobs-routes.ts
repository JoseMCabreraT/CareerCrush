import express from 'express';
import type { Request, Response } from 'express';
import { Job } from '../../models/index.js';
import { authenticateToken } from '../../middleware/auth.js'; // Import the authentication middleware


const router = express.Router();

// GET /jobs - Get all jobs
router.get('/', authenticateToken, async (_req: Request, res: Response) => {
  try {
    if (!_req.user || !_req.user.username) {
      return res.status(400).json({ message: 'User not authenticated' });
    }
    const jobs = await Job.findAll({
      // Add your filter conditions here if needed
      
      where: {
        username: _req.user.username // Filter by username
      }
    });
    return res.json(jobs);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

// GET /jobs/:id - Get a user by id
// router.get('/:username', async (req: Request, res: Response) => {
//   try {
//     const job = await Job.findAll( {
//       // filter conditions to get job by id
//       where: {
//         username: req.params.username // Filter by username
//       }
      
//     });
//     if (job) {
//       res.json(job);
//     } else {
//       res.status(404).json({ message: 'Job not found' });
//     }
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// });

// POST /jobs - Create a new user
router.post('/', async (req: Request, res: Response) => {
  const { date, status, company, position, contact, description } = req.body;
  try {
    const newJob = await Job.create({ date, status, company, position, contact, description, username: req.body.username });
    res.status(201).json(newJob);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /jobs/:id - Update a user by id
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { date, status, company, position, contact, description } = req.body;
  try {
    const job = await Job.findByPk(id);
    if (job) {
      job.date = date;
      job.status = status;
      job.company = company;
      job.position = position;
      job.contact = contact;
      job.description = description;
      await job.save();
      res.json(job);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /jobs/:id - Delete a user by id
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const job = await Job.findByPk(id);
    if (job) {
      await job.destroy();
      res.json({ message: 'Job deleted' });
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export { router as jobRouter };
