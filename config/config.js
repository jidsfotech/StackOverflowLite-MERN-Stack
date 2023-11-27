module.exports = {
    app: {
        name: "stackoverflow-lite",
        port: process.env.PORT || 5000
    },
    mongo: {
        host: process.env.DATABASE_HOST,
        devHost: process.env.DEV_DATABASE_HOST,
    },
    secretOrKey: process.env.secretOrKey,
}