import express from 'express';
import type { Request, Response } from 'express';
import { Job } from '../../models/index.js';

const router = express.Router();

// GET /jobs - Get all jobs
router.get('/', async (_req: Request, res: Response) => {
  try {
    const jobs = await Job.findAll({
      
    });
    res.json(jobs);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET /jobs/:id - Get a user by id
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const job = await Job.findByPk(id, {
      
    });
    if (job) {
      res.json(job);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /jobs - Create a new user
router.post('/', async (req: Request, res: Response) => {
  const { date, status, company, position, contact, description } = req.body;
  console.log(req.body);
  try {
    const newJob = await Job.create({ date, status, company, position, contact, description });
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
