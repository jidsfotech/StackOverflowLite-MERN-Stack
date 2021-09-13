module.exports = {
    app: {
        name: "stackoverflow-lite",
        port: process.env.PORT || 5000
    },
    mongo: {
        host: process.env.DATABASE_HOST,
        devHost: process.env.DEV_DATABASE_HOST || "mongodb://127.0.0.1:27017/stackoverflowliteDB",
    },
    secretOrKey: process.env.secretOrKey,
}