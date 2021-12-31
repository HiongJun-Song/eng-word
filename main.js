const {app, BrowserWindow} = require('electron')


const create_window = () => {
    const app = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "white",
        webPreferences:{
            nodeIntegration: false,

        }

    })

    app.loadFile('index.html')
}

app.whenReady().then(create_window)