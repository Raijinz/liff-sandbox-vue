<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const imageFiles: Ref<FileList | null | undefined> = ref();
const imageFile: Ref<File | null | undefined> = ref();
const previewFiles = (event: Event) => {
  const target = event.target as HTMLInputElement;
  imageFile.value = target.files?.[0] || null;
  imageFiles.value = target.files;
};
// import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <input
      id="file"
      type="file"
      accept="image/*"
      capture
      multiple
      @change="previewFiles"
    />
    <p v-for="(file, index) in imageFiles" :key="index">
      {{ file.name }}
    </p>
  </main>
</template>
