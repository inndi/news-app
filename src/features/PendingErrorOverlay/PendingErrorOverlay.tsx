interface PendingErrorOverlayProps {
  isError?: boolean;
  isPending?: boolean | null;
  isNoResults?: boolean;
  isNoData?: boolean;
  pendingText?: (() => JSX.Element) | string;
  noDataMessage?: (() => JSX.Element) | string;
  errorText?: (() => JSX.Element) | string;
  noResultsMessage?: (() => JSX.Element) | string;
  children?: JSX.Element;
}

const PendingErrorOverlay = ({
  isError,
  isPending,
  isNoResults,
  pendingText,
  errorText = 'SAVED_ENTITIES_ERROR',
  noResultsMessage = 'No  results found',
  noDataMessage = 'No data to display',
  children,
}: PendingErrorOverlayProps) => {
  console.log('PendingSearchResultsLayout Render');

  if (isPending) {
    return typeof pendingText === 'function' ? (
      pendingText()
    ) : (
      <p className="empty-data-text">{pendingText}</p>
    );
  }

  if (isError) {
    return typeof errorText === 'function' ? (
      errorText()
    ) : (
      <p className="empty-data-text">{errorText}</p>
    );
  }

  if (isNoResults && isPending !== null) {
    return typeof noResultsMessage === 'function' ? (
      noResultsMessage()
    ) : (
      <p className="empty-data-text">{noResultsMessage}</p>
    );
  }
  return <>{children}</>;
};

export default PendingErrorOverlay;
