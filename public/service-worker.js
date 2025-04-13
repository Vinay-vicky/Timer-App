self.addEventListener("install", (event) => {
    console.log("Service Worker installing.");
  });
  
  self.addEventListener("activate", (event) => {
    console.log("Service Worker activated.");
  });
  
  self.addEventListener("fetch", (event) => {
    // Optional caching logic
  });
  














// self.addEventListener("install", function (event) {
//     console.log("Service Worker installing.");
//   });
  
//   self.addEventListener("activate", function (event) {
//     console.log("Service Worker activated.");
//   });
  




























// self.addEventListener("install", (event) => {
//     console.log("Service Worker installing.");
//     event.waitUntil(Promise.resolve()); // Placeholder logic
//   });
  
//   self.addEventListener("activate", (event) => {
//     console.log("Service Worker activated.");
//     event.waitUntil(Promise.resolve()); // Placeholder logic
//   });
  