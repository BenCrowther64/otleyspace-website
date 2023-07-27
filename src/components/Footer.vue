<template>

    <div class="px-80 py-10 flex flex-row items-center justify-left gap-60 bg-waves bg-otley-light-blue bg-repeat">
        <img src="../assets/branding/otley-space-logo.png" class="w-60"/>

        <div class="text-xl text-otley-dark-blue flex gap-20">

            <div class="flex flex-col">

                <p class="font-bold mb-3 underline">Links</p>

                <div class="flex flex-row gap-1">
                    <img v-if="checkCurrentRoute('Home')" class="w-3" src="../assets/homepage/right-arrow.svg">
                    <router-link class="m-0 p-0" to="/">Home</router-link>
                </div>

                <div class="flex gap-1">
                    <img v-if="checkCurrentRoute('About')" class="w-3" src="../assets/homepage/right-arrow.svg">
                    <router-link class="m-0 p-0" to="/about">About</router-link>
                </div>

                <div class="flex gap-1">
                    <img v-if="checkCurrentRoute('Contact')" class="w-3" src="../assets/homepage/right-arrow.svg">
                    <router-link class="m-0 p-0" to="/contact">Contact</router-link>
                </div>
            </div>

            <div>
                <p class="font-bold mb-3 underline">Socials</p>
                <a href="https://m.facebook.com/groups/908657096695235/" class="">
                    <div class="flex flex-row gap-1 items-center">
                        <img class="w-7" src="../assets/branding/facebook.svg">
                        <p>Facebook</p>
                    </div>
                </a>
                <a href="https://www.instagram.com/otley_space/" class="">
                    <div class="flex flex-row gap-1">
                        <img class="w-7" src="../assets/branding/instagram.svg">
                        <p>Instagram</p>
                    </div>
                </a>
                <div class="flex flex-row gap-1">
                    <img class="w-7" src="../assets/branding/twitter.svg">
                    <p>Twitter</p>                    
                </div>
            </div>

        </div>

        <div class="flex flex-row text-lg text-otley-dark-blue">
            <p>made by</p>
            <a href="https://github.com/BenCrowther64" class="font-semibold">&nbsp;ben crowther</a>
        </div>

    </div>

</template>

<script setup>
    import {useRouter} from "vue-router";

    const router = useRouter();
    var currrentRouteName = router.currentRoute.value.name;

    function checkCurrentRoute(name) {
        if (currrentRouteName === name) return true;
        return false;
    }
</script>

<style scoped>
    .router-link-active {
        margin: 0;
        padding: 0;
        color: white;
        pointer-events: none;
    }
</style>