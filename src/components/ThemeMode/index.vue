<script lang="ts" setup>
import { ref, computed, onBeforeUnmount } from "vue";

const position = ref(0);
const WIDTH = 140;
const cPos = computed(() => `${position.value}px`);
const animateCls = ref("");

const btns = [
    {
        icon: "dark_mode",
    },
    {
        icon: "light_mode",
    },
    {
        icon: "wifi",
    },
];

const rotate = ref(0);
const cRotate = computed(() => `${rotate.value}deg`);
const activeKey = ref(0);

let timer: number | null = null;
const toggle = (i: number) => {
    activeKey.value = i;
    position.value = WIDTH * i + i * 16;
    animateCls.value = "smooth";
    rotate.value = rotate.value > 0 ? -8 : 8;
    if (timer) window.clearTimeout(timer);
    timer = window.setTimeout(() => {
        animateCls.value = "";
    }, 500);
};

const listenKeyCode = (e: Event) => {
    const evt = e as KeyboardEvent;
    const activeEl = document.activeElement;
    if (
        evt.code === "Enter" &&
        activeEl !== document.body &&
        activeEl !== null
    ) {
        const code = activeEl.getAttribute("data-content");
        if (code) toggle(+code);
    }
};

document.body.addEventListener("keyup", listenKeyCode);

onBeforeUnmount(() => {
    document.body.removeEventListener("keyup", listenKeyCode);
});
</script>

<template>
    <div class="g-wrapper">
        <div
            :class="['g-btn-contianer g-btn-layout', animateCls]"
            :style="{
                '--g-pos-left': cPos,
                '--g-rotate': cRotate,
            }"
        >
            <span
                :class="[
                    'material-icons g-btn-icon',
                    activeKey === i ? 'active' : '',
                ]"
                @click="toggle(i)"
                v-for="(n, i) in btns"
                :key="i"
                tabindex="0"
                :data-content="i"
            >
                {{ n.icon }}
            </span>
        </div>
    </div>
</template>

<style lang="scss">
.g-wrapper {
    height: 100vh;
    background-color: #edf1f4;
    user-select: none;
    perspective: 500px;

    .g-btn-contianer {
        position: absolute;
        margin: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 80px;
        padding: 12px 16px;
        border-radius: 7px;
        box-sizing: border-box;
        background-color: #e2e6eb;
        box-shadow: -10px -10px 15px #f5f9fd, 10px 10px 15px #d8dbe5;
    }

    .g-btn-layout {
        display: grid;
        grid-template-columns: repeat(3, 140px);
        column-gap: 16px;
        transform-origin: center;
        transition: transform 0.5s cubic-bezier(0, 0, 0.48, 1);

        &.smooth {
            transform: translate(-50%, -50%) rotateY(var(--g-rotate));
        }

        &::after {
            --g-padding-left: 16px;
            content: "";
            position: absolute;
            width: 140px;
            height: calc(100% - 24px);
            top: 12px;
            left: var(--g-pos-left);
            transform: translateX(
                var(--g-padding-left)
            ); // 模拟按钮的padding-left
            box-shadow: inset 8px 8px 6px #d9dce6, inset -5px -5px 15px #f5f9fd,
                inset -5px -5px 15px #f5f9fd, inset 7px 7px 6px #d9dce6;
            border-radius: 12px;
            transition: left 0.8s ease;
            cursor: pointer;
        }
    }

    .g-btn-icon {
        text-align: center;
        line-height: 56px;
        font-size: 36px;
        cursor: pointer;
        transition: all 0.1s ease;

        &:focus-visible {
            filter: drop-shadow(0px 0px 8px);
            outline: none;
        }

        &.active {
            color: #09f;
        }
    }
}
</style>
