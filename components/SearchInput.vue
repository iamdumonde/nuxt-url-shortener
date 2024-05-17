<template>
  <div>
    <span></span>
    <input type="text" placeholder="Rechercher un lien" class="pl-10 p-2 rounded border "
    v-model="modelValue"
    >

    <p>{{ modelValue }}</p>
  </div>
</template>

<script lang="ts" setup>
// const props = defineProps<{
//   modelValue: string;
// }>();
const modelValue = defineModel();
</script>

<style>

</style>