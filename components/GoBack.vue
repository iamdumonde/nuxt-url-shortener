<template>
  <a href="#" class="text-sm mb-5 italic flex items-center gap-3 no-underline" @click.prevent="useRouter().back()">
    <Icon name='mdi:arrow-left' />
    <slot>Retour</slot>
  </a>



</template>

<script lang="ts" setup>

</script>

<style></style>