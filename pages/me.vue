<template>
  <div v-if="user">
    <p><strong>Nom d'utilisateur : </strong> {{user.name}}</p>
    <p><strong>Email : </strong> {{user.email}}</p>
    <!-- <pre>{{ data }}</pre> -->
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  middleware: ['auth']
})

const {user}  = useAuth();

// const {data: user} = await axios.get("/user");
// console.log(data);



</script>

<style></style>