
chrome.devtools.panels.create('MyPanel', 'img/icon.png', 'mypanel.html', function(panel) {
  console.log('mypanel is created successfully!');
});

chrome.devtools.panels.elements.createSidebarPane("Images", function(sidebar) {
  sidebar.setExpression('document.querySelectorAll("img")', 'All Images');
});