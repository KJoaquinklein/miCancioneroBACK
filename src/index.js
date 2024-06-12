const { server } = require("./app");
const { conn } = require("./DB_connection");

conn.sync({ force: true });

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log("el server se encuentra en el puerto 3001");
});
