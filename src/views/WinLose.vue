<template>
  <div class="winLose">
    <div v-if="this.$route.params.isWinner">Your Team Won!</div>
    <div v-else>Your Team Lost!</div>
    <CharacterIcon state="idle" color="green" />
    <a href="/">New game</a>
  </div>
</template>

<script>
import CharacterIcon from '@/components/CharacterIcon.vue';

export default {
  created() {
    console.log(this.$route.params.team);
  },
  name: 'winLose',
  components: {
    CharacterIcon,
  },
};
</script>

<style lang="scss" scoped>
.winLose {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 30px;
  font-weight: "bold";
}
</style>
