<template>
    <div class="sticky top-0 flex flex-col items-center gap-8 w-full h-6/12 bg-waves bg-otley-light-blue bg-repeat py-8">
        <img v-if="atTop" @mouseover="warnDisabled" :class="{ 'animate-rotate-y' : disabled }" class="w-80" src="../assets/branding/otley-space-logo.png" alt="Otley Space Logo">
        <div class="flex gap-5 text-3xl">
            <div class="flex flex-col items-center">
                <router-link class="m-0 p-0 transition ease-in-out delay-50 text-white hover:-translate-y-0.5 hover:scale-110 hover:text-otley-dark-blue duration-300" to="/">Home</router-link>
                <img v-if="checkCurrentRoute('Home')" class="w-4 -mt-1" src="../assets/homepage/up-svg.svg">
            </div>
            <div class="flex flex-col items-center">
                <router-link class="m-0 p-0 transition ease-in-out delay-50 text-white hover:-translate-y-0.5 hover:scale-110 hover:text-otley-dark-blue duration-300" to="/about">About</router-link>
                <img v-if="checkCurrentRoute('About')" class="w-4 -mt-1" src="../assets/homepage/up-svg.svg">
            </div>
            <div class="flex flex-col items-center">
                <router-link class="m-0 p-0 transition ease-in-out delay-50 text-white hover:-translate-y-0.5 hover:scale-110 hover:text-otley-dark-blue duration-300" to="/contact">Contact</router-link>
                <img v-if="checkCurrentRoute('Contact')" class="w-4 -mt-1" src="../assets/homepage/up-svg.svg">
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onUnmounted, ref, } from 'vue';
    import { useRouter } from 'vue-router';

    const disabled = ref(false);
    const router = useRouter();
    const atTop = ref(true);

    let currrentRouteName = router.currentRoute.value.name;

    window.addEventListener('scroll', handleScroll);
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    function warnDisabled() {
        if (disabled.value) return;
        disabled.value = true;
        setTimeout(() => {
            disabled.value = false;
        }, 1000);
    }

    function checkCurrentRoute(name) {
        if (currrentRouteName === name) return true;
        return false;
    }

    function handleScroll() {
        if (document.documentElement.scrollTop || document.body.scrollTop > 0) {
            atTop.value = false;
        } else {
            atTop.value = true;
        }
    }

</script>

<style>
    .router-link-active {
        margin: 0;
        padding: 0;
        color: #22314E;
        pointer-events: none;
    }
</style>