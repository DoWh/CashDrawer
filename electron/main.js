const { app, BrowserWindow } = require('electron')

const isMac = process.platform === 'darwin';
const isDev = process.argv[2] === 'dev'
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const createMainWindow = () => {
    const win = new BrowserWindow({
        width: (isDev) ? 1000 : 400,
        height: 800
    })

    win.loadURL(`http://localhost:3000/`);
 
    // win.setMenu(null)
    if (isDev) win.webContents.openDevTools()

    
} 

app.whenReady().then(() => {
    createMainWindow()
})

app.on('window-all-closed', () => {
    if (!isMac) app.quit()
})
