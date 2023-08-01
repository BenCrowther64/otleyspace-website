<template>
    <Transition appear name="header-up">
        <div v-show="!hasScroll && homepage" class="absolute w-full z-20">
            <img @mouseover="warnDisabled" :class="{ 'animate-rotate-y' : disabled && !hasScroll}" class="w-64 lg:w-80 m-auto mt-6 rotate-fix" src="../assets/branding/otley-space-logo.png" alt="Otley Space Logo">
        </div>
    </Transition>
</template>

<script setup>
    import { onUnmounted, ref, } from 'vue';

    const hasScroll = ref(false);
    const disabled = ref(false);

    const props = defineProps({
        homepage: {
            type: Boolean,
            default: false,
        }
    });

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

    function handleScroll() {
        if (document.documentElement.scrollTop > 0) {
            hasScroll.value = true;
        } else {
            hasScroll.value = false;
        }
    }
</script>

<style scoped>

    .rotate-fix {
        transform: translateZ(100px) perspective(300px);
        transform-style: preserve-3d;        
    }

    .header-up-enter-active,
    .header-up-leave-active{
        transition: all 0.5s ease;
    }

    .header-up-enter-from,
    .header-up-leave-to {
        transform: translateY(-100%);
        opacity: 0;
    }

    @media (min-width: 1024px) {
        .header-up-enter-active,
        .header-up-leave-active{
            transition: all 1s ease;
        }

        .header-up-enter-from,
        .header-up-leave-to {
            transform: translateY(-100%);
            opacity: 0;
        }
    }
</style>