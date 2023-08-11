import { Model, DataTypes, Sequelize } from 'sequelize';
import { Post } from '../config/database';

class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;

  public static associate: (model: typeof Post) => void;
}
const UserFactory = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'users',
      sequelize,
      timestamps: true,
    }
  );
  User.associate = (Post) => {
    User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
  };

  return User;
};

export default UserFactory;
