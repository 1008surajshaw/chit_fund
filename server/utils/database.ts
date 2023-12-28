import { Sequelize } from "sequelize";

const sequelize = new Sequelize('chit_fund', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});
export default sequelize;
