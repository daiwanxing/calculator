import { ref } from "vue";

export type Theme = "DARK" | "LIGHT";

export function useTheme() {
    const mode = ref<Theme>("DARK");

    const localPreferMode = localStorage.getItem("preferTheme") as Theme;
    if (localPreferMode) mode.value = localPreferMode;

    setAppMode(mode.value);

    const toggle = (val: Theme) => {
        if (val === mode.value) return;
        mode.value = val;
        setAppMode(mode.value);
        localStorage.setItem("preferTheme", mode.value);
    };

    return {
        mode,
        toggle,
    };
}

function setAppMode(mode: Theme) {
    document.documentElement.setAttribute("data-theme", mode);
}
