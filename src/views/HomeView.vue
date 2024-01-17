<script setup lang="ts">
import liff from "@line/liff";

function openGoogle() {
  liff.openWindow({ url: "https://www.google.co.th", external: false });
}
</script>

<template>
  <main>
    <button type="button" @click="openGoogle">
      Open Google in the new window
    </button>
  </main>
</template>
