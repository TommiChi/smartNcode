<template>
  <section class="main-nav">
    <div :class="{'main-nav__expander': true, 'expanded': isExpanded }" v-if="view" @click="expand">
      <span class="expander__line"></span>
      <span class="expander__line"></span>
      <span class="expander__line"></span>
    </div>
    <nav>
      <a href="">KIJK.nl</a>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
  $expander-container-dimensions: 36px;

  .main-nav {
    &__expander {
      width: $expander-container-dimensions;
      height: $expander-container-dimensions;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &.expanded {
        .expander__line {
          animation-play-state: running;
        }
      }
    }

    .expander {
      &__line {
        width: 100%;
        height: 6px;
        background-color: black;
        display: block;
        border-radius: 3px;
        animation: expand .5s ease-out 0s 1 alternate both paused;

        &:first-child {
          width: 80%;
        }
      }
    }
  }

  @keyframes expand {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-45deg);
    }
  }

  @keyframes idle {
    100% {
      transform: rotate(0deg);
    }
  }
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'MainNavigation',
})
export default class MainNavigation extends Vue {
  @Prop() view = '';

  @Prop() isExpanded = false;

  expand(): void {
    this.isExpanded = !this.isExpanded;
  }

  mounted(): void {
    const devices = [
      { width: 400, label: 'small' },
      { width: 1024, label: 'medium' },
    ];

    let view = 'large';
    for (const device of devices) {
      if (window.innerWidth <= device.width) {
        view = device.label;
      }
    }
    this.view = view;
  }
}
</script>
