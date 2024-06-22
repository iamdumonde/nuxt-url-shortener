<template>
  <div class="mx-auto max-w-md prose">
    <h1 class="">Modifier le lien</h1>
    <GoBack/>

    <FormKit type="form" submit-label="Modifier le lien">
      <FormKit type="text" name="short_link" label="Lien Court"/>
      <FormKit type="url" name="full_link" label="Lien Complet"/>
    </FormKit>

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