const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const myWindow = new BrowserWindow({
    height: 300,
    width: 500,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  myWindow.loadFile("index.html");
});
