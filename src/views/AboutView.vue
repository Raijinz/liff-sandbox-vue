<script setup lang="ts">
import TheEmbedSpotify from "@/components/TheEmbedSpotify.vue";
import liff from "@line/liff";
import { reactive } from "vue";

const state = reactive({ friendFlag: false });

async function getFriendship() {
  try {
    const friendship = await liff.getFriendship();
    state.friendFlag = friendship.friendFlag;
  } catch (error) {
    console.error(error);
  }
}

if (import.meta.env.PROD) {
  getFriendship()
}
</script>

<template>
  <div class="about">
    <p>Friendship: {{ state.friendFlag }}</p>
    <TheEmbedSpotify />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
