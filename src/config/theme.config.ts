import { theme, type ThemeConfig } from "antd";

// Export a function that creates the config when called
export const getThemeConfig = (): ThemeConfig => {
  return {
    algorithm: theme.defaultAlgorithm,
    hashed: false,
    token: {
      colorPrimary: $css("--color-primary"),
      colorSuccess: $css("--color-success"),
      colorError: $css("--color-error"),
      colorWarning: $css("--color-warning"),
      colorInfo: $css("--color-info"),
      fontFamily: $css("--font-roboto"),
    },
  };
};

// Get css variable
function $css(cssVariable: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(cssVariable)
    .trim();
}
