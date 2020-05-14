<template>
  <div class="dropdown">
    <label class="dropdown__selected" @click="toggleDropdown()">
      <span class="selected__text">{{selection}}</span>
      <svg :class="{ 'selected__arrow': true, 'expanded': expanded }" data-testid="dropDownIndicator" xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 36 36" class="DropdownMenustyle__DropdownIndicatorStyle-sc-1h1izrc-3 jnEVQu"><path fill-rule="evenodd" d="M15.998 17.32l7.472-4.668a1 1 0 1 1 1.06 1.696l-8.002 5a1 1 0 0 1-1.06 0l-7.998-5a1 1 0 1 1 1.06-1.696l7.468 4.669z" transform="translate(0, 3)"></path></svg>
    </label>
    <div class="dropdown__list">
      <ul :class="{ 'list__wrapper': true, 'expanded': expanded }">
        <li class="list__item" v-for="(item, index) in list" :key="item.text"
        @click="triggerSelected(item, index)">
          <svg class="item__icon" v-if="item.selected" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
            <path fill="#33c497" fill-rule="evenodd"
            d="M13.41 22.744l10.772-15.32a1 1 0 0 1 1.636 1.151L14.247 25.032a1 1 0 0 1-1.624.018l-6.429-8.743a1 1 0 0 1 1.612-1.185l5.604 7.622z"/>
          </svg>
          <span :class="['item__text', { 'indented': !item.selected }]">{{item.text}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dropdown {
    cursor: pointer;
    display: inline-block;

    &__list {
      overflow: hidden;
    }

    &__selected {
      border: solid 1px green;
      border-radius: 10px;
      margin: 0;
      padding: 10px 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .selected {
    &__text {
      padding-left: 10px;
      font-weight: bold;
      font-size: 20px;;
    }

    &__arrow {
      transition: transform .2s ease-out 0s;
      transform: scaleY(1);

      &.expanded {
        transform: scaleY(-1);
      }
    }
  }

  .list {
    &__wrapper {
      list-style: none;
      padding-left: 0;
      transition: all .5s ease-out 0s;
      transform: translateY(-110%);
      margin-top: -100vh;

      &.expanded {
        margin-top: 0;
        transform: translateY(0);
      }
    }

    &__item {
      display: flex;
      align-items: center;
    }
  }

  .item__text.indented {
    margin-left: 21px;
  }
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'Dropdown',
})
export default class Dropdown extends Vue {
  private selected = '';

  private selectionIndex = 0;

  expanded = false;

  @Prop() dropdownItems!: string[];

  @Prop() defaultSelected!: number;

  get selection() {
    return this.selected;
  }

  get list() {
    return this.dropdownItems.map((item: string, index: number) => ({
      text: item,
      selected: index === this.selectionIndex,
    }));
  }

  toggleDropdown(): void {
    this.expanded = !this.expanded;
  }

  triggerSelected(item: any, index: number): void {
    this.$emit('dropdownSelection', {
      index,
      ...item,
    });
    this.selected = item.text;
    this.selectionIndex = index;
    this.expanded = false;
  }

  created(): void {
    this.dropdownItems.forEach((item: string, index: number) => {
      if (index === this.defaultSelected) {
        this.selected = item;
        this.selectionIndex = index;
      }
    });
  }
}
</script>
