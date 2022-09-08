<template>
    <ThemeMode />
    <div class="print-area"></div>
    <div class="keyboard">
        <KeyBoard />
    </div>
</template>

<script lang="ts" setup>
import ThemeMode from "@/components/Mode/index.vue";
import KeyBoard from "@/components/keyboard/index.vue";
</script>

<style>
html,
body {
    height: 100%;
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
    background-color: var(--bg-color);
    box-sizing: border-box;
}

#app {
    position: relative;
    margin: auto;
    width: min(100%, 720px);
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.print-area {
    height: 45%;
}

.keyboard {
    padding: 25px;
    height: 55%;
    border-top-left-radius: 8%;
    border-top-right-radius: 8%;
    background-color: var(--bg-color-light);
    box-sizing: border-box;
}
</style>
