<template>
  <div id="app">
    <MainNavigation />
    <router-view/>
  </div>
</template>

<script lang="ts">
// import { Vue } from 'vue-property-decorator';
import MainNavigation from '@/components/MainNavigation.vue';

export default {
  name: 'App',
  components: {
    MainNavigation,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
