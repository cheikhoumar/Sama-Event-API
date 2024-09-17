import require$$0 from 'dotenv';
import require$$1 from 'path';

var config$1 = {};

var config = {};

var hasRequiredConfig$1;

function requireConfig$1 () {
	if (hasRequiredConfig$1) return config;
	hasRequiredConfig$1 = 1;
	var _a, _b, _c;
	Object.defineProperty(config, "__esModule", { value: true });
	config.config = void 0;
	var dotenv = require$$0;
	var path_1 = require$$1;
	var envpath = (0, path_1.join)(process.cwd(), '../../.env');
	dotenv.config({ path: envpath });
	console.log('Load .env from' + envpath);
	config.config = {
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
	return config;
}

var hasRequiredConfig;

function requireConfig () {
	if (hasRequiredConfig) return config$1;
	hasRequiredConfig = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.config = void 0;
		var config_1 = requireConfig$1();
		Object.defineProperty(exports, "config", { enumerable: true, get: function () { return config_1.config; } }); 
	} (config$1));
	return config$1;
}

var configExports = requireConfig();

const eventImageUrl = `${configExports.config.fileStream.baseUrl}${configExports.config.fileStream.eventImageUrlPath}/`;
const ticketImageUrl = `${configExports.config.fileStream.baseUrl}${configExports.config.fileStream.ticketImageUrlPath}/`;
const userImageUrl = (path) => {
  if (path.includes("https://")) return path;
  return `${configExports.config.fileStream.baseUrl}${configExports.config.fileStream.userImageUrlPath}/${path}`;
};

export { configExports as c, eventImageUrl as e, ticketImageUrl as t, userImageUrl as u };
//# sourceMappingURL=config-CY2m_ASs.js.map
