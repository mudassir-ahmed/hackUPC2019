<template>
  <div class="loading">
    <CharacterIcon state="still" :color="activeColor" />

    <span>Connecting</span>
  </div>
</template>

<script>
import CharacterIcon from '@/components/CharacterIcon.vue';

export default {
  sockets: {
    client_handle_full_lobby(data) {
      console.log('e');
      this.$router.push({
        name: 'game',
        params: { flightNumber: this.flightNumber, userName: this.userName },
      });
    },
  },
  components: {
    CharacterIcon,
  },
  data() {
    return {
      activeColor: 'blue',
      currentColorIndex: 0,
      colors: ['blue', 'red', 'yellow', 'green'],
      flightNumber: 'not set',
      userName: 'not set',
    };
  },
  created() {
    this.loop();
    this.flightNumber = this.$route.params.flightNumber;
    this.userName = this.$route.params.userName;
  },
  methods: {
    loop() {
      setTimeout(() => {
        let nextColorIndex = this.currentColorIndex + 1;
        if (nextColorIndex >= this.colors.length) {
          nextColorIndex = 0;
        }
        this.activeColor = this.colors[nextColorIndex];
        this.currentColorIndex = nextColorIndex;
        this.loop();
      }, 250);
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
