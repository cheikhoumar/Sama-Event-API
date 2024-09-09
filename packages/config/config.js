"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv = require("dotenv");
var path_1 = require("path");
var envpath = (0, path_1.join)(process.cwd(), '../../.env');
dotenv.config({ path: envpath });
console.log('Load .env from' + envpath);
exports.config = {
    // REST API ONLY
    server: {
        host: process.env.HOST,
        port: Number(process.env.PORT),
        baseUrl: process.env.BASE_URL,
    },
    security: {
        accessTokenKey: process.env.ACCESS_TOKEN_KEY,
        refreshTokenKey: process.env.REFRESH_TOKEN_KEY,
        accessTokenExpiration: process.env.ACCESS_TOKEN_EXPIRATION,
        refreshTokenExpiration: process.env.REFRESH_TOKEN_EXPIRATION,
        refreshTokenTTL: Number((_a = process.env.REFRESH_TOKEN_TTL) !== null && _a !== void 0 ? _a : 60 * 60 * 24 * 30 * 1000),
        bcryptSaltOrRound: 10,
        otpTTL: Number((_b = process.env.OTP_TTL) !== null && _b !== void 0 ? _b : 300 * 1000),
        otpPrefix: 'otp-',
        google: {
            clientID: process.env.SERVER_GOOGLE_CLIENT_ID,
            clientSecret: process.env.SERVER_GOOGLE_CLIENT_SECRET,
            webClientID: process.env.WEB_APP_GOOGLE_CLIENT_ID,
            webClientSecret: process.env.WEB_APP_GOOGLE_CLIENT_SECRET,
            callbackURL: "".concat(process.env.BASE_URL, "api/auth/google/callback"),
        },
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
    },
    smtp: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        address: process.env.MAIL_ADDRESS,
        password: process.env.MAIL_PASSWORD,
        from: process.env.MAIL_FROM,
    },
    storage: {
        uploadsPath: 'uploads',
        eventImagePath: 'uploads/events',
        ticketImagePath: 'uploads/tickets',
        userImagePath: 'uploads/users',
    },
    fileStream: {
        baseUrl: (_c = process.env.STORAGE_BASE_URL) !== null && _c !== void 0 ? _c : "".concat(process.env.BASE_URL, "file/"),
        eventImageUrlPath: 'events',
        ticketImageUrlPath: 'tickets',
        userImageUrlPath: 'users',
    },
    payment: {
        url: process.env.MIDTRANS_URL,
        authString: process.env.MIDTRANS_SERVER_KEY,
    },
    withdraw: {
        feeKey: 'adminFee',
    },
};
