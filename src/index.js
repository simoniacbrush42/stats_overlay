// const shell = require('electron').shell;
// const remote = require('electron').remote;
// const {app, BrowserWindow, ipcRenderer } = remote;
const { app, BrowserWindow, ipcMain, dialog} = require('electron');
//const { ipcRenderer } = require('@electron/remote/ipcRenderer')

const path = require('path');
const fetch = require('node-fetch');
const fs = require("fs");
const { contextIsolated } = require('process');
//const storage = require('electron-json-storage');
const settings = require('electron-settings');
const { autoUpdater } = require("electron-updater")
const uaup = require("uaup-js")

// async function clearSettings(){
//   await settings.unset();

// }
//  clearSettings()

// console.log('File used for Persisting Data - ' + 
//         settings.file());
// //console.log(settings.get('client'))
// console.log(settings.has('client'))
// if (settings.has('client')){
//   console.log(settings.get('client'))
// }else{
//   settings.set('client', 'lunar')
//   console.log("SET")
// }

// const {autoUpdater} = require('electron-updater');
// const log = require('electron-log');

// configure logging
// autoUpdater.logger = log;
// autoUpdater.logger.transports.file.level = 'info';
// log.info('App starting...');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.




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
      enableRemoteModule: true
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
  updateHandler();
};





// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
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

// autoUpdater.on("update-available", (_event, releaseNotes, releaseName) => {
//   const dialogOpts = {
//     type: 'info',
//     buttons: ["Ok"],
//     title: "New Version Available"
//   }
//   dialog.showMessageBox(dialogOpts, (response) => {

//   })
// })

// autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) => {
//   const dialogOpts = {
//     type: 'info',
//     buttons: ["Restart", "Later"],
//     title: "New Version Available",
//     detail: "A new version has been downloaded. Restart the application to apply the updates."
//   }
//   dialog.showMessageBox(dialogOpts).then((returnValue) => {
//     if (returnValue.response === 0){
//       autoUpdater.quitAndInstall()
//     }
//   })
// })

function updateHandler(){

  const updateOptions = {
      gitRepo: "stats-overlay", // [Required] Your Repo Name
      gitUsername: "simoniacbrush42",  // [Required] Your GitHub Username.

      appName: "stats_overlay", //[Required] The Name of the app archive and the app folder.
      appExecutableName: "Foresight Overlay.app", 
  };
  let isUpdateAvalible = uaup.CheckForUpdates(updateOptions);
  console.log(isUpdateAvalible)
  if(isUpdateAvalible){
      const dialogOpts = {
        type: 'info',
        buttons: ["Install", "Later"],
        title: "New Version Available",
        detail: "A new version is available. Click install to update."
      }
      dialog.showMessageBox(dialogOpts).then((returnValue) => {
        if (returnValue.response === 0){
          uaup.Update(updateOptions)
        }
      })
  }
}







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