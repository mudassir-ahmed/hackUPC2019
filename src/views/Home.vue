<template>
  <div class="home">
    <CharacterIcon/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import CharacterIcon from '@/components/CharacterIcon.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    CharacterIcon,
  },
};
</script>
