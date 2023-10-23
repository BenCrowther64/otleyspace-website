<template>  
    <div class="relative w-full h-1/2-screen lg:h-screen"> 
        <img src='../assets/homepage/temp.jpg' class="w-full h-full object-cover"/>
        <Transition appear name="opacity">
            <div :class="{'slide' : smallNav, 'unslide': !smallNav}" class="relative flex flex-row gap-5 text-3xl lg:text-4xl w-min place-content-center">
                <div class="flex flex-col items-center">
                    <h1 class="text-white text-5xl lg:text-8xl">{{ pagename }}</h1>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
    import { onUnmounted, ref, } from 'vue';

    const props = defineProps({
        homepage: {
            type: Boolean,
            default: false
        },
        pagename: {
            type: String, 
            default: "HOMEPAGE"
        }
    });

    const smallNav = ref(!props.homepage);

    if (props.homepage) window.addEventListener('scroll', handleScroll);
    onUnmounted(() => {
        if (props.homepage) window.removeEventListener('scroll', handleScroll);
    });

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

    .slide {
        left: 0.5rem;
        top: -60%;
        transform: translateX(-0%);
        transition: all 0.5s ease;
    }

    .unslide{
        left: 50%;
        top: -60%;
        transform: translateX(-50%);
        transition: all 0.5s ease;
    }

    @media (min-width: 1024px) {
    .slide {
        left: 20rem;
        top: -80%;
        transform: translateX(-0%);
        transition: all 1s ease;
    }

    .unslide{
        left: 50%;
        top: -80%;
        transform: translateX(-50%);
        transition: all 1s ease;
    }
    }
</style>