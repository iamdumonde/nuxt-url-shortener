<template>
  <div class="mx-auto max-w-md prose">
    <h1 class="">Modifier le lien</h1>
    <GoBack/>
    <form action="">
      <label>
        <div>Lien court</div>
        <input type="text">
      </label>
      <label>
        <div>Lien complet</div>
        <input type="text">
      </label>
      <button>
        Modifier le lien
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  middleware: ['auth']
})

</script>

<style>
input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full block p-2;
}

label {
  @apply block mb-2 text-sm font-medium text-gray-900;
}
</style>