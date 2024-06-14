<template>
  <div>
    Déconnexion...
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout: 'simple'
})

const { logout } = useAuth();
logout();

// const route = useRouter()
// onMounted(async() => {
//   await axios.post('/logout');
//   useRouter().replace('/login');
// });

</script>

<style></style>