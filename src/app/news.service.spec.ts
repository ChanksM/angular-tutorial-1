import { NewsService } from './news.service';
import { dataBase } from './dbArticle';
import { stringify } from 'querystring';

describe('NewsService tests', () => {
    let service: NewsService;

    beforeEach( () => {
        service = new NewsService();
    });

    it('Method getArticles should return dataBase', () => {
        expect(service.getArticles()).toBe(dataBase);
    });
    it('Method getArticleById should return element', () => {
        const item = service.getArticleById(1267472382);
        expect(item).toBe(dataBase[0]);
    });
});
