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
    components: {
      Layout: {
        siderBg: "#ffffff",
        triggerBg: "#f9fafb",
        triggerColor: "#374151",
      },
      Menu: {
        itemBg: "transparent",
        itemSelectedBg: "rgba(239, 68, 68, 0.1)",
        itemSelectedColor: $css("--color-primary"),
        itemHoverBg: "#f3f4f6",
        itemHoverColor: "#111827",
        itemActiveBg: "rgba(239, 68, 68, 0.15)",
        itemColor: "#4b5563",
        iconSize: 18,
        itemHeight: 48,
        itemMarginBlock: 2,
        itemMarginInline: 8,
        itemBorderRadius: 8,
        subMenuItemBg: "transparent",
        itemPaddingInline: 16,
      },
      Drawer: {
        colorBgElevated: "#ffffff",
        colorText: "#1f2937",
      },
      Popover: {
        colorBgElevated: "#ffffff",
        borderRadiusLG: 12,
        boxShadowSecondary:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  };
};

// Get css variable
function $css(cssVariable: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(cssVariable)
    .trim();
}
