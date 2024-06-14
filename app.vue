<template>
   <div class="max-w-7xl mx-auto">
      <!-- <Hello/> -->
      <!-- composant permettant d'importer une autre page.. -->
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </div>
</template>
<script setup lang="ts">
useHead({
   title: 'Url Shortener',
   link: [{
      rel: 'icon',
      href: '/app-icon.png',
      type: 'image/png',
   }]
})</script>
