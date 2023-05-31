<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import liff from "@line/liff";

const os = ref(liff.getOS());
const imageFiles: Ref<FileList | null | undefined> = ref();
const imageFile: Ref<File | null | undefined> = ref();
const previewFiles = (event: Event) => {
  const target = event.target as HTMLInputElement;
  imageFile.value = target.files?.[0] || null;
  imageFiles.value = target.files;
};
const redirect = () => {
  location.replace("https://www.google.co.th");
};
// import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <input
      v-if="os !== 'android'"
      id="file"
      type="file"
      accept="image/*"
      multiple
      @change="previewFiles"
    />
    <input
      v-else
      id="file"
      type="file"
      accept="image/*"
      capture
      multiple
      @change="previewFiles"
    />
    <li v-for="n in imageFiles?.length" :key="n">
      {{ imageFiles?.item(n - 1)?.name }}
    </li>
    <button type="button" @click="redirect">Go to Google (TH)</button>
  </main>
</template>
