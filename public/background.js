

  
  // background.js

chrome.runtime.onInstalled.addListener(() => {
  console.log('LinkedIn Auto Connector extension installed.');
});

chrome.action.onClicked.addListener((tab) => {
  // This event will be fired when the extension's action button is clicked
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: connectWithAllProfiles
  });
});

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
    }, index * 2000); // Delay to avoid rapid clicking
  });
}
