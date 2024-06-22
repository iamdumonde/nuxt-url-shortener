<template>
  <div class="prose">
    <h1>Inscription</h1>

    <FormKit type="form" submit-label="S'inscire" @submit="handleRegister">
      <FormKit type="text" label="Nom d'utilisateur" name="name" validation="required" />
      <FormKit type="email" label="Email" name="email" validation="required" />
      <FormKit type="password" label="Mot de passe" name="password" validation="required" />
      <FormKit type="password" label="Confirmez le mot de passe" name="password_confirmation"
        validation="required|confirm:password" />
      <!-- <FormKit type="number" name="age" help="Entrez un nombre entre 10 et 20" validation="required|min:10|max:20"/> -->
      <!-- <FormKit type="date" label="Date d'anniversaire" help="Entrez votre date de naissance" name="date" validation="required|date_between:1950-01-01 00:00:00, 2010-12-31 23:59:59"
      :validation-messages="{date_between: 'Juste pour les ancêtres'}" /> -->
    </FormKit>

    <p>Avez-vous déjà un compte ?
      <NuxtLink to="/login" class="underline text-lime-600">Connectez-vous !</NuxtLink>
    </p>

  </div>
</template>

<script lang="ts" setup>
import axios, { AxiosError } from "axios";
import type { RegisterPayload } from "~/@types";
import type {FormKitNode} from "@formkit/core";

definePageMeta({
  layout: "centered",
  middleware: ["guest"],
});

const { register } = useAuth();

async function handleRegister(payload: RegisterPayload, node?: FormKitNode) {
  try {
    await register(payload);
  } catch (e: unknown) {
    if(e instanceof AxiosError && e.response?.status === 422){
      node?.setErrors([], e.response?.data.errors);
    }
  }
}

</script>

<style></style>