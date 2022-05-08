const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fetch = require('node-fetch');
const fs = require("fs");
const { contextIsolated } = require('process');

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
  //https://gist.github.com/thedoapps/50019afade672fa132e8
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    x:0,
    y:10,
    transparent:true,
    frame: false,
    movable: true,
    icon: path.join(__dirname, 'images/thing.png'),
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
  const filename = path.resolve(__dirname, "data.json");
  fs.readFile(filename, 'utf8', (error, data) => {
   if(error){
      console.log(error);
      return;
   }
   var content = JSON.parse(data);
   if (content.client != ""){
      mainWindow.loadFile(path.join(__dirname, 'has_client.html'));
   }else{
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
   }
  })


  
  
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.


function check_file(){
   





  /*
  const md5 = require('md5');
  txt_path = '../../../../../../Users/simon/.lunarclient/offline/1.8/logs/latest.log'
  console.log(txt_path)
  console.log('Watching for file changes on ${txt_path}');
  let md5Previous = null;
  let fsWait = false;
  
  fs.watch(txt_path, (event , filename) => {
    console.log("hi")
    if(filename){
      console.log("poo")
        if(fsWait) return;
        fsWait = setTimeout( () => {
            fsWait = false;
        }, 0.00000001);
        const md5Current = md5(fs.readFileSync(txt_path));
        if (md5Current === md5Previous) {
            return;
        }
        md5Previous = md5Current;
        console.log("file changed");
        fs.readFile(txt_path, 'utf-8', (err, data) => {
            if (err) throw err;
            let lines = data.trim().split("\n")
            console.log(lines[lines.length - 1])
        })
    }
})
*/
}



