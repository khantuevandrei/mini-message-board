const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertNewMessage(username, text, added) {
  await pool.query(
    "INSERT INTO messages (username, text, added) VALUES ($1, $2, $3);",
    [username, text, added]
  );
}

async function createMessagesTable() {
  await pool.query(
    `CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            username TEXT,
            text TEXT,
            added TEXT
        );
        `
  );
}

module.exports = {
  getAllMessages,
  insertNewMessage,
  createMessagesTable,
};
