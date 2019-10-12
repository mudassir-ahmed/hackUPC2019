<template>
  <div class="about">
    <h1>This is the simple implementation of using socket.io with vuejs</h1>
    <button @click="travel('barcelona')">Travel now</button>
  </div>
</template>

<script>
export default {
  name: 'about',
  /**
   * If you want to listen socket events from component side, you need to add
   * `sockets` object in Vue component, and every function will start to listen
   * events, depends on object key
   * */
  sockets: {
    connect() {
      console.log('socket connected');
    },
    client_handle_travel_event(data) {
      console.log(data);
    },
  },
  methods: {
    travel(location) {
      this.$socket.emit('server_travel_event', { location });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
