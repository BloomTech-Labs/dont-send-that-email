const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_yX4Y6x6Aj09AdodtbrIh4CGv'
    : 'sk_test_yX4Y6x6Aj09AdodtbrIh4CGv';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
