<template>
  <div class="prose">
    <h1>Inscription</h1>
    <form>
      <label for="">
        Nom et prénom
        <input type="text">
      </label>
      <label for="">
        Email
        <input type="email">
      </label>
      <label for="">
        Mot de passe
        <input type="password">
      </label>
      <label for="">
        Confirmer Mot de passe
        <input type="password">
      </label>

      <button type="button" class="btn">S'inscrire</button>
    </form>

    <p>Avez-vous déjà un compte ?
      <NuxtLink to="/login" class="underline text-lime-600">Connectez-vous !</NuxtLink>
    </p>
    
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'centered',
});

</script>

<style>

</style>