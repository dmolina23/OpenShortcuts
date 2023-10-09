chrome.commands.onCommand.addListener(function (command) {
    if (command.startsWith("openBookmark")) {
        const bookmarkIndex = parseInt(command.replace("openBookmark", ""));
        chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
            const bookmarks = bookmarkTreeNodes[0].children[0].children; // Esto supone que los marcadores están en la carpeta "Barra de marcadores".
            if (bookmarkIndex >= 0 && bookmarkIndex < bookmarks.length) {
                const bookmarkUrl = bookmarks[bookmarkIndex].url;
                chrome.tabs.create({ url: bookmarkUrl });
            }
        });
    }
});