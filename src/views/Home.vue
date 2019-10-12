<template>
  <div class="home">
    Please enter your flight number
    <input v-model="userid" type="text" name id />
    <span>Your username is {{ userid }}</span>
    <button @click="handleClick()">Okay</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      userid: 'not set',
    };
  },
  name: 'home',
  components: {},
  methods: {
    handleClick() {
      console.log('okay clicked');
      this.$router.push({ name: 'about', params: { maxUsers: 4 } });
    },
  },
  created() {
    this.$socket.emit('initialJoin', { userid });
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
