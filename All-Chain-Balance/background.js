// This is a placeholder function. Replace it with your actual implementation.
function fetchBalance(address) {
  // Fetch the balance from the blockchain explorer API here
}

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'fetchBalance') {
    fetchBalance(request.address).then(balance => {
      sendResponse({ balance });
    });

    // Indicate that the response is asynchronous
    return true;
  }
});