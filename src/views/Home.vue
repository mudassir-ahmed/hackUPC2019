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
      <label>Insert a Username</label>
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
      flightNumber: 'not set',
      userName: 'not set',
    };
  },
  name: 'home',
  components: {},
  methods: {
    handleClick() {
      console.log('okay clicked');
      this.$router.push({
        name: 'about',
        params: { flightNumber: this.flightNumber, userName: this.userName },
      });
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

.logo {
  bottom: 20px;
  transform: scale(0.75);
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
  border-bottom: 1px solid #757575;
}
input:focus {
  outline: none;
}

/* LABEL ======================================= */
label {
  color: #999;
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
  color: #5264ae;
}

.btn {
  position: relative;

  display: block;
  margin: 30px auto;
  padding: 0;

  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  background-color: #ffcc00;
  color: #ffffff;
  font-size: 50px;
  font-weight: "bold";

  transition: background-color 0.3s;
}

.btn:hover,
.btn:focus {
  background-color: #ffae00;
}

.btn > * {
  position: relative;
}

.btn span {
  display: block;
  padding: 12px 24px;
}

.btn:before {
  content: "";

  position: absolute;
  top: 50%;
  left: 50%;

  display: block;
  width: 0;
  padding-top: 0;

  border-radius: 100%;

  background-color: rgba(236, 240, 241, 0.3);

  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.btn:active:before {
  width: 120%;
  padding-top: 120%;

  transition: width 0.2s ease-out, padding-top 0.2s ease-out;
}
</style>
