const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    fullscreen: true,
  })
  win.removeMenu();
  if (process.env.NODE_ENV === 'development') {
    console.log("dev");
    win.loadURL('http://localhost:3000')
  } else {
    win.loadFile(
      `${path.join(__dirname, '../build/index.html')}`
    )
  }
})

app.on('window-all-closed', () => {
    app.quit()
})