import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import User from "../models/User";

dotenv.config();

const DatabaseObject: any = {
  dialect: process.env.DIALECT || "mysql",
  host: process.env.HOST,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  socketPath: "",
  logging: false,
};

const connection = new Sequelize({
  dialect: DatabaseObject.dialect,
  dialectOptions: {
    socketPath: "/tmp/mysql.sock",
  },
  host: DatabaseObject.host,
  username: DatabaseObject.username,
  password: DatabaseObject.password,
  database: DatabaseObject.database,
  logging: DatabaseObject.logging,
  port: DatabaseObject.port,
  // models: [User],
});

export default connection;
