<template>
    <div class="prose">
        <nav class="flex justify-between items-center mb-4 min-w-full">
            <h1 class="mb-0">Mes liens</h1>
            <!-- <SearchInput :modelValue="search" @update:modelValue="$event => search = $event"/> -->
            <div class="flex items-center gap-4 justify-end">
                <SearchInput :model-value="search" />
                <NuxtLink to="/links/create"
                    class="no-underline px-3 py-2 text-white bg-gray-600 hover:bg-gray-800 rounded-md transition-all">Créer
                    un Lien</NuxtLink>
            </div>
        </nav>

        <div v-if="true">
            <table class="w-full border text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th class="">Lien complet</th>
                        <th class="">Lien court</th>
                        <th class="">Nbr. Vues</th>
                        <th class="">Supprimer</th>
                        <th class="">Editer</th>
                        <th aria-label="Rafraîchir">Rafraichir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="link in links" :key="link.id" class="bg-white border-b">
                        <td>
                            <a :href="link.full_links" target="_blank"> {{ link.full_links }}</a>
                        </td>
                        <td>
                            <a :href="`${useRuntimeConfig().public.appUrl}/${link.short_links}`">
                                {{ `${useRuntimeConfig().public.appUrl.replace(/^http(s?):\/\//, "")}/${link.short_links}`
                                }}
                            </a>
                        </td>
                        <td> {{ link.views }}</td>
                        <td>
                            <button>🧨</button>
                        </td>
                        <td>
                            <NuxtLink :to="`/links/${link.id}`">👔</NuxtLink>
                        </td>
                        <td> </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <p>
                <!-- afficher si on entre un lien de recherche et qu'on ne trouve rien -->
                <span v-if="true">Aucun lien ne correspond à votre recherche !</span>

                <!-- s'afficher si au chargement de la page aucun lien n'est retourné -->
                <span v-if="false">
                    Aucun lien créé pour le moment !
                    <NuxtLink to="" class="text-green-600 underline">
                        Créez votre premier lien.
                    </NuxtLink>
                </span>
            </p>
        </div>
    </div>
</template>bv

<script lang="ts" setup>
const links = [
    {
        short_links: "dkjksm",
        full_links: "http://www.youtube.com",
        views: 3,
        id: 1,
    },
    {
        short_links: "dfsqsd",
        full_links: "http://w3school.com",
        views: 5,
        id: 2,
    },
    {
        short_links: "dsqsdfq",
        full_links: "http://devdocs.io",
        views: 0,
        id: 3,
    }
];

const search = ref("");
definePageMeta({
  middleware: ['auth']
})
</script>

<style scoped>
th {
    @apply px-6 py-3;
}

td {
    @apply px-6 py-4;
}
</style>