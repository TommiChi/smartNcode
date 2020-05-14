<template>
  <Gemist />
</template>

<script>
// import player from '@/lib/player';
// import axios from 'axios';
import Gemist from '@/components/Gemist.vue';

export default {
  name: 'Home',
  components: {
    Gemist,
  },
  // mounted() {
  //   player('player').setup({
  //     file:
  //       'https://vod-tpc-prod-1.talpatvcdn.nl/SBS/oOBoF25CSRfs/130b4525-f450-4639-802b-17ad705d83ad/VOXPOPS-index.ism/733424.m3u8',
  //     height: 360,
  //     width: 640,
  //     autostart: true,
  //   });
  // },
};
</script>
