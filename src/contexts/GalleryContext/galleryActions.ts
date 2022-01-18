export const setIsOpen = (isOpen: boolean) => ({
  type: 'SET_IS_OPEN',
  payload: { isOpen }
} as const)

export const setFiles = (images: string[]) => ({
  type: 'SET_FILES',
  payload: { images }
} as const)
