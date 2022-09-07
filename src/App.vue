<template>
    <ThemeMode />
    <div class="print-area"></div>
    <div class="keyboard"></div>
</template>

<script lang="ts" setup>
import ThemeMode from "@/components/Mode/index.vue";
</script>

<style>
html,
body {
    height: 100%;
}

html[data-theme="DARK"] {
    --bg-color: #22252d;
    --bg-color-light: #292d36;
    --text-color: #6f7277;
    --text-active-color: #fff;
}

html[data-theme="LIGHT"] {
    --bg-color: #ffffff;
    --bg-color-light: #f9f9f9;
    --text-color: #5a5d64;
    --text-active-color: #09f;
}

#app {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg-color);
    /* transition: background-color 1s linear; */
}

.print-area {
    height: 40%;
}

.keyboard {
    height: 60%;
    border-top-left-radius: 8%;
    border-top-right-radius: 8%;
    background-color: var(--bg-color-light);
}
</style>
