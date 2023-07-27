<template>
    <Transition name="header-up">
        <img v-show="!hasScroll && homepage" @mouseover="warnDisabled" :class="{ 'animate-rotate-y' : disabled && !hasScroll}" class="absolute w-80 left-1/2 -ml-40 mt-8 z-50" src="../assets/branding/otley-space-logo.png" alt="Otley Space Logo">
    </Transition>
</template>

<script setup>
    import { onMounted, onUnmounted, ref, } from 'vue';

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
        transition: all 1s ease;
    }

    .header-up-enter-from,
    .header-up-leave-to {
        transform: translateY(-100%);
        opacity: 0;
    }
</style>