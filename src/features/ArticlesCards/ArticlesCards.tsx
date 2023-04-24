import { EntityId } from '@reduxjs/toolkit';

import ArticleCard from './components/ArticleCard/ArticleCard';

import './ArticlesCards.scss';

export type ArticlesSource = 'savedArticles' | 'articles';
interface ArticlesCardsProps {
  articlesIds: EntityId[];
  source: ArticlesSource;
}

const ArticlesCards = ({ articlesIds, source }: ArticlesCardsProps) => {
  console.log('Render articlesCards');
  return (
    <section className="articles-cards">
      <ul className="articles-cards__list">
        {articlesIds.map((articleId: EntityId) => (
          <ArticleCard key={articleId} articleId={articleId} source={source} />
        ))}
      </ul>
    </section>
  );
};

export default ArticlesCards;
