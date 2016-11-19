const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
// Report crashes to our server.
//electron.crashReporter.start();

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 600, height: 800});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

