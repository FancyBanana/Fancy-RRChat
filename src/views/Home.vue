<template>
  <div class="home">
  <chat-test msg="hello world 2"></chat-test>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ChatTest from "../components/ChatTest.vue"

export default Vue.extend({
  name: "home",
  components: {
    ChatTest,
  },
  computed: {
  },
  data() {
    return {
    };
  }
});
</script>
