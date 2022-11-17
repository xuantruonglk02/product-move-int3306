enum ConfigKey {
    PORT = 'PORT',
    BASE_PATH = 'BASE_PATH',
    JWT_ACCESS_TOKEN_SECRET_KEY = 'JWT_ACCESS_TOKEN_SECRET_KEY',
    JWT_REFRESH_TOKEN_SECRET_KEY = 'JWT_REFRESH_TOKEN_SECRET_KEY',
    JWT_ACCESS_TOKEN_EXPIRED_IN = 'JWT_ACCESS_TOKEN_EXPIRED_IN',
    JWT_REFRESH_TOKEN_EXPIRED_IN = 'JWT_REFRESH_TOKEN_EXPIRED_IN',
    DB_HOST = 'DB_HOST',
    DB_PORT = 'DB_PORT',
    DB_USERNAME = 'DB_USERNAME',
    DB_PASSWORD = 'DB_PASSWORD',
    DB_NAME = 'DB_NAME',
    DB_DEBUG = 'DB_DEBUG',
    CORS_WHITELIST = 'CORS_WHITELIST',
    WEB_APP_BASE_URL = 'WEB_APP_BASE_URL',
}
export default ConfigKey;
