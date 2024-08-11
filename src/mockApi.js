// src/mockApi.js
import store1 from "./assets/AboutUs/Store1.jpg"
import store2 from "./assets/AboutUs/Store2.jpg"

export const getStores = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            imageSrc: store1,
            storeName: "Beverly Hills",
            location: "Los Angeles, CA",
          },
          {
            id: 2,
            imageSrc: store2,
            storeName: "Chicago",
            location: "Chicago, IL",
          },
          // Add more stores here as needed
        ]);
      }, 1000); // Simulating network latency
    });
  };
  