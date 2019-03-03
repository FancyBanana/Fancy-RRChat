<template>
  <div class="home">
  <!-- <chat-test msg="hello world 2"></chat-test> -->
  <message text="this is a text"></message>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ChatTest from "../components/ChatTest.vue"
import Message from "../components/Message.vue"

export default Vue.extend({
  name: "home",
  components: {
    ChatTest,
    Message,
  },
  computed: {
  },
  data() {
    return {
    };
  }
});
</script>
