<template>
  <div class="home">
    Please enter your flight number
    <input type="text" name id />
    <button @click="handleClick()">Okay</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {},
  methods: {
    handleClick() {
      console.log('okay clicked');
      this.$router.push({ name: 'about', params: { maxUsers: 4 } });
    },
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
