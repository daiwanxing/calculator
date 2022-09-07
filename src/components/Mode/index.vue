<script lang="ts" setup>
import { useTheme } from "../../hooks/useTheme";

const { toggle, mode } = useTheme();
</script>

<template>
    <div class="app-mode-box">
        <div class="app-mode-switch">
            <span
                :class="[
                    'material-icons mode-btn',
                    mode === 'DARK' ? 'active' : '',
                ]"
                @click="toggle('DARK')"
                >dark_mode</span
            >
            <span
                :class="[
                    'material-icons mode-btn',
                    mode === 'LIGHT' ? 'active' : '',
                ]"
                @click="toggle('LIGHT')"
                >light_mode</span
            >
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-mode-box {
    position: absolute;
    top: 2vw;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 9;

    .app-mode-switch {
        position: relative;
        display: inline-grid;
        grid-template-columns: repeat(2, 18vw);
        column-gap: 20px;
        align-items: center;
        padding: 14px;
        border-radius: 24px;
        background-color: var(--bg-color-light);
        // box-shadow: -10px -10px 15px #f5f9fd, 10px 10px 15px #d8dbe5;

        // &::after {
        //     content: "";
        //     position: absolute;
        //     top: 10px;
        //     left: 14px;
        //     width: calc(50% - 24px);
        //     height: calc(100% - 24px);
        //     box-shadow: inset 8px 8px 6px #d9dce6, inset -5px -5px 15px #f5f9fd,
        //         inset -5px -5px 15px #f5f9fd, inset 7px 7px 6px #d9dce6;
        //     border-radius: 12px;
        //     transition: left 0.8s ease;
        //     cursor: pointer;
        //     z-index: 0;
        // }
    }

    .mode-btn {
        padding: 0 10px;
        font-size: 28px;
        color: var(--text-color);
        transition: color 0.5s ease;

        &.active {
            color: var(--text-active-color);
        }
    }
}
</style>
