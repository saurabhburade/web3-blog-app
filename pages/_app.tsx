import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../context/ThemeContext";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import React from "react";
import { injected } from "../config/wallets";
// import "tailwindcss/"
const getLibrary = (provider): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider);

  return library;
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        {" "}
        <Component {...pageProps} />
      </Web3ReactProvider>
    </ThemeProvider>
  );
}

export default MyApp;
