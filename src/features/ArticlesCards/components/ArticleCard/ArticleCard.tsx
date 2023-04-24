import { memo, useState } from 'react';
import { EntityId } from '@reduxjs/toolkit';
import classNames from 'classnames';

import BookmarkIcon from '../../../../components/iconsComponents/BookmarkIcon';
import TrashIcon from '../../../../components/iconsComponents/TrashIcon';
import LazyImage from '../../../../components/LazyImage/LazyImage';
import { useAuth } from '../../../../contexts/authContext';
import { NewsArticle } from '../../../../interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { articlesSelectors } from '../../../../redux/slices/articlesSlice';
import { MODAL_IDS, openModal } from '../../../../redux/slices/modalsSlice';
import {
  removeArticle,
  savedArticlesSelectors,
  saveNewArticle,
} from '../../../../redux/slices/savedArticlesSlice';
import { RootState } from '../../../../redux/store';
import { formatDate } from '../../../../utils/dateUtils';
import { ArticlesSource } from '../../ArticlesCards';

import './ArticleCard.scss';

interface ArticleCardProps {
  articleId: EntityId;
  source: ArticlesSource;
}

const selectArticleBySource = (
  state: RootState,
  source: 'savedArticles' | 'articles',
  articleId: EntityId,
) => {
  return source === 'articles'
    ? articlesSelectors.selectById(state, articleId)
    : savedArticlesSelectors.selectById(state, articleId);
};

const ArticleCard = ({ articleId, source }: ArticleCardProps) => {
  const { isLoggedIn } = useAuth();

  const isMarked = useAppSelector(
    (state) => !!savedArticlesSelectors.selectById(state, articleId),
  );
  const articleServerId = useAppSelector(
    (state) => savedArticlesSelectors.selectById(state, articleId)?._id,
  );
  const article = useAppSelector((state) =>
    selectArticleBySource(state, source, articleId),
  );

  const { title, image, keyword, date, text, source: articleSource } = article || {};

  const dispatch = useAppDispatch();

  const isSaved = source === 'savedArticles';

  const [isError, setIsError] = useState<boolean>(false);

  const getTooltipContent = () => {
    if (isError) {
      return '❗Server Error';
    }
    return isSaved ? 'Remove from saved' : 'Sign in to save articles';
  };

  if (!article) return null;

  const removeArticleFromSaved = (id: string) => {
    dispatch(removeArticle(id))
      .unwrap()
      .then(() => isError && setIsError(false))
      .catch((err) => {
        setIsError(!!err);
      });
  };

  const saveArticle = (article: NewsArticle) => {
    dispatch(saveNewArticle(article))
      .unwrap()
      .then(() => isError && setIsError(false))
      .catch((err) => {
        setIsError(!!err);
      });
  };

  const handleArticleBtnClick = () => {
    if (!isLoggedIn) {
      return dispatch(
        openModal(MODAL_IDS.login, {
          title: 'Sign in',
          redirectText: 'Sign up',
        }),
      );
    }
    // if card saved => it has articleServerId
    return articleServerId
      ? removeArticleFromSaved(articleServerId)
      : saveArticle(article);
  };

  const getIcon = () => {
    return isSaved ? (
      <TrashIcon className="article-card__trash-icon" stroke="#B6BCBF" color="#B6BCBF" />
    ) : (
      <BookmarkIcon
        className={isLoggedIn && !isMarked ? 'article-card__bookmark-icon' : undefined}
        stroke={isMarked ? '#2F71E5' : '#B6BCBF'}
        color={isMarked ? '#2F71E5' : 'none'}
      />
    );
  };

  console.log('Article render', articleId);

  return (
    <li className="article-card">
      <LazyImage
        className="article-card__image"
        src={image}
        alt={title}
        spinnerSize="25px"
      />
      {source === 'savedArticles' && (
        <p className="article-card__keyword article-card__toolbar-item">{keyword}</p>
      )}
      <button
        className={classNames('article-card__btn article-card__toolbar-item', {
          'article-card__btn--hover': isSaved || !isLoggedIn,
        })}
        onClick={handleArticleBtnClick}
      >
        {getIcon()}
      </button>
      <p
        className="article-card__tooltip article-card__toolbar-item"
        style={{ opacity: isError ? 1 : undefined }}
      >
        {getTooltipContent()}
      </p>
      <div className="article-card__info-box">
        <p className="article-card__date">{date && formatDate(date)}</p>
        <h2 className="article-card__title">{title}</h2>
        <p className="article-card__text">{text}</p>
        <p className="article-card__source">{articleSource}</p>
      </div>
    </li>
  );
};

export default memo(ArticleCard);
