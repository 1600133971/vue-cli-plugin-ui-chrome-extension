<%_ if (hasBackground) { _%>
function someBackgroundJs() {
}

<%_ if (hasContent) { _%>
chrome.contextMenus.create({
  title: 'use baidu for \"%s\"', // %s selected text
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
<%_ } _%>

<%_ if (hasRules) { _%>
chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'baidu.com'}})],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
<%_ } _%>

<%_ if (hasOmnibox) { _%>
// omnibox 演示
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  console.log('inputChanged: ' + text);
  if(!text) return;
  if(text == '美女') {
    suggest([
      {content: '中国' + text, description: '你要找“中国美女”吗？'},
      {content: '日本' + text, description: '你要找“日本美女”吗？'},
      {content: '泰国' + text, description: '你要找“泰国美女或人妖”吗？'},
      {content: '韩国' + text, description: '你要找“韩国美女”吗？'}
    ]);
  }
  else if(text == '微博') {
    suggest([
      {content: '新浪' + text, description: '新浪' + text},
      {content: '腾讯' + text, description: '腾讯' + text},
      {content: '搜狐' + text, description: '搜索' + text},
    ]);
  }
  else {
    suggest([
      {content: '百度搜索 ' + text, description: '百度搜索 ' + text},
      {content: '谷歌搜索 ' + text, description: '谷歌搜索 ' + text},
    ]);
  }
});

// 当用户接收关键字建议时触发
chrome.omnibox.onInputEntered.addListener((text) => {
    console.log('inputEntered: ' + text);
  if(!text) return;
  var href = '';
    if(text.endsWith('美女')) href = 'http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=' + text;
  else if(text.startsWith('百度搜索')) href = 'https://www.baidu.com/s?ie=UTF-8&wd=' + text.replace('百度搜索 ', '');
  else if(text.startsWith('谷歌搜索')) href = 'https://www.google.com.tw/search?q=' + text.replace('谷歌搜索 ', '');
  else href = 'https://www.baidu.com/s?ie=UTF-8&wd=' + text;
  openUrlCurrentTab(href);
});

// 获取当前选项卡ID
function getCurrentTabId(callback)
{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
  {
    if(callback) callback(tabs.length ? tabs[0].id: null);
  });
}

// 当前标签打开某个链接
function openUrlCurrentTab(url)
{
  getCurrentTabId(tabId => {
    chrome.tabs.update(tabId, {url: url});
  })
}
<%_ } _%>
<%_ } _%>