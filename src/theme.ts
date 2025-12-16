import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: "#fdf8f2",
    100: "#f8eedf",
    200: "#f1dfc4",
    300: "#e7caa0",
    400: "#d9ae77",
    500: "#c8924f", // warm caramel
    600: "#a6733a",
    700: "#7d562b",
    800: "#5d4020",
    900: "#3c2914",
  },
  cream: {
    50: "#fffdfa",
    100: "#fff8ee",
    200: "#fcefdc",
    300: "#f7e3c5",
    400: "#f0d2a5",
    500: "#e7bd7d",
    600: "#cba063",
    700: "#a57d4a",
    800: "#7b5c35",
    900: "#4c3921",
  },
  cocoa: {
    50: "#fbf8f6",
    100: "#efe7e0",
    200: "#dac6ba",
    300: "#c1a18f",
    400: "#a37b67",
    500: "#8a5f4b",
    600: "#6f4a3a",
    700: "#573b2e",
    800: "#3c261d",
    900: "#241610",
  },
  accent: {
    red: "#b65c52", // muted warm red
    green: "#6c8c63", // moss green
    yellow: "#e0b458", // vintage yellow
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts: {
    heading: 'var(--font-heading), serif',
    body: 'var(--font-body), system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
  },
  styles: {
    global: {
      'html, body': {
        bg: "cream.50",
        color: "cocoa.800",
      },
      a: {
        color: "brand.700",
      },
    },
  },
  shadows: {
    vintage: "0 10px 20px rgba(60, 41, 20, 0.12), 0 6px 6px rgba(60, 41, 20, 0.08)",
  },
  radii: {
    vintage: "14px",
  },
});

export default theme;
