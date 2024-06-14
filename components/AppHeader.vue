<template>
  <div>
    <nav class="bg-gray-800 text-white p-4 shadow-md shadow-gray-900 flex items-center justify-between mb-10">
      <NuxtLink to="/" class="text-3xl font-bold">
        URLShortify !
      </NuxtLink>

      <div class="space-x-3">
        <NuxtLink to="/me">Profile</NuxtLink>
        <NuxtLink to="/links">Liens</NuxtLink>
        <NuxtLink to="/logout">
          <Icon name="mdi:logout" />
        </NuxtLink>
      </div>
    </nav>

  </div>
</template>

<script lang="ts" setup>


</script>

<style>

</style>