'use strict';

const serviceLocator = require('./lib/service_locator');
const turboLogger = require('turbo-logger').createStream({});
const UserService = require('../app/services/user');
const UserController = require('../app/controllers/user');

serviceLocator.register('logger', () => {
    return turboLogger;
})

serviceLocator.register('httpStatus', () => {
    return require('http-status');
});

serviceLocator.register('mongoose', () => {
    return require('mongoose');
});

serviceLocator.register('userService', () => {
    let logger = serviceLocator.get('logger');
    let redis = serviceLocator.get('redis');

    return new UserService(logger)
})


serviceLocator.register('userController', () => {
    let userService = serviceLocator.get('userService');
    let logger = serviceLocator.get('logger');

    return new UserController(userService, logger);
})
module.exports = serviceLocator;