<template>
  <div class="prose">
    <h1>Créer un nouveau lien</h1>
    <GoBack>Revenir en arrière</GoBack>

    <FormKit type="form" submit-label="Créer le lien">
      <FormKit type="url" name="full_link" label="Lien complet" validation="required"/>
    </FormKit>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
    middleware: ["auth"],
})

</script>

<style></style>