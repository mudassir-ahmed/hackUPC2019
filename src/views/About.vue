<template>
  <div class="about">
    <h1>This is the simple implementation of using socket.io with vuejs</h1>
    <button @click="clickButton('hello')">Trigger socket</button>
  </div>
</template>

<script>
export default {
  // If you want to listen socket events from component side, you need to add `sockets` object in Vue component, and every function will start to listen events, depends on object key
  sockets: {
    connect() {
      console.log('socket connected');
    },
    customEmit(data) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)',
      );
    },
  },
  methods: {
    clickButton(data) {
      // $socket is socket.io-client instance
      this.$socket.emit('emit_method', data);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
