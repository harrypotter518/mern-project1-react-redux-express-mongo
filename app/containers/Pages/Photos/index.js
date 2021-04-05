import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import imgData from 'enl-api/images/imgDataMasonry';
import { PhotoGallery } from 'enl-components';

function Photos() {
  const title = brand.name + ' - Photo Gallery';
  const description = brand.desc;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PhotoGallery imgData={imgData} />
    </div>
  );
}

export default Photos;
