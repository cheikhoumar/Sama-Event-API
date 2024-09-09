export declare const config: {
    server: {
        host: string;
        port: number;
        baseUrl: string;
    };
    security: {
        accessTokenKey: string;
        refreshTokenKey: string;
        accessTokenExpiration: string;
        refreshTokenExpiration: string;
        refreshTokenTTL: number;
        bcryptSaltOrRound: number;
        otpTTL: number;
        otpPrefix: string;
        google: {
            clientID: string;
            clientSecret: string;
            webClientID: string;
            webClientSecret: string;
            callbackURL: string;
        };
    };
    redis: {
        host: string;
        port: number;
    };
    smtp: {
        host: string;
        port: string;
        address: string;
        password: string;
        from: string;
    };
    storage: {
        uploadsPath: string;
        eventImagePath: string;
        ticketImagePath: string;
        userImagePath: string;
    };
    fileStream: {
        baseUrl: string;
        eventImageUrlPath: string;
        ticketImageUrlPath: string;
        userImageUrlPath: string;
    };
    payment: {
        url: string;
        authString: string;
    };
    withdraw: {
        feeKey: string;
    };
};
