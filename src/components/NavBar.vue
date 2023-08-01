<template>

    <div :class="{'unpadded' : smallNav, 'padded' : !smallNav}" class="sticky top-0 bg-waves z-10 bg-otley-light-blue bg-repeat">
        <Transition appear name="opacity"> 
            <div :class="{'slide' : smallNav, 'unslide': !smallNav}" class="relative flex flex-row gap-5 text-3xl lg:text-4xl w-min place-content-center">
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
        </Transition>
    </div>

</template>

<script setup>
    import { onUnmounted, ref, } from 'vue';
    import { useRouter } from 'vue-router';

    const props = defineProps({
        homepage: {
            type: Boolean,
            default: false
        }
    });

    const router = useRouter();
    const smallNav = ref(!props.homepage);

    var currrentRouteName = router.currentRoute.value.name;

    if (props.homepage) window.addEventListener('scroll', handleScroll);
    onUnmounted(() => {
        if (props.homepage) window.removeEventListener('scroll', handleScroll);
    });

    function checkCurrentRoute(name) {
        if (currrentRouteName === name) return true;
        return false;
    }

    function handleScroll() {
        if (document.documentElement.scrollTop > 0) {
            smallNav.value = true;
        } else {
            smallNav.value = false;
        }
    }
</script>

<style scoped>

    .opacity-enter-active,
    .opacity-leave-active{
        transition: opacity 1s ease;
    }

    .opacity-enter-from,
    .opacity-leave-to {
        opacity: 0;
    }

    .router-link-active {
        margin: 0;
        padding: 0;
        color: #22314E;
        pointer-events: none;
    }
    .unpadded{
        padding-top: 0rem;
        transition: padding 0.5s ease;
    }

    .padded {
        padding-top: 19rem;
        transition: padding 0.5s ease;
    }

    .slide {
        left: 0.5rem;
        font-size: 1.5rem;
        padding: 0.5rem 0rem;
        transform: translateX(-0%);
        transition: all 0.5s ease;
    }

    .unslide{
        left: 50%;
        font-size:1.875rem;
        padding: 1rem;
        transform: translateX(-50%);
        transition: all 0.5s ease;
    }

    @media (min-width: 1024px) {
        .unpadded{
            padding-top: 0rem;
            transition: padding 1s ease;
        }

        .padded {
            padding-top: 22rem;
            transition: padding 1s ease;
        }

        .slide {
            left: 20rem;
            font-size: 1.5rem;
            padding: 0.5rem;
            transform: translateX(-0%);
            transition: all 1s ease;
        }

        .unslide{
            left: 50%;
            font-size:2.25rem;
            padding: 1rem;
            transform: translateX(-50%);
            transition: all 1s ease;
        }
    }
</style>