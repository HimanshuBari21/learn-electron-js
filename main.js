const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const myWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    width: 450,
    minWidth: 450,
    maxWidth: 450,
    minHeight: 550,
    height: 550,
    fullscreenable: false,
  });

  myWindow.loadFile("index.html");
});
