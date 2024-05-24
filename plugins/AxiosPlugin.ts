import axios from "axios"

export default defineNuxtPlugin(async (nuxtApp) => {
    //configuration de base pour que les requêtes soient acceptées par le backend
    const config = useRuntimeConfig();
    axios.defaults.baseURL = `${config.public.apiUrl}/api`;
    axios.defaults.headers.common['Content-Type'] = "application/json"; // on envoie du json au serveur
    axios.defaults.headers.common['Accept'] = "application/json"; // on attend du serveur du json
    axios.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest"; // on envoie une requête ajax
    axios.defaults.withCredentials = true; // 
    axios.defaults.withXSRFToken = true; //

    //on lance une requête pour avoir les cookies
    await axios.get("/sanctum/csrf-cookie", {
        baseURL: config.public.apiUrl,
    });
})