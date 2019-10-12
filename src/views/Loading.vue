<template>
  <div class="loading">
    <CharacterIcon state="still" :color="activeColor" />
  </div>
</template>

<script>
import CharacterIcon from '@/components/CharacterIcon.vue';

export default {
  components: {
    CharacterIcon,
  },
  data() {
    return {
      activeColor: 'blue',
      currentColorIndex: 0,
      colors: ['blue', 'red', 'yellow', 'green'],
    };
  },
  created() {
    this.loop();
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
