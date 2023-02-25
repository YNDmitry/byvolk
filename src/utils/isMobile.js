export const useIsMobile = computedAsync(() => {
  return !useMediaQuery('(max-width: 769px)').value ? false : true
})