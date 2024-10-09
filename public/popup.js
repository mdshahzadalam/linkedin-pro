// popup.js
document.getElementById('connectBtn').addEventListener('click', () => {
    // Ensure chrome.tabs API is accessible
    if (typeof chrome !== 'undefined' && chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // Execute script in the active tab
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: connectWithAllProfiles, // Function should be passed or injected properly
        });
      });
    } else {
      console.log('Chrome API is not available.');
      alert('This action only works in a Chrome Extension environment.');
    }
  });
  
  // This function will be injected into the current tab
  function connectWithAllProfiles() {
    const connectButtons = document.querySelectorAll('button[data-control-name="connect"]');
  
    if (connectButtons.length === 0) {
      alert('No connectable profiles found.');
      return;
    }
  
    connectButtons.forEach((button, index) => {
      setTimeout(() => {
        button.click();
        console.log(`Clicked connect for profile ${index + 1}`);
      }, index * 2000); // Delay to avoid rapid clicks
    });
  }
  