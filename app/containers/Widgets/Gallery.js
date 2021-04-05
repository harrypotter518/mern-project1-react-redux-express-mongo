import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  SliderNews,
  SliderQuotes,
  Album,
  Thumbnail
} from './demos';

function Gallery(props) {
  const title = brand.name + ' - Widgets';
  const description = brand.desc;
  const docSrc = 'containers/Widgets/demos/';
  const { intl } = props;
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
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <PapperBlock
            title={intl.formatMessage(messages.sliderNewsTitle)}
            icon="aspect_ratio"
            desc={intl.formatMessage(messages.sliderNewsDesc)}
          >
            <div>
              <SliderNews />
              <SourceReader componentName={docSrc + 'SliderNews.js'} />
            </div>
          </PapperBlock>
          <PapperBlock
            title={intl.formatMessage(messages.albumGalleryTitle)}
            icon="photo_album"
            desc={intl.formatMessage(messages.albumGalleryDesc)}
          >
            <div>
              <Album />
              <SourceReader componentName={docSrc + 'Album.js'} />
            </div>
          </PapperBlock>
        </Grid>
        <Grid item md={6} xs={12}>
          <PapperBlock
            title={intl.formatMessage(messages.sliderQuotesTitle)}
            whiteBg
            icon="format_quote"
            desc={intl.formatMessage(messages.sliderQuotesDesc)}
          >
            <div>
              <SliderQuotes />
              <SourceReader componentName={docSrc + 'SliderQuotes.js'} />
            </div>
          </PapperBlock>
          <PapperBlock
            title={intl.formatMessage(messages.imageThumbnailsTitle)}
            whiteBg
            icon="dashboard"
            desc={intl.formatMessage(messages.imageThumbnailsDesc)}
          >
            <div>
              <Thumbnail />
              <SourceReader componentName={docSrc + 'Thumbnail.js'} />
            </div>
          </PapperBlock>
        </Grid>
      </Grid>
    </div>
  );
}

Gallery.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Gallery);
