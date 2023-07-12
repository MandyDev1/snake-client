const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for receiving data
  conn.on("data", (data) => {
    console.log("Received data:", data);
  });

  // event handler for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // send the "Name" message
    conn.write("Name: LWQ");
  });

  return conn;
};

module.exports = { connect };