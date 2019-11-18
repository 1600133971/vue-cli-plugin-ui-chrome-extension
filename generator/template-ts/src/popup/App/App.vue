<%_ if (hasPopup) { _%>
<template>
<%_ if (!hasElement) { _%>
  <div class="main_app">
    <h1>Hello popup</h1>
  </div>
<%_ } else { _%>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix"
    >
      <span>Card Name</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
      >Operation Button</el-button>
    </div>
    <div
      v-for="o in 4"
      :key="o"
      class="text item"
    >
      {{'list content ' + o }}
    </div>
    <div>
      <%_ if (hasBadge) { _%>
      <a href="#" id="show_badge" v-on:click="show_badge">Show badge</a>
      <a href="#" id="hide_badge" v-on:click="hide_badge">Hide badge</a>
      <%_ } _%>
      <%_ if (hasNotification) { _%>
      <a href="#" id="show_notification" v-on:click="show_notification">Show notification</a>
      <%_ } _%>
    </div>
  </el-card>
<%_ } _%>
</template>

<script lang="ts">
export default {
  name: 'app',
  methods: {
    <%_ if (hasBadge) { _%>
    show_badge: function (event) {
      chrome.browserAction.setBadgeText({text: 'New'});
      chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
    },
    hide_badge: function (event) {
      chrome.browserAction.setBadgeText({text: ''});
      chrome.browserAction.setBadgeBackgroundColor({color: [0, 0, 0, 0]});
    },
    <%_ } _%>
    <%_ if (hasNotification) { _%>
    show_notification: function (event) {
      chrome.notifications.create(null, {
        type: 'image',
        iconUrl: 'img/icon.png',
        title: 'Wish',
        message: 'Merry christmas!',
        imageUrl: 'img/sds.png'
      });
    },
    <%_ } _%>
  }
}
</script>

<style>
<%_ if (!hasElement) { _%>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
<%_ } else { _%>
.box-card {
  width: 300px;
}
a {margin-right: 10px;}
<%_ } _%>
</style>
<%_ } _%>