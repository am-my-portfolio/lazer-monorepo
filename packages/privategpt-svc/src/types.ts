export enum Environment {
  LOCAL = 'local',
  DEV = 'dev',
  PROD = 'prod',
}

export enum LazerHeaders {
  X_LAZER_CUSTOM_HEADER_EXAMPLE = 'x-lazer-custom-header',
}

export enum StandardHeader {
  AUTHORIZATION = 'authorization',
  CONTENT_TYPE = 'content-type',
  USER_AGENT = 'user-agent',
}

export const cors_config = {
  [Environment.LOCAL]: '*',
  [Environment.DEV]: [
    'http://localhost:4001',
    'https://lazer-security-hub.netlify.app',
    /\.pr.lazer\.dev$/,
    /\.a.run\.app$/,
    /\.us-central1.run.app$/,
  ],
  [Environment.PROD]: ['https://hub.lazer.io'],
};

export const cors_methods = ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'];
export const cors_allowed_headers = [...Object.values(LazerHeaders), ...Object.values(StandardHeader)];
export const cors_max_age = 86400;
