import React from 'react';

export const YoutubeLinkPreviewer = ({ url }) => {
  return (
    <iframe
      width={'100%'}
      style={{ margin: '10px 0' }}
      height={300}
      frameBorder='0'
      src={url}
    />
  );
};
