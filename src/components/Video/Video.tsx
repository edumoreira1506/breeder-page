import React, { FC } from 'react'
import ReactPlayer from 'react-player'

import { StyledContainer } from './Video.styles'

export interface VideoProps {
  url: string;
}

const Video: FC<VideoProps> = ({ url }: VideoProps) => {
  return (
    <StyledContainer>
      <ReactPlayer url={url} />
    </StyledContainer>
  )
}

export default Video
