import dotenv from 'dotenv';
dotenv.config();

const NewsApi = require('newsapi');

const newsApi = new NewsApi(process.env.API_KEY);

export default newsApi;