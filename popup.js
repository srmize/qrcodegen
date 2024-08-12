document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTabId = tabs[0].id;

    chrome.tabs.executeScript(activeTabId, {
      code: "window.getSelection().toString();"
    }, (selection) => {
      let text = selection[0];

      if (!text) {
        text = tabs[0].url; // Fallback to URL if no text is selected
      }

      const qrCodeDiv = document.getElementById('qr-code');
      new QRCode(qrCodeDiv, {
        text: text,
        width: 400,
        height: 400,
      });
    });
  });
});