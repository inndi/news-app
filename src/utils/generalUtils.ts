export const scrollToTop = (isSmooth: boolean = false) => {
  const behavior: ScrollBehavior = isSmooth ? 'smooth' : 'auto';

  document.body.scrollIntoView({ behavior, block: 'start' });
};
