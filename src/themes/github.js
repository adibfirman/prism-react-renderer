// @flow
// Original: https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-ghcolors.css

import type { PrismTheme } from "../types";

var theme = (isDarkMode = false): PrismTheme => ({
  plain: {
    color: isDarkMode ? "#79c0ff" : "#393A34",
    backgroundColor: isDarkMode ? "#0D1117" : "#f6f8fa",
  },
  styles: [
    {
      types: ["property-access"],
      style: {
        color: isDarkMode ? "#79c0ff" : "relative",
      },
    },
    {
      types: ["parameter", "interpolation"],
      style: {
        color: isDarkMode ? "#c9d1d9" : "relative",
      },
    },
    {
      types: ["comment"],
      style: {
        color: isDarkMode ? "#8b949e" : "unset",
        letterSpacing: isDarkMode ? "-0.5px" : "unset",
      },
    },
    {
      types: ["prolog", "doctype", "cdata"],
      style: {
        color: "#999988",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: isDarkMode ? "#a5d6ff" : "#e3116c",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: isDarkMode ? "#c9d1d9" : "#393A34",
      },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: {
        color: isDarkMode ? "#c9d1d9" : "#36acaa",
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#00a4db",
      },
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: isDarkMode ? "#ffa657" : "#d73a49",
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: isDarkMode ? "#ff7b72" : "#00009f",
      },
    },
  ],
});

export default theme;
