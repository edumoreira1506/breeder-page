import { GalleryState } from './galleryReducer'

export const selectIsOpen = (state: GalleryState) => state.isOpen

export const selectImages = (state: GalleryState) => state.images
