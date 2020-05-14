<template>
  <div>
    <h2>Video page</h2>
    <Player />
  </div>
</template>

<script>
// import player from '@/lib/player';
// import axios from 'axios';
import Player from '@/components/Player.vue';

export default {
  name: 'Video',
  components: {
    Player,
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
