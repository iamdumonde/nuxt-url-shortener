<template>
  <div class="prose">
    <h1>Connexion</h1>

    <FormKit type="form" submit-label="Se connecter" @submit="handleLogin">
      <FormKit type="email" label="Email" name="email" />
      <FormKit type="password" label="Mot de passe" name="password" />
    </FormKit>

    <p>Pas de compte ?
      <NuxtLink to="/register" class="underline text-lime-600">Inscrivez-vous !</NuxtLink>
    </p>

  </div>
</template>

<script lang="ts" setup>
import { Axios } from 'axios';
import type { LoginPayload } from '~/@types';
import type { FormKitNode } from "@formkit/core";

definePageMeta({
  layout: "centered",
  middleware: ["guest"],
});


const { login } = useAuth();


async function handleLogin(payload: LoginPayload) {
  try {
    await login(payload);
  } catch (e: unknown) {
    if (e instanceof AxiosError && e.response?.status === 422) {
      node?.setErrors([], e.response?.data.errors);
    }
  }
}

</script>

<style></style>