document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0].url;
      const qrCodeDiv = document.getElementById('qr-code');
  
      // Create and display the QR code in the <div> element
      new QRCode(qrCodeDiv, {
        text: url,
        width: 200,
        height: 200,
      });
    });
  });