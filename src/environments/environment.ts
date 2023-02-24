// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
const server = {
  hostname: 'localhost',
  port:'5000'
};

export const environment = {
  production: false,
  name: 'development',
  baseUrlApi: `http://${server.hostname}:${server.port}/api`,
};