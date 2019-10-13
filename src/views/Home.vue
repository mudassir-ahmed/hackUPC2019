<template>
  <div class="home">
    <img class="logo" src="./logo.png" />
    <div class="group">
      <input v-model="flightNumber" type="text" required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Flight Number</label>
    </div>

    <div class="group">
      <input v-model="userName" type="text" required />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Username</label>
    </div>
    <button class="btn" type="button" @click="handleClick()">
      <span>PLAY</span>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      flightNumber: '',
      userName: '',
    };
  },
  name: 'home',
  components: {},
  methods: {
    handleClick() {
      console.log('okay clicked');
      this.$socket.emit('client_create_player', { username: this.userName });
      this.$router.push({
        name: 'loading',
        params: { flightNumber: this.flightNumber, userName: this.userName },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
}

.logo {
  margin: 0 auto 20px auto;
  max-height: 130px;
}

.group {
  position: relative;
  top: 30px;
  margin-bottom: 45px;
}
input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #efefef;
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: #b5b5b5;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #b5b5b5;
}
.btn {
  &,
  &:link,
  &:visited {
    background-color: #ffcc00;
    color: #ffffff;
    padding: 20px 30px;
    border-radius: 8px;
    text-align: left;
    max-width: 250px;
    margin: 10px auto;
    width: 100%;
    border: none;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  &:hover,
  &:active {
    background-color: #deb100;
    transition: 0.2s ease;
  }
}
</style>
