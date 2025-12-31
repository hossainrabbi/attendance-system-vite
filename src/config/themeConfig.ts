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
      fontFamily: $css("--font-primary"),
    },
    components: {
      Layout: {
        siderBg: "#ffffff",
        triggerBg: "#ffffff",
      },

      /* Sidebar Menu */
      Menu: {
        itemColor: $css("--color-header"),
        fontSize: 14,

        /* Active */
        itemSelectedBg: $css("--color-primary"),
        itemSelectedColor: "#ffffff",

        /* Hover */
        itemHoverBg: $css("--color-light"),
        itemHoverColor: $css("--color-header"),
      },
      Drawer: {
        colorBgElevated: "#ffffff",
        colorText: $css("--color-header"),
      },
      Popover: {
        colorBgElevated: "#ffffff",
        borderRadiusLG: 12,
        boxShadowSecondary:
          "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      /* Form Customization */
      Form: {
        itemMarginBottom: 6,
        labelRequiredMarkColor: $css("--color-error"),
        labelFontSize: 14,
        labelColor: $css("--color-header"),
        verticalLabelPadding: 0,
      },

      Input: {
        controlHeightLG: 44,
        borderRadius: 6,
        fontSize: 14,
      },

      Select: {
        controlHeightLG: 44,
        borderRadius: 6,
        fontSize: 14,
      },

      DatePicker: {
        controlHeightLG: 44,
        borderRadius: 6,
        fontSize: 14,
      },

      InputNumber: {
        controlHeightLG: 44,
        borderRadius: 6,
        fontSize: 14,
      },

      /* Button Customization */
      Button: {
        controlHeightLG: 44,
        borderRadius: 6,
        paddingBlock: 10,
        paddingInline: 16,
        fontSize: 14,
      },

      // Table Customization
      Table: {
        headerSplitColor: "transparent",
        headerBg: "#ffffff",
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
