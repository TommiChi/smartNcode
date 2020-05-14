<template>
  <div id="player" class="player">
  </div>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

import player from '../lib/player';

interface ProgramInterface {
  [propName: string]: any;
}

@Component({
  name: 'Player',
  components: {
  },
  computed: {
    ...mapGetters({
      programs: 'gemist/programs',
    }),
  },
  methods: {
    ...mapActions({
      getGemist: 'gemist/getGemist',
    }),
  },
})
export default class Gemist extends Vue {
  programs: any;

  getGemist: any;

  mounted(): void {
    const programs = this.programs();
    console.warn('/!\\ Video --> ', programs, this.$route.params.id, player);
    let target;
    for (const day of programs) {
      for (const program of day.items) {
        if (program.guid === this.$route.params.id) {
          target = program;
          break;
        }
      }
      if (target) {
        break;
      }
    }

    if (target) {
      player('player').setup({
        file: target.sources[0].file,
        height: 563,
        width: 1000,
        autostart: true,
      });
    }
  }
}
</script>
