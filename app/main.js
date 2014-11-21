chrome.devtools.panels.create(
    "Chrome REPL",
    "images/exec.png",
    "devtool-repl.html",
    function(panel) {
        panel.onShown.addListener(function(win){ win.focus(); });
    }
);