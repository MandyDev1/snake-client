const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // event handler for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // send the "Name" message
    conn.write("Name: BOB");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for receiving data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

module.exports = { connect };