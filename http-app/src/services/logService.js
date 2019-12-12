import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://1c2fc8068ec64b11bdf79a70d8bc56eb@sentry.io/1854699"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
