<script lang="ts" setup>
import { onBeforeUnmount } from "vue";
const emits = defineEmits(["enterFlag", "enterValue"]);

enum FLAG_KEYS {
    RESET = 1,
    ENTER = 1 << 1,
    AC = 1 << 2,
    DIVIDE = 1 << 3,
    MULTIPLE = 1 << 4,
    PLUS = 1 << 5,
    EQUAL = 1 << 6,
    DOT = 1 << 7,
    MODULO = 1 << 8,
    MINUS = 1 << 9,
}

const keyboardButtons = [
    {
        name: "AC",
        handler() {
            emits("enterFlag", FLAG_KEYS.AC);
        },
    },
    {
        name: "+/-",
        handler() {
            navigator.vibrate(30);
        },
    },
    {
        name: "percent",
        type: "icon",
        handler() {
            emits("enterFlag", FLAG_KEYS.MODULO);
        },
    },
    {
        name: "/",
        handler() {
            emits("enterFlag", FLAG_KEYS.DIVIDE);
        },
    },
    {
        name: "7",
        handler() {
            emits("enterValue", 7);
        },
    },
    {
        name: "8",
        handler() {
            emits("enterValue", 8);
        },
    },
    {
        name: "9",
        handler() {
            emits("enterValue", 9);
        },
    },
    {
        name: "clear",
        type: "icon",
        handler() {
            emits("enterFlag", FLAG_KEYS.MULTIPLE);
        },
    },
    {
        name: "4",
        handler() {
            emits("enterValue", 4);
        },
    },
    {
        name: "5",
        handler() {
            emits("enterValue", 5);
        },
    },
    {
        name: "6",
        handler() {
            emits("enterValue", 6);
        },
    },
    {
        name: "remove",
        type: "icon",
        handler() {
            emits("enterFlag", FLAG_KEYS.MINUS);
        },
    },
    {
        name: "1",
        handler() {
            emits("enterValue", 6);
        },
    },
    {
        name: "2",
        handler() {
            emits("enterValue", 6);
        },
    },
    {
        name: "3",
        handler() {
            emits("enterValue", 3);
        },
    },
    {
        name: "add",
        type: "icon",
        handler() {
            emits("enterFlag", FLAG_KEYS.DIVIDE);
        },
    },
    {
        name: "restart_alt",
        type: "icon",
        handler() {
            emits("enterFlag", FLAG_KEYS.RESET);
        },
    },
    {
        name: "0",
        handler() {
            emits("enterFlag", 0);
        },
    },
    {
        name: ".",
        handler() {
            emits("enterFlag", FLAG_KEYS.DOT);
        },
    },
    {
        name: "=",
        handler() {
            emits("enterFlag", FLAG_KEYS.EQUAL);
        },
    },
];

const tapEngine = () => {
    navigator.vibrate(40);
};

const btnList: Array<Element> = [];
const btnGroupsListRef = (el: Element) => {
    if (el) {
        el.addEventListener("click", tapEngine);
        btnList.push(el);
    }
};

onBeforeUnmount(() => {
    btnList.forEach((el) => el.removeEventListener("click", tapEngine));
});
</script>

<template>
    <div class="keyboard-grid">
        <div
            class="keyboard-cell"
            v-for="(btn, idx) in keyboardButtons"
            :key="idx"
            @click="btn.handler"
            :ref="btnGroupsListRef"
        >
            <template v-if="btn.type === 'icon'">
                <span class="material-icons"> {{ btn.name }} </span>
            </template>
            <template v-else-if="btn.decode">
                <span v-html="btn.name"></span>
            </template>
            <template v-else>
                {{ btn.name }}
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
.keyboard-grid {
    height: 100%;
    display: grid;
    grid: repeat(5, 1fr) / repeat(4, 1fr);
    gap: 15px;

    .keyboard-cell {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background-color: var(--bg-color-light-2);
        font-size: 22px;
        color: var(--text-color-2);
        user-select: none;

        &:nth-child(-n + 3) {
            color: #00edff;
        }

        &:nth-child(4n) {
            color: #e56364;
        }

        &:focus-visible,
        &:active {
            filter: brightness(0.8);
        }
    }
}
</style>
