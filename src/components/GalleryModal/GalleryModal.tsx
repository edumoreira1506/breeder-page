import React, { useCallback } from 'react'
import { ImageGallery, Modal } from '@cig-platform/ui'

import { useGalleryDispatch, useGallerySelector } from '../../contexts/GalleryContext/GalleryContext'
import { selectImages, selectIsOpen } from '../../contexts/GalleryContext/gallerySelectors'
import { setIsOpen } from '../../contexts/GalleryContext/galleryActions'

const GalleryModal = () => {
  const isOpen = useGallerySelector(selectIsOpen)
  const images = useGallerySelector(selectImages)

  const dispatch = useGalleryDispatch()

  const handleCloseModal = useCallback(() => {
    dispatch(setIsOpen(false))
  }, [dispatch])

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <ImageGallery items={images} />
    </Modal>
  ) 
}

export default GalleryModal
