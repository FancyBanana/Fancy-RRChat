<template>
  <div class="home">
    <!-- <chat-test msg="hello world 2"></chat-test> -->
    <message v-for="i in [1,2,3,4,5]" v-bind:key="i" text="'this is a text' + ${i}"></message>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ChatTest from "../components/ChatTest.vue";
import Message from "../components/Message.vue";
import EventBus from "../classes/EventBus";
import TwitchClient, {TwitchChatMessage} from '../classes/TwitchClient';

export default Vue.extend({
  name: "home",
  components: {
    ChatTest,
    Message
  },
  computed: {},
  data() {
    return {};
  },
  mounted: function() {
    // EventBus.$on("chat_message", (arg:TwitchChatMessage) => {
    //   console.log(arg);
    // });
    this.twitch_client = new TwitchClient(EventBus, {channels: ["valkia"]});
  }
});
</script>
