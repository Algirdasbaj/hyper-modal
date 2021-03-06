export const defaultProps = {
  ariaEnabled: true,
  ariaProps: {
    'aria-describedby': 'hyper-modal-description',
    'aria-labelledby': 'hyper-modal-title',
    role: 'dialog',
  },
  disableScroll: true,
  childrenMode: true,
  closeDebounceTimeout: 0,
  closeIconPosition: {
    vertical: 'top',
    horizontal: 'right',
  },
  closeOnCloseIconClick: true,
  closeOnDimmerClick: true,
  closeOnEscClick: true,
  dimmerEnabled: true,
  isFullscreen: false,
  portalMode: false,
  position: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};
