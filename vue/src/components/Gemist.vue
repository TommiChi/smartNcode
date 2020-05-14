<template>
  <div class="video-list">
    <section class="list__controls">
      <h2 class="list__header">Gemist</h2>
      <Dropdown :dropdownItems="getGemistDropdown()" :defaultSelected="1" class="list__dropdown"
      v-on:dropdownSelection="selectDay" />
    </section>
    <section class="list__tiles">
      <router-link v-for="program in currentPrograms.items" :key="program.guid" :to="`/video/${program.guid}`">
        <div class="tile" :style="`background-image: url(${program.series.imageMedia[0].url});`">
        </div>
      </router-link>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .list {
    &__tiles {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      width: 100vw;
      border:solid thin red;
      margin: 0 auto;
      overflow: hidden;
    }
  }

  .tile {
    display: inline-block;
    width: calc(95vw / 4);
    height: calc(((95vw / 4) * 9) / 16);
    max-width: 200px;
    min-width: 100px;
    margin: 5px;
    overflow: hidden;
    background-size: cover;
    background-position: center;

    &__image {
      width: 100%;
      height: auto;
    }
  }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
import Dropdown from '@/components/Dropdown.vue';

interface ProgramInterface {
  [propName: string]: any;
}

@Component({
  name: 'Gemist',
  components: {
    Dropdown,
  },
  computed: {
    ...mapGetters({
      programs: 'gemist/programs',
    }),
    currentPrograms() {
      const current = this as ProgramInterface;
      return current.programs()[current.programIndex] || { items: [] };
    },
  },
  methods: {
    ...mapActions({
      getGemist: 'gemist/getGemist',
    }),
  },
})
export default class Gemist extends Vue {
  programs: any;

  programIndex = 1;

  getGemist: any;

  weekDays: string[] = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];

  getGemistDropdown(): string[] {
    const orderedDays = ['Vandaag', 'Gisteren'];
    const startPoint = new Date().getDay() - 2;
    const lastWeekDay = 6;
    let daysAdded = 2;
    let dayIndex = startPoint > -1 ? startPoint : lastWeekDay + startPoint;

    while (daysAdded < 8) {
      orderedDays.push(this.weekDays[dayIndex]);
      daysAdded += 1;
      dayIndex = dayIndex ? dayIndex - 1 : lastWeekDay;
    }

    return orderedDays;
  }

  created(): void {
    this.getGemist();
  }

  selectDay(params: any): void {
    this.programIndex = params.index;
  }
}
</script>
