<template>
  <div>
    Déconnexion...
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";

definePageMeta({
  layout: 'simple'
})


// const route = useRouter()
onMounted(async() => {
  await axios.post('/logout');
  useRouter().replace('/login');
});

</script>

<style></style>