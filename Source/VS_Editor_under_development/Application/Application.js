const path = require("path");
const { app, BrowserWindow } = require("electron");

const IsMacOS = process.platform === "darwin";

const Create_Main_Window = () => {
    const Main_Window = new BrowserWindow({
        title: "VS Editor",
        width: 1000,
        height: 800,
        resizable: false
    });

    Main_Window.loadFile(path.join(__dirname, "../Renderer/Window.html"));
};

app.whenReady().then(() => {
    Create_Main_Window();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            Create_Main_Window();
        };
    });
});

app.on("window-all-closed", () => {
    if (!IsMacOS) {
        app.quit();
    };
});
