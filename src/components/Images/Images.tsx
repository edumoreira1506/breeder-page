import React, { FC, useState, useCallback } from 'react'
import Modal from 'react-modal'
import { ImagesCarousel, ImageGallery, Colors } from '@cig-platform/ui'

import { StyledContainer, StyledTitle } from './Images.styles'

export interface ImagesProps {
  images: {
    src: string;
    alt: string;
  }[]
}

const Images: FC<ImagesProps> = ({ images }: ImagesProps) => {
  const [isOpenGallery, setIsOpenGallery] = useState(false)
  const [clickedIndex, setClickedIndex] = useState(0)

  const closeGallery = useCallback(() => setIsOpenGallery(false), [])
  const openGallery = useCallback(() => setIsOpenGallery(true), [])

  const handleClickImage = useCallback((src: string) => {
    console.log({ src })

    openGallery()

    const index = images.findIndex((image) => image.src === src)

    setClickedIndex(index)
  }, [openGallery, images])

  return (
    <>
      <StyledContainer>
        <StyledTitle>Fotos do criatório</StyledTitle>
        <ImagesCarousel images={images} onClickImage={handleClickImage} />
      </StyledContainer>
      <Modal
        isOpen={isOpenGallery}
        onRequestClose={closeGallery}
        style={{ overlay: { background: Colors.BlackTransparent, zIndex: 1000 } }}
      >
        <ImageGallery
          showPlayButton={false}
          items={images.map((image) => ({
            original: image.src,
            thumbnail: image.src
          }))}
          startIndex={clickedIndex}
        />
      </Modal>
    </>
  )
}

export default Images
