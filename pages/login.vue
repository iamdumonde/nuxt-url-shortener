<template>
  <div class="prose">
    <h1>Connexion</h1>
    <form @submit.prevent="">
      <label for="">
        Email
        <input type="email">
      </label>
      <label for="">
        Mot de passe
        <input type="password">
      </label>

      <button type="button" class="btn">Se connecter</button>
    </form>

    <p>Pas de compte ?
      <NuxtLink to="/register" class="underline text-lime-600">Inscrivez-vous !</NuxtLink>
    </p>
    
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'centered',
});

const form = ref({
  name: "",
  email: "",
  password: "",
});

async function register(){


}

</script>

<style>

</style>