// const shell = require('electron').shell;
// const remote = require('electron').remote;
// const {app, BrowserWindow, ipcRenderer } = remote;
const { app, BrowserWindow, ipcMain, dialog} = require('electron');
//const { ipcRenderer } = require('@electron/remote/ipcRenderer')
const { autoUpdater } = require("electron-updater")

const path = require('path');
var url = require('url')
const fetch = require('node-fetch');
const fs = require("fs");
const { contextIsolated } = require('process');
//const storage = require('electron-json-storage');
const settings = require('electron-settings');
const uaup = require("uaup-js")

// async function clearSettings(){
//   await settings.unset();

// }
//  clearSettings()

let mainWindow
const dispatch = (data) => {
  mainWindow.webContents.send('message', data)
}








if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

ipcMain.on('quit', (evt, arg) => {
  app.quit()
})


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    x:0,
    y:10,
    transparent:true,
    frame: false,
    // movable: true,
    icon: path.join(__dirname, 'icon.ico'),
    // vibrancy: 'ultra-dark',
    // backgroundColor: '#59000000',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      // devTools: false
    }
   //autoUpdater.checkForUpdates();
  });
  ipcMain.on("minimize", (event, data) => {
    mainWindow.minimize;
  });
  mainWindow.setMenuBarVisibility(true)

  // and load the index.html of the app.
  getSettings();
  async function getSettings(){
    const x = await settings.has('client')
    console.log(x)
    const check = await settings.has('background')

    if (!check){
      settings.set('background', 'rgba(0,0,0,0.450)')
    }
    if (x){
      mainWindow.loadFile(path.join(__dirname, 'has_client.html'));
   }else{
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
   }
  }
  //const filename = path.resolve(__dirname, "data.json");
  // fs.readFile(filename, 'utf8', (error, data) => {
  //  if(error){
  //     console.log(error);
  //     return;
  //  }
  //var content = JSON.parse(data);

  


  
  
  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

};
ipcMain.on('bedwars-link', (evt, arg) => {
  BrowserWindow.getAllWindows()[0].loadURL(url.format({
    pathname : path.join(__dirname,'bedwars.html'),
    protocol:'file',
    slashes:true
  }))
})

ipcMain.on('bridge-link', (evt, arg) => {
  BrowserWindow.getAllWindows()[0].loadURL(url.format({
    pathname : path.join(__dirname,'bridge.html'),
    protocol:'file',
    slashes:true
  }))
})

ipcMain.on('skywars-link', (evt, arg) => {
  BrowserWindow.getAllWindows()[0].loadURL(url.format({
    pathname : path.join(__dirname,'skywars.html'),
    protocol:'file',
    slashes:true
  }))
})

ipcMain.on('search-link', (evt, arg) => {
  BrowserWindow.getAllWindows()[0].loadURL(url.format({
    pathname : path.join(__dirname,'search.html'),
    protocol:'file',
    slashes:true
  }))
})

ipcMain.on('settings-link', (evt, arg) => {
  BrowserWindow.getAllWindows()[0].loadURL(url.format({
    pathname : path.join(__dirname,'settings.html'),
    protocol:'file',
    slashes:true
  }))
})

ipcMain.on('select-link', (evt, arg) => {
  BrowserWindow.getAllWindows()[0].loadURL(url.format({
    pathname : path.join(__dirname,'index.html'),
    protocol:'file',
    slashes:true
  }))
})

ipcMain.on('about-link', (evt, arg) => {
  BrowserWindow.getAllWindows()[0].loadURL(url.format({
    pathname : path.join(__dirname,'about.html'),
    protocol:'file',
    slashes:true
  }))
})
ipcMain.on('searched-link', (evt, arg) => {
  BrowserWindow.getAllWindows()[0].loadURL(url.format({
    pathname : path.join(__dirname,'searched_stats.html'),
    protocol:'file',
    slashes:true
  }))
})

// autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
//   const dialogOpts = {
//     type: 'info',
//     buttons: ['Restart', 'Later'],
//     title: 'Application Update',
//     message: process.platform === 'win32' ? releaseNotes : releaseName,
//     detail:
//       'A new version has been downloaded. Restart the application to apply the updates.',
//   }

//   dialog.showMessageBox(dialogOpts).then((returnValue) => {
//     if (returnValue.response === 0) autoUpdater.quitAndInstall()
//   })
// })





// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () =>{
  createWindow()
  autoUpdater.checkForUpdatesAndNotify()
});
//check_file();
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    
    createWindow();
   

    
  }
});

autoUpdater.on('update-available', (info) => {
  dispatch('Update available.')
})

autoUpdater.on('update-downloaded', (info) => {
  dispatch('Update downloaded')
})

// function updateThing(){
//   let x = autoUpdater.checkForUpdatesAndNotify()
//   console.log(x)
// }








//uaup.Update(updateOptions);











// const sendStatusToWindow = (text) => {
//   log.info(text);
//   if (mainWindow) {
//     mainWindow.webContents.send('message', text);
//   }
// };

// autoUpdater.on('checking-for-update', () => {
//   sendStatusToWindow('Checking for update...');
// });
// autoUpdater.on('update-available', info => {
//   sendStatusToWindow('Update available.');
// });
// autoUpdater.on('update-not-available', info => {
//   sendStatusToWindow('Update not available.');
// });
// autoUpdater.on('error', err => {
//   sendStatusToWindow(`Error in auto-updater: ${err.toString()}`);
// });
// autoUpdater.on('download-progress', progressObj => {
//   sendStatusToWindow(
//     `Download speed: ${progressObj.bytesPerSecond} - Downloaded ${progressObj.percent}% (${progressObj.transferred} + '/' + ${progressObj.total} + )`
//   );
// });
// autoUpdater.on('update-downloaded', info => {
//   sendStatusToWindow('Update downloaded; will install now');
// });

// autoUpdater.on('update-downloaded', info => {
//   // Wait 5 seconds, then quit and install
//   // In your application, you don't need to wait 500 ms.
//   // You could call autoUpdater.quitAndInstall(); immediately
//   autoUpdater.quitAndInstall();
// });