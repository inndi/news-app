import { useAppSelector } from '../../redux/hooks';
import { articlesSelectors } from '../../redux/slices/articlesSlice';
import NotFoundSection from '../ArticlesSearch/components/NotFoundSection/NotFoundSection';
import ReceivingErrorSection from '../ArticlesSearch/components/ReceivingErrorSection/ReceivingErrorSection';
import SearchResultsPreloader from '../ArticlesSearch/components/SearchResultsPreloader/SearchResultsPreloader';

interface PendingSearchResultsLayoutProps {
  children?: JSX.Element;
}

const PendingSearchResultsLayout = ({ children }: PendingSearchResultsLayoutProps) => {
  const totalArticles = useAppSelector(articlesSelectors.selectTotal);
  const { pending, error } = useAppSelector((state) => state.articles);

  console.log('PendingSearchResultsLayout Render', error);

  if (pending) return <SearchResultsPreloader text="Searching for news..." />;

  if (error === 'AbortError') {
    console.log('blaaaaa', error);
    return <SearchResultsPreloader text="Searching for news..." />;
  } else if (error) {
    return (
      <ReceivingErrorSection
        title="Sorry, something went wrong during the request. There may be a connection issue or
        the server may be down. Please try again later."
      />
    );
  }

  if (totalArticles === 0 && pending !== null) {
    console.log(totalArticles, pending);
    return (
      <NotFoundSection
        title="Nothing found"
        text="Sorry, but nothing matched your search terms."
      />
    );
  }
  return <>{children}</>;
};

export default PendingSearchResultsLayout;
