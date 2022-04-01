import { Source } from './source';
export class Article {

    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;

    constructor(
        source: Source,
        author: string,
        title: string,
        description: string,
        url: string,
        urlToImage: string,
        publishedAt: string,
        content: string
    ) {
        this.source = source;
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
        this.content = content;
    }

}