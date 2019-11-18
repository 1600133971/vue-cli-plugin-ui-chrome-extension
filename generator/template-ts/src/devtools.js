<%_ if (hasDevtools) { _%>
chrome.devtools.panels.create('MyPanel', 'img/icon.png', 'mypanel.html', function(panel) {
  console.log('mypanel is created successfully!');
});

<%_ if (hasSidebar) { _%>
chrome.devtools.panels.elements.createSidebarPane("Images", function(sidebar) {
  // sidebar.setPage('../sidebar.html');
  sidebar.setExpression('document.querySelectorAll("img")', 'All Images');
  //sidebar.setObject({aaa: 111, bbb: 'Hello World!'});
});
<%_ } _%>
<%_ } _%>