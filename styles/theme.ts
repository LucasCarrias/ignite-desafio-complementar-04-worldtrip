import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "900": "#1C1401",
      "500": '#FFBA08'
    },
    gray: {
      "600": "#47585B",
      "500": "#999",
      "100": "#DADADA",
      "50": "#F5F8FA"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.500'
      }
    }
  }
});