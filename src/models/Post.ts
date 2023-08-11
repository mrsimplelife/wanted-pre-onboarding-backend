import { Model, DataTypes, Sequelize } from 'sequelize';
import { User } from '../config/database';

class Post extends Model {
  public id!: number;
  public title!: string;
  public content!: string;
  public userId!: number;

  public static associate: (model: typeof User) => void;
}

const PostFactory = (sequelize: Sequelize) => {
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      tableName: 'posts',
      sequelize,
      timestamps: true,
    }
  );
  Post.associate = (User) => {
    Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  };

  return Post;
};

export default PostFactory;
