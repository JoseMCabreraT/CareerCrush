import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { JobFactory } from './jobs.js';

const User = UserFactory(sequelize);
const Job = JobFactory(sequelize);

// Define associations
User.hasMany(Job, { foreignKey: 'username' });
Job.belongsTo(User, { foreignKey: 'username' });

// sequelize.sync({ force: true }).then(() => {
//     console.log('Database & tables created!');
//   });

export { User, Job };
