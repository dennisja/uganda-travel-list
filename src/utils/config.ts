const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN!;
const COMMIT_SHA = process.env.NEXT_PUBLIC_COMMIT_SHA!;
const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV!;

export { SENTRY_DSN, COMMIT_SHA, NODE_ENV };
