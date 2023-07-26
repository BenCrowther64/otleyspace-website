<template>

    <div :class="{'sticky' : smallNav, 'unstick' : !smallNav}" class="bg-waves bg-otley-light-blue bg-repeat">

        <div :class="{'slide' : smallNav, 'unslide': !smallNav}" class="relative flex flex-row gap-5 text-4xl p-4 w-min place-content-center">
           
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

    const router = useRouter();
    const smallNav = ref(false);
    let currrentRouteName = router.currentRoute.value.name;

    window.addEventListener('scroll', handleScroll);
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    function checkCurrentRoute(name) {
        if (currrentRouteName === name) return true;
        return false;
    }

    function handleScroll() {
        if (document.documentElement.scrollTop > 0) {
            smallNav.value = true;
            window.scrollTo({ top: 1, left: 0, behavior: 'smooth' });
        } else {
            smallNav.value = false;
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

    .sticky{
        position: sticky;
        top: 0;
        padding-top: 0rem;
        transition: padding 1s ease;
    }

    .unstick {
        padding-top: 22rem;
        transition: padding 1s ease;
    }

    .slide {
        left: 0.5rem;
        transform: translateX(-0%);
        transition: all 1s ease;
    }

    .unslide{
        left: 50%;
        transform: translateX(-50%);
        transition: all 1s ease;
    }
</style>