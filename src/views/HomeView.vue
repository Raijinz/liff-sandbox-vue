<script setup lang="ts">
import { computed, ref } from "vue";
import type { Ref } from "vue";
import liff from "@line/liff";

const os = ref(liff.getOS());
const imageFiles: Ref<FileList | null | undefined> = ref();
const imageFile: Ref<File | null | undefined> = ref();
const enableCapture = computed(() => {
  return os.value === "android";
});
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
      :capture="enableCapture"
      multiple
      @change="previewFiles"
    />
    <li v-for="n in imageFiles?.length" :key="n">
      {{ imageFiles?.item(n - 1)?.name }}
    </li>
  </main>
</template>
