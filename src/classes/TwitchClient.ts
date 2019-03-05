import Vue from "vue";
import tmi from "twitch-js";

export interface TwitchChatMessage {
    msg:string,
    emotes:any,
}

class TwitchClient {
  constructor(_eventBus: Vue, opts: tmi.ClientOptions) {
    this.eventBus = _eventBus;

    let options = Object.assign({}, this.default_options, opts);
    console.log(options)
    this.client = new tmi.client(options);

    this.client.on("message", (channel, user_data, message_text, sent_by_me) => {
      this.eventBus.$emit(this.event_channel, {
        msg: message_text,
        emotes: user_data.emotes
      });
      console.log(channel, user_data, message_text, sent_by_me);

    });

    this.client.on("connected", (addr, port) => {
      console.log(`* Connected to ${addr}:${port}`);
    });
    this.client.connect();
  }

  // event channel to post messages to
  event_channel: string = "chat_message";
  // twitch clinet instance
  client: tmi.client;
  // event bust that is used to post messages
  eventBus: Vue;
  // default connection options for twitch client
  default_options: tmi.ClientOptions = {
    options: {
      debug: false
    },
    connection: {
      secure: true
    },
    identity: {
      username: "justinfan1",
      password: ""
    }
  };
}

export default TwitchClient;
