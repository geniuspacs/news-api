import { Request, Response } from 'express';
import newsApi from '../models/news_api';

export const getEverything = (req: Request, res: Response) => {
    newsApi.v2.everything({
        q: req.query.filter || '',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        language: 'en',
        sortBy: 'relevancy',
        page: 1
    }).then(({ articles }: any) => {
        res.status(200).send(articles);
    }, (error: any) => {
        res.send(error);
    })
        .catch((error: any) => {
            res.send(error);
        });
}