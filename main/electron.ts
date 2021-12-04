
// @ts-ignore
const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')

function isDev() {
    return process.env.REACT_APP_ENV === 'development'
}

const ROOT_PATH = path.join(app.getAppPath(), '../')

ipcMain.on('get-root-path', (event, arg) => {
    event.reply('reply-root-path', ROOT_PATH);
});

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {  // 注入node模块
            devTools: true,
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, './resource/renderer.js')
        }
    })
    if (isDev()) {
        mainWindow.loadURL('http://localhost:7008')
    }else {
        mainWindow.loadFile(`file://${path.join(__dirname,'./build/index.html')}`);
    }
}

app.whenReady().then(()=>{
    createWindow()
    app.on('activate', ()=>{
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    })
})
