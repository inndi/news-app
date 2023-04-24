export const scrollToTop = (isSmooth: boolean = false) => {
  const behavior: ScrollBehavior = isSmooth ? 'smooth' : 'auto';

  window.scrollTo({
    top: 0,
    behavior,
  });
};
