async function connectWithAllProfiles() {
    const connectButtons = document.querySelectorAll('button[data-control-name="connect"]');
  
    if (connectButtons.length === 0) {
      alert('No connectable profiles found on this page.');
      return;
    }
  
    for (let i = 0; i < connectButtons.length; i++) {
      connectButtons[i].click();
      console.log(`Clicked Connect for profile ${i + 1}`);
      await delay(2000); // Delay of 2 seconds (adjustable between 1-3 seconds)
    }
  
    alert('Connection requests sent!');
  }
  
  // Helper function to add a delay
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }






  // content.js

// Example content script to automate LinkedIn connections
// function connectWithAllProfiles() {
//   const connectButtons = document.querySelectorAll('button[data-control-name="connect"]');

//   if (connectButtons.length === 0) {
//     alert('No connectable profiles found.');
//     return;
//   }

//   connectButtons.forEach((button, index) => {
//     setTimeout(() => {
//       button.click();
//       console.log(`Clicked connect for profile ${index + 1}`);
//     }, index * 2000); // Delay between clicks to avoid rate limits
//   });
// }

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === "startConnecting") {
//     connectWithAllProfiles();
//   }
// });

  