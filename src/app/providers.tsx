"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import React from "react";
import { LanguageProvider } from "../i18n";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <LanguageProvider>{children}</LanguageProvider>
    </ChakraProvider>
  );
}
