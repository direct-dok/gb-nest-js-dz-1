import { Injectable } from '@nestjs/common';
import e from 'express';
import { News } from './news.interface';

@Injectable()
export class NewsService {
    private readonly news: News[]=[
        {
            id: 1,
            title: "Warren Buffett's company lost $44 billion last quarter, but it's not really bad news",
            description: "New York (CNN Business)Warren Buffett is just like the rest of us. He got crushed by the plunge in the stock market during the first half of the year. But the Oracle of Omaha is undeterred by the wildness on Wall Street. Berkshire Hathaway is still buying and many of the the company's diverse business lines are still thriving, even in these uncertain economic times.",
            author: 'John',
            createdAt: new Date(),
        },
        {
            id: 2,
            title: "China posts record $101 billion trade surplus but export boom could fade",
            description: "Hong Kong (CNN Business)China's export sector delivered robust growth in July, providing much-need support for the world's second largest economy that is almost certain to miss its GDP target this year.",
            author: "John",
            createdAt: new Date(),
        },
        {
            id: 3,
            title: "Axios agrees to sell itself to Cox Enterprises in $525 million deal",
            description: "New York (CNN Business)Axios, the buzzy digital media venture founded in in 2017, will sell itself to Cox Enterprises, the two companies announced on Monday.",
            author: "John",
            createdAt: new Date(),
        },
        {
            id: 4,
            title: "4 questions to ask when shopping for a new credit card",
            description: "New York (CNN)With so many options to consider, choosing a new credit card can be daunting. But for most Americans, it's a necessary step to establishing credit.",
            author: "John",
            createdAt: new Date(),
        },
        {
            id: 5,
            title: "The market read the Federal Reserve all wrong",
            description: "New York (CNN Business)After the Federal Reserve's July meeting, investors quickly reached a consensus: The central bank was turning slightly dovish.",
            author: "John",
            createdAt: new Date(),
        },
    ];

    create(news: News): number {
        return this.news.push(news);
    }

    findAll(): News[] {
        return this.news;
    }

    findByIndex(index: number): News|null {
        console.assert(typeof this.news[index] !== 'undefined', '[findByIndex]Invalid')
        if(typeof this.news[index] !== 'undefined') {
            return this.news[index]
        }

        return null
    }

    edit(id) {
        return this.news.filter(el => el.id == id);
    }
}
