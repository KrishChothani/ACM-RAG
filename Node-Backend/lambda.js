/** @format */

console.log("working, inside in lambda js");

import serverless from "serverless-http";
import { app } from "./src/app.js";
import connectDB from "./src/db/index.js";



import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

let isDbConnected = false;

const apphandler = async (event, context) => {
  if (!isDbConnected) {
    await connectDB();
    isDbConnected = true;
    console.log("MongoDb Connected Successfully !!");
  }

  return await serverless(app)(event, context);
};
console.log("working, inside in lambda js after import");

export const handler = apphandler;
