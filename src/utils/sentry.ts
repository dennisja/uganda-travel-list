import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import { SENTRY_DSN, NODE_ENV, COMMIT_SHA } from './config';

const IGNORED_ENVIRONMENTS = ['development', 'test'];

const ignoreSentry = IGNORED_ENVIRONMENTS.includes(NODE_ENV as string);

const initSentry = () => {
  if (ignoreSentry) {
    Sentry.init({
      dsn: SENTRY_DSN,
      integrations: [new BrowserTracing()],
      tracesSampleRate: 0.5,
      release: `ug-travel-list@${COMMIT_SHA}`,
      environment: NODE_ENV,
    });
  }
};

const captureSentryException: typeof Sentry.captureException = (...args) => {
  if (ignoreSentry) return '';
  return Sentry.captureException(...args);
};

export { captureSentryException, initSentry };
