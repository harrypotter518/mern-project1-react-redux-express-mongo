
const { Client } = require('pg');

const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const client = new Client({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT
});

client.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
})

// DB Migration

// client.query("CREATE TABLE IF NOT EXISTS shorturl (	id INTEGER NOT NULL DEFAULT '0',	username VARCHAR(200) NULL DEFAULT NULL, realurl VARCHAR(200) NULL DEFAULT NULL,	shortcode VARCHAR(200) NULL DEFAULT NULL,	clicked INTEGER NOT NULL DEFAULT '0', created TIMESTAMP NULL DEFAULT NULL, updated TIMESTAMP NULL DEFAULT NULL,	PRIMARY KEY (id))");

// End DB Migration


module.exports = client;
