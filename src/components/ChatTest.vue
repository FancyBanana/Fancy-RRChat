<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import tmi from "twitch-js"

export default Vue.extend({
  name: "ChatTest",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  mounted() {
    console.log("mounted");
    let options = {
      options:{
        debug: false
      },
      connection:{
        secure: true
      },
      identity: {
        uername: "justinfan1",
        password: ""
      },
      channels: ["esl_csgo"]
    };
    let client =  new tmi.client(options);
    client.on("message", (target: any, context: any, msg: any, self: any) => {
      console.log(msg); 
    });

    client.on("connected", (addr, port) => { console.log(`* Connected to ${addr}:${port}`);
    });

    client.connect();
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
