import React from 'react';
import styled from "styled-components";

const StyledImage = styled.img`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  object-fit: ${props => props.objectFit || 'contain'};
  border-radius: ${props => props.rounded ? '8px' : '0'};
  border: ${props => props.bordered ? '1px solid #ddd' : 'none'};
  box-shadow: ${props => props.elevated ? '0 4px 8px rgba(0,0,0,0.1)' : 'none'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  max-width: 100%;
  display: block;
`;

const ImageContainer = styled.div`
  width: ${props => props.containerWidth || 'auto'};
  height: ${props => props.containerHeight || 'auto'};
  display: ${props => props.inline ? 'inline-block' : 'block'};
  overflow: ${props => props.overflow || 'visible'};
  background-color: ${props => props.bgColor || 'transparent'};
  padding: ${props => props.containerPadding || '0'};
  margin: ${props => props.containerMargin || '0'};
  border-radius: ${props => props.containerRounded ? '8px' : '0'};
`;

const Image = ({
  src,
  alt,
  width,
  height,
  objectFit,
  rounded,
  bordered,
  elevated,
  margin,
  padding,
  containerWidth,
  containerHeight,
  inline,
  overflow,
  bgColor,
  containerPadding,
  containerMargin,
  containerRounded,
  ...props
}) => {
  return (
    <ImageContainer
      containerWidth={containerWidth}
      containerHeight={containerHeight}
      inline={inline}
      overflow={overflow}
      bgColor={bgColor}
      containerPadding={containerPadding}
      containerMargin={containerMargin}
      containerRounded={containerRounded}
    >
      <StyledImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit={objectFit}
        rounded={rounded}
        bordered={bordered}
        elevated={elevated}
        margin={margin}
        padding={padding}
        {...props}
      />
    </ImageContainer>
  );
};

export default Image;