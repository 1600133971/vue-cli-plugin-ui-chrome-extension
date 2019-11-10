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
  </el-card>
<%_ } _%>
</template>

<script lang="ts">
export default {
  name: "app"
};
</script>

<style>
<%_ if (!hasElement) { _%>
.main_app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
<%_ } _%>
</style>
