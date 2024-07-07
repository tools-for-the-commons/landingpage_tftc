export type ThemeNameT = "light" | "dark";

export function useTheme() {
  if (!import.meta.client) return null;

  const defaultTheme: ThemeNameT = "light";
  const themeOptions: ThemeNameT[] = ["light", "dark"];

  const currentTheme = ref<ThemeNameT>(getSavedThemePreference());

  function isValidTheme(theme: ThemeNameT) {
    return themeOptions.includes(theme);
  }

  function setThemePreference(theme?: ThemeNameT) {
    if (!theme) {
      theme = getSavedThemePreference();
    }
    if (!isValidTheme(theme)) {
      return;
    }

    document.documentElement.classList.remove(currentTheme.value);
    currentTheme.value = theme;
    setSavedThemePreference(theme);
    document.documentElement.classList.add(theme);
  }

  function getSavedThemePreference() {
    const theme = localStorage.getItem("UI_THEME") as ThemeNameT;
    return isValidTheme(theme) ? theme : defaultTheme;
  }

  function setSavedThemePreference(theme: ThemeNameT) {
    localStorage.setItem("UI_THEME", theme);
  }

  function toggleThemePreference() {
    if (currentTheme.value === "light") {
      setThemePreference("dark");
    } else {
      setThemePreference("light");
    }
  }

  return {
    currentTheme,
    themeOptions,
    setThemePreference,
    setSavedThemePreference,
    getSavedThemePreference,
    toggleThemePreference,
  };
}
