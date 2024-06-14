<template>
  <div>
    <p><strong>Nom d'utilisateur : </strong> {{user.name}}</p>
    <p><strong>Email : </strong> {{user.email}}</p>
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";

definePageMeta({
  middleware: ['auth']
})

const {data: user} = await axios.get("/user");
// console.log(data);


</script>

<style></style>