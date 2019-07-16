import { NewsComponent } from './news.component';
import { NewsService } from '../news.service';
import { dataBase } from '../dbArticle';

describe('NewsComponent tests', () => {
    let component: NewsComponent;
    const service: NewsService = new NewsService();
    beforeEach( () => {
        component = new NewsComponent(service);
    });

    it('Articles method should return database', () => {
        expect(component.articles).toBe(dataBase);
    });
});
