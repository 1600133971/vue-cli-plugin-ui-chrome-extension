chrome.contextMenus.create({
  title: 'use baidu for：%s', // %s selected text
  contexts: ['selection'], // show menu when text is selected
  onclick: function(params) {
    //no use location.href, because location is belong to background of window object
    chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
  }
});

chrome.contextMenus.create({
  title: "test",
  onclick: function() {
    alert('you have clicked context menu!');
  }
});
