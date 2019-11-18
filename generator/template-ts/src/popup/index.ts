<%_ if (hasPopup) { _%>
import Vue from "vue";
import AppComponent from "./App/App.vue";

Vue.component("app-component", AppComponent);

<%_ if (hasElement) { _%>
import {
  Card,
  Button
} from 'element-ui';

Vue.use(Card);
Vue.use(Button);
<%_ } _%>

new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});
<%_ } _%>