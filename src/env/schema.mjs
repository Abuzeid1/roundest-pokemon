// @ts-check
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  NX_DAEMON: z.string(),
  POSTGRES_DATABASE: z.string(),
  POSTGRES_HOST: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_PRISMA_URL: z.string(),
  POSTGRES_URL: z.string(),
  POSTGRES_URL_NON_POOLING: z.string(),
  POSTGRES_USER: z.string(),
  TURBO_REMOTE_ONLY: z.string(),
  VERCEL: z.string(),
  VERCEL_ENV: z.string(),
  VERCEL_GIT_COMMIT_AUTHOR_LOGIN: z.string(),
  VERCEL_GIT_COMMIT_AUTHOR_NAME: z.string(),
  VERCEL_GIT_COMMIT_MESSAGE: z.string(),
  VERCEL_GIT_COMMIT_REF: z.string(),
  VERCEL_GIT_COMMIT_SHA: z.string(),
  VERCEL_GIT_PREVIOUS_SHA: z.string(),
  VERCEL_GIT_PROVIDER: z.string(),
  VERCEL_GIT_PULL_REQUEST_ID: z.string(),
  VERCEL_GIT_REPO_ID: z.string(),
  VERCEL_GIT_REPO_OWNER: z.string(),
  VERCEL_GIT_REPO_SLUG: z.string(),
  VERCEL_URL: z.string(),
  VERCEL_WEB_ANALYTICS_ID: z.string(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  // NEXT_PUBLIC_BAR: z.string(),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  // NEXT_PUBLIC_BAR: process.env.NEXT_PUBLIC_BAR,
};
