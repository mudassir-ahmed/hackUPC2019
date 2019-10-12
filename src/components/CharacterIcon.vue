<template>
  <div>
    <div class="character-icon character-icon--idle"></div>
    <div class="character-icon character-icon--run"></div>
    <div class="character-icon character-icon--kick"></div>
    <div class="character-icon character-icon--hurt"></div>
    <div class="character-icon character-icon--sprint"></div>
  </div>
</template>

<style lang="scss" scoped>
.character-icon {
  width: 96px;
  height: 96px;
  background-image: url("./dino/sheets/DinoSprites - mort.png");
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
</style>
