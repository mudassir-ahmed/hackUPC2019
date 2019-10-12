<template>
  <div class="game">
    <div class="score-dashboard">
      <div class="score-dashboard__score">123,45</div>
      <div class="score-dashboard__user">dino-dan</div>
    </div>

    <div class="current-location">
      <div class="current-location__lead">You're currently in</div>
      <div class="current-location__location">Barcelona, Spain</div>
    </div>
    <CharacterIcon state="sprint" color="blue" />
    <div class="lead">Where to next?</div>

    <transition-group name="travel-list" tag="div" class="travel-options">
      <div
        v-for="(travelItem, index) in travelItems"
        v-bind:key="index"
        class="travel-options__option"
        @click="remove(index)"
      >
        <div class="travel-options__option__location">{{ travelItem.location }}</div>
        <div class="travel-options__option__price">&euro;{{ travelItem.price }}</div>
      </div>
    </transition-group>
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
      travelItems: [
        {
          location: 'location',
          price: '100,00',
        },

        {
          location: 'location',
          price: '260,00',
        },
      ],
    };
  },
  methods: {
    remove(index) {
      this.travelItems.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.travel-list-item {
  transition: all 3s;
  display: inline-block;
  margin-right: 10px;
}
.travel-list-enter, .travel-list-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: all 3s;
  transform: translateY(30px);
}
.travel-list-leave-active {
}

.game {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.score-dashboard {
  &__score {
    font-size: 34px;
  }

  &__user {
    font-size: 14px;
    opacity: 0.5;
  }
}

.current-location {
  margin: 25px 0;

  .current-location__lead {
    opacity: 0.3;
  }

  .current-location__location {
    font-size: 25px;
    font-weight: bold;
  }
}

.lead {
  margin-top: 10px;
  opacity: 0.3;
}

.travel-options {
  width: 100%;

  &__option {
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
    }

    &:hover,
    &:active {
      background-color: #deb100;
      transition: 0.2s ease;
    }

    &__location {
      font-size: 20px;
      font-weight: bold;
    }

    &__price {
      font-size: 14px;
      font-weight: bold;
      opacity: 0.75;
    }
  }
}
</style>
