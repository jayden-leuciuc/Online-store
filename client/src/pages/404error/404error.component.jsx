import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './404error.styles';

const error404 = () => {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
      <ErrorImageText>404 Error</ErrorImageText>
      <a href='/'>Take me home</a>
    </ErrorImageOverlay>
  );
};
export default error404;
