'use strict';

module.exports = {
    db: 'dbuser01:p4ssw0rdBS@ds045089.mongolab.com:45089/mindappt',
    app: {
        name: 'Mindappt - Willpower knows no obstacles.'
    },
    facebook: {
        clientID: '1493234827573683',
        clientSecret: '40179cd73b3e16a87ed91faf6b925317',
        callbackURL: 'http://mindappt.heroku.com/auth/facebook/callback'
    },
    twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    github: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
    }
};
