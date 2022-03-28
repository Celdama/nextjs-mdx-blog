import React from 'react';

export const PreviewYoutubeLink = ({ url }) => {
  return <iframe width={420} height={300} frameBorder='0' src={url} />;
};
