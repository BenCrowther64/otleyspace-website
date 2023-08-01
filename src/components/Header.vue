<template>
    <Transition appear name="header-up">
        <img v-show="!hasScroll && homepage" @mouseover="warnDisabled" :class="{ 'animate-rotate-y' : disabled && !hasScroll}" class="absolute left-1/2 w-64 lg:w-80 -ml-32 lg:-ml-40 mt-8 z-0" src="../assets/branding/otley-space-logo.png" alt="Otley Space Logo">
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