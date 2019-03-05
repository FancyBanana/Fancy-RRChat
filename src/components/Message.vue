<template>
  <div v-resize="updateDimentions" class="chat-message">
    <p>{{text}}</p>
    <br>
    <p>{{width}}</p>
    <p>{{height}}</p>
    <input type="button" value="pree me">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import resize from "vue-resize-directive";
import EventBus from "../classes/EventBus";
import tc from "../classes/TwitchClient";

export default Vue.extend({
  name: "Message",
  directives: {
    resize
  },
  props: {
    text: String
  },
  data: function() {
    return {
      width: 0,
      height: 0,
      twitch_client: null
    };
  },
  computed: {},
  methods: {
    updateDimentions: function() {
      let el = this.$el;
      if (el != null) {
        this.width = el.offsetWidth;
        this.height = el.clientWidth;
      } else {
        this.width = 0;
        this.height = 0;
      }
    },
    alertme: function() {
    }
  },
  mounted: function() {
    this.updateDimentions();
  }
});
</script>

<style lang="scss" scoped>
.chat-message {
  border: 2px solid red;
  box-sizing: border-box;
  animation: rainbow-bg 5s linear 0s 1 forwards;
  color: bisque;
}

@keyframes rainbow-bg {
  0% {
    background-color: #9d50bb;
  }
  100% {
    background-color: #6e48aa;
  }
}
</style>
