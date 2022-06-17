const { app, BrowserWindow, Menu } = require('electron')
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 560,
        height: 700,
        icon: path.join(__dirname, '/src/img/icon.png'),
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('src/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

Menu.setApplicationMenu(null)