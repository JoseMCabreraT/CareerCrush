import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      { username: 'JollyGuru', 
        email: 'jolly@guru.com', 
        password: 'password' 
      },// 1 
      {
        username: 'SunnyScribe',
        email: 'sunny@scribe.com',
        password: 'password',
      },// 2
      {
        username: 'RadiantComet',
        email: 'radiant@comet.com',
        password: 'password' 
      },// 3

      
    ],
    { individualHooks: true }
  );
};
