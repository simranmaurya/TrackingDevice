// const socket = io();
// var socket = io();
// const socket = io("http://localhost:3000"); // Use the exact URL where your server is running
const socket = io("http://localhost:3000", {
  transports: ["websocket"],
});

console.log("INSIDE SCRIPT");

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location");
    },
    (error) => {
      console.error(error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    }
  );
}

L.map("map").setView([0, 0], 10);
L.tileLayer("http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png");
