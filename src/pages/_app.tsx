// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { Analytics } from '@vercel/analytics/react';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
    <Component {...pageProps} />
    <Analytics />
  </>
};

export default trpc.withTRPC(MyApp);
