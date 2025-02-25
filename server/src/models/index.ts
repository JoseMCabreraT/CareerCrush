import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { JobFactory } from './jobs.js';

const User = UserFactory(sequelize);
const Job = JobFactory(sequelize);

// Define associations
// User.hasMany(Job, { foreignKey: 'username' });
// Job.belongsTo(User, { foreignKey: 'username' });

// // Synchronize the User model first, then the Job model
// // sequelize.sync({ force: true }).then(async () => {
// //   await User.sync({ force: true });
// //   await Job.sync({ force: true });
// //   console.log('Database & tables created!');
// // });

export { User, Job };