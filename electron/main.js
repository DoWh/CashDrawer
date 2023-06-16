const path = require('path');
const { app, BrowserWindow, globalShortcut, Tray, Menu } = require('electron');

const Server = require('../express/server')

const cashDrawer = require('./cashDrawer');


const isMac = process.platform === 'darwin';
const isDev = process.argv[2] === 'dev'
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const createMainWindow = () => {

    const win = new BrowserWindow({
        width: (isDev) ? 1000 : 400,
        height: 800
    })
    win.hide();
    win.loadURL(
        isDev
          ? 'http://localhost:3000'
          : `file://${path.join(__dirname, '../build/index.html')}`
    );

    if (isDev) win.webContents.openDevTools()
    else win.setMenu(null)

    

    win.on('close', (ev) => {
        if (win?.isVisible()) {
          ev.preventDefault();
          win.hide();
        }
    });

} 

function createTray() {

    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Open',
            click: () => {
                BrowserWindow.getAllWindows().shift().show();
            }
        },
        { type: 'separator' },
        {
        label: 'Quit',
        click: () => {
            BrowserWindow.getAllWindows().forEach((w) => w.destroy());
            app.quit();
        }
        }
    ]);
  
    const tray = new Tray(path.join(__dirname, '../public/Icon.png'));
    tray.setToolTip('Cash Drawer');
    tray.setContextMenu(contextMenu);
    tray.on('click', () => {
        BrowserWindow.getAllWindows().shift().show();
    });

}

// Open CashDrawer by Key
function StartListeningKey(key){
    //key - for open CashDrawer (globalListen)
    globalShortcut.register(key, () => {
        cashDrawer.open(); 
    })
}

//
app.whenReady()
    .then(()=>{
        StartListeningKey('numsub')
    })
    .then(()=>{
        createMainWindow()
    })
    .then(()=>{
        createTray()
    })

// for MAC close app
// app.on('window-all-closed', () => {
//     if (!isMac) app.quit()
// })