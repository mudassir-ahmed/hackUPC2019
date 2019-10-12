<template>
  <div class="winLose">
    Your Team Won!
    <CharacterIcon state="idle" color='red' />
  </div>
</template>

<script>
import CharacterIcon from '@/components/CharacterIcon.vue';

export default {
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
  font-size:30px;
  font-weight: "bold";
}
</style>
