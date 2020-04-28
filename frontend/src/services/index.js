import io from "socket.io-client";

const socket = io.connect("localhost:3000/");

export default socket;
