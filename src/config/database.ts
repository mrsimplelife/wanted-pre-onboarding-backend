import { Sequelize } from 'sequelize';
import UserFactory from '../models/User';
import PostFactory from '../models/Post';
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

export const User = UserFactory(sequelize);
export const Post = PostFactory(sequelize);

export default sequelize;
