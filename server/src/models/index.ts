import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { JobFactory } from './jobs.js';

const User = UserFactory(sequelize);
const Job = JobFactory(sequelize);

export { User, Job };
