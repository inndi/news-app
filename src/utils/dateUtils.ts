type FormatDateStyle = 'long' | 'full' | 'medium' | 'short' | undefined;

export const formatDate = (date: string, format: FormatDateStyle = 'long') => {
  const articleDate = new Date(date);

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: format,
  }).format(articleDate);
};

export const getXDateFromNow = (amountDaysAgo: number): string => {
  const requestedData = new Date();
  requestedData.setDate(requestedData.getDate() - amountDaysAgo);
  return requestedData.toLocaleDateString('en-CA');
};
