import axios from "axios";

export default defineNuxtRouteMiddleware(async (to, from) => {
    
    // const {} = await axios.get('/user');
    try {
        // console.log();
        const {data : user} = await axios.get('/user');
        if(user) { // if the user is login
            return navigateTo('/me');//redirect to her profile
        }
    } catch (e: unknown) {} // sinon le entrer ces identifiants
})
