import { ActionType } from '@cig-platform/context'

import * as actions from './galleryActions'

export type GalleryState = {
  isOpen: boolean;
  images: {
    original: string;
    thumbnail: string;
  }[]
}

export const INITIAL_STATE: GalleryState = {
  isOpen: false,
  images: []
}

export type GalleryActionTypes = ActionType<typeof actions>

export default function galleryReducer(
  state = INITIAL_STATE,
  action: GalleryActionTypes
): GalleryState {
  switch (action.type) {
  case 'SET_FILES':
    return {
      ...state,
      images: action.payload.images.map((image) => ({
        thumbnail: image,
        original: image
      }))
    }
  case 'SET_IS_OPEN':
    return {
      ...state,
      isOpen: action.payload.isOpen
    }
  default:
    return state
  }
}
