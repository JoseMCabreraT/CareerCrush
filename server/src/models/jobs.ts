import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

export interface JobAttributes {
  id: number;
  date: string;
  status: string;
  company: string;
  position: string;
  contact: string;
  description: string;
  username: string; // Add userName field
}

interface JobCreationAttributes extends Optional<JobAttributes, 'id'> {}

export class Job
  extends Model<JobAttributes, JobCreationAttributes>
  implements JobAttributes
{
  public id!: number;
  public date!: string;
  public status!: string;
  public company!: string;
  public position!: string;
  public contact!: string;
  public description!: string;
  public username!: string; // Add username field

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function JobFactory(sequelize: Sequelize): typeof Job {
  Job.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'users_table', // Name of the target model
          key: 'username', // Key in the target model
        },
      },
    },
    {
      tableName: 'jobs',
      sequelize,
    }
  );

  return Job;
}