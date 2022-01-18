import createReducableContext from '@cig-platform/context'

import galleryReducer, { INITIAL_STATE, GalleryState, GalleryActionTypes } from './galleryReducer'

const { context, useDispatch, useSelector, provider } = createReducableContext<GalleryState, GalleryActionTypes>(INITIAL_STATE, galleryReducer)

export default context

export const useGalleryDispatch = useDispatch

export const useGallerySelector = useSelector

export const GalleryProvider = provider
