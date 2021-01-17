module.exports = {
    secretOrKey: process.env.secretOrKey || "secrete",
    dataBaseHost: process.env.DATABASE_HOST,
    dev_dataBaseHost: process.env.DEV_DATABASE_HOST || "localhost",
}