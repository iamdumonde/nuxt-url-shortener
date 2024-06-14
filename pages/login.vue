<template>
  <div class="prose">
    <h1>Connexion</h1>
    <form @submit.prevent="login(form)">

      <label for="">
        Email
        <input type="email" v-model="form.email">
      </label>
      <label for="">
        Mot de passe
        <input type="password" v-model="form.password">
      </label>

      <button type="submit" class="btn">Se connecter</button>
    </form>

    <p>Pas de compte ?
      <NuxtLink to="/register" class="underline text-lime-600">Inscrivez-vous !</NuxtLink>
    </p>

  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout: "centered",
  middleware: ["guest"],
});


interface LoginPayload {
  email: string;
  password: string;
}

const form = ref<LoginPayload>({
  email: "",
  password: "",
});

const {login} = useAuth();

</script>

<style></style>