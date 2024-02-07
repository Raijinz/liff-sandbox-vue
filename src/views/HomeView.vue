<script setup lang="ts">
import liff from "@line/liff";

function openGoogle() {
  liff.openWindow({
    url: "https://www.africau.edu/images/default/sample.pdf",
    external: false,
  });
}
</script>

<template>
  <main>
    <input type="text" autocomplete="one-time-code" />
    <button type="button" @click="openGoogle">
      Open Google in the new window
    </button>
  </main>
</template>
