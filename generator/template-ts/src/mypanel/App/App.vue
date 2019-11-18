<%_ if (hasDevtools) { _%>
<template>
  <div class="main_app">
    <h1>Hello Devtools - Mypanel</h1>
    <div class="content">
      <div><a href="javascript:;" id="check_jquery" v-on:click="check_jquery">Check jQuery</a></div>
      <div><a href="javascript:;" id="open_resource" v-on:click="open_resource">Check html N.O. 20 line source code in current page</a></div>
      <div><a href="javascript:;" id="test_inspect" v-on:click="test_inspect">Check the first image in current page</a></div>
      <div><a href="javascript:;" id="get_all_resources" v-on:click="get_all_resources">Get all resources in current page</a></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'app',
  methods: {
    check_jquery: function (event) {
      chrome.devtools.inspectedWindow.eval("jQuery.fn.jquery", function(result, isException) {
        var html = '';
        if (isException) html = 'no use jQuery';
        else html = 'Current page uses jQuery which version is '+ result;
        alert(html);
      });
    },
    open_resource: function (event) {
      chrome.devtools.inspectedWindow.eval("window.location.href", function(result, isException) {
        chrome.devtools.panels.openResource(result, 20, function() {
          console.log('Resource is opened successfully');
        });
      });
    },
    test_inspect: function (event) {
      chrome.devtools.inspectedWindow.eval("inspect(document.images[0])", function(result, isException){});
    },
    get_all_resources: function (event) {
      chrome.devtools.inspectedWindow.getResources(function(resources) {
        alert(JSON.stringify(resources));
      });
    }
  }
}
</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<%_ } _%>