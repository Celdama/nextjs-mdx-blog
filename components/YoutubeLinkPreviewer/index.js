import React from 'react';

export const YoutubeLinkPreviewer = ({ url }) => {
  return <iframe width={'100%'} height={300} frameBorder='0' src={url} />;
};
