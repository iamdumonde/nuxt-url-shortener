<template>
  <div class="prose">
    <h1>Créer un nouveau lien</h1>
    <GoBack>Revenir en arrière</GoBack>

    <form>
      <label for="link">Lien complet</label>
      <input id="link" type="text" name="full_link" placeholder="Entrez le lien complet..." autofocus />
      <button class="btn">Créer le lien</button>
    </form>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
    middleware: ["auth"],
})

</script>

<style></style>