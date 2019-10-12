<template>
  <div>
    <div
      :class="`character-icon character-icon--${state}`"
      :style="`background-image: url('${require(`./dino/sheets/${color}.png`)}');`"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      required: true,
      validator(value) {
        return [
          'idle',
          'run',
          'kick',
          'hurt',
          'sprint',
          'still',
          'cheer',
        ].includes(value);
      },
    },
    color: {
      type: String,
      required: true,
      validator(value) {
        return [
          'blue',
          'red',
          'yellow',
          'green',
          'blue_cheer',
          'red_cheer',
          'yellow_cheer',
          'green_cheer',
        ].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.character-icon {
  width: 96px;
  height: 96px;
}

.character-icon--idle {
  animation: idle 0.8s steps(4) infinite;
}

.character-icon--run {
  animation: run 0.8s steps(6) infinite;
}

.character-icon--kick {
  animation: kick 0.8s steps(3) infinite;
}

.character-icon--hurt {
  animation: hurt 0.8s steps(4) infinite;
}

.character-icon--sprint {
  animation: sprint 0.8s steps(7) infinite;
}

.character-icon--still {
  background-position: 0px;
}

.character-icon--cheer {
  animation: cheer 0.8s steps(6) infinite;
}

@keyframes idle {
  from {
    background-position: 0px;
  }
  to {
    background-position: -384px;
  }
}

@keyframes run {
  from {
    background-position: -384px;
  }
  to {
    background-position: -960px;
  }
}

@keyframes kick {
  from {
    background-position: -960px;
  }
  to {
    background-position: -1248px;
  }
}

@keyframes hurt {
  from {
    background-position: 768px;
  }
  to {
    background-position: 1152px;
  }
}

@keyframes sprint {
  from {
    background-position: 96px;
  }
  to {
    background-position: 768px;
  }
}

@keyframes cheer {
  from {
    background-position: 0px;
  }
  to {
    background-position: -576px;
  }
}
</style>
