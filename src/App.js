// import React from 'react';
// import './App.css';

// /* global chrome */ // Inform ESLint that `chrome` is a global object

// function App() {
//   return (
//     <div className="App">
//       <ConnectAllButton />
//     </div>
//   );
// }



// if (typeof chrome !== 'undefined' && chrome.tabs) {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.scripting.executeScript({
//       target: { tabId: tabs[0].id },
//       function: connectWithAllProfiles,
//     });
//   });
// } else {
//   console.log('This is not a Chrome extension environment.');
// }




// const handleClick = async () => {
//   if (typeof chrome !== 'undefined' && chrome.tabs) {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       chrome.scripting.executeScript({
//         target: { tabId: tabs[0].id },
//         function: connectWithAllProfiles,
//       });
//     });
//   } else {
//     console.log('This is not a Chrome extension environment.');
//     alert('This action only works in a Chrome Extension environment.');
//   }
// };



// const ConnectAllButton = () => {
//   const handleClick = async () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       chrome.scripting.executeScript({
//         target: { tabId: tabs[0].id },
//         function: connectWithAllProfiles, // Define function locally or ensure it's available
//       });
//     });
//   };

//   const floatingButtonStyle = {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     zIndex: 1000,
//     padding: '10px 20px',
//     backgroundColor: '#0073b1',
//     color: 'white',
//     borderRadius: '5px',
//     border: 'none',
//     cursor: 'pointer',
//   };

//   return (
//     <div style={floatingButtonStyle}>
//       <button onClick={handleClick}>Connect with All</button>
//     </div>
//   );
// };

// // Define the function locally for now (or pass it properly if from content.js)
// async function connectWithAllProfiles() {
//   const connectButtons = document.querySelectorAll('button[data-control-name="connect"]');

//   if (connectButtons.length === 0) {
//     alert('No connectable profiles found on this page.');
//     return;
//   }

//   for (let i = 0; i < connectButtons.length; i++) {
//     connectButtons[i].click();
//     console.log(`Clicked Connect for profile ${i + 1}`);
//     await delay(2000); // 2-second delay to avoid rate limits
//   }

//   alert('Connection requests sent!');
// }

// // Helper function to add delay
// function delay(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }

// export default App;


import React from 'react';
import './App.css';

/* global chrome */ // Inform ESLint that `chrome` is a global object

function App() {
  return (
    <div className="App">
      <ConnectAllButton />
    </div>
  );
}

// Function to handle the execution of a script in the active tab
const executeScriptInActiveTab = () => {
  if (typeof chrome !== 'undefined' && chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs.length > 0) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: connectWithAllProfiles, // Ensure the function is available
        });
      }
    });
  } else {
    console.log('This is not a Chrome extension environment.');
    alert('This action only works in a Chrome Extension environment.');
  }
};

// Button component
const ConnectAllButton = () => {
  const handleClick = () => {
    executeScriptInActiveTab();
  };

  const floatingButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    padding: '10px 20px',
    backgroundColor: '#0073b1',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={floatingButtonStyle}>
      <button onClick={handleClick}>Connect with All</button>
    </div>
  );
};

// The function that will be executed in the active tab
async function connectWithAllProfiles() {
  const connectButtons = document.querySelectorAll('button[data-control-name="connect"]');

  if (connectButtons.length === 0) {
    alert('No connectable profiles found on this page.');
    return;
  }

  for (let i = 0; i < connectButtons.length; i++) {
    connectButtons[i].click();
    console.log(`Clicked Connect for profile ${i + 1}`);
    await delay(2000); // 2-second delay to avoid rate limits
  }

  alert('Connection requests sent!');
}

// Helper function to add a delay
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default App;
