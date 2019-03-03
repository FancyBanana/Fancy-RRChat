<template>
  <div v-resize="updateDimentions" class="chat-message">
    <p>{{text}}</p>
    <br>
    <p>{{width}}</p>
    <p>{{height}}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import resize from 'vue-resize-directive'


export default Vue.extend({
  name: "Message",
  directives:{
      resize,
  },
  props: {
    text: String
  },
  data: function() {
    return {
      width: 0,
      height: 0
    };
  },
  computed: {
  },
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
    }
  },
  mounted: function() {
    this.updateDimentions();
    console.log("mounted");
  },
});
</script>

<style lang="scss" scoped>
.chat-message {
  border: 2px solid red;
  box-sizing: border-box;
}
</style>
