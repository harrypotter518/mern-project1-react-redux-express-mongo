
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  SingleCarousel,
  MultipleCarousel,
  AutoplayCarousel,
  ThumbnailCarousel,
  VerticalCarousel,
  CustomCarousel,
} from './demos';

class SliderCarousel extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/SliderCaraousel/';
    const { intl } = this.props;
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
        <PapperBlock
          title={intl.formatMessage(messages.sliderSimpleTitle)}
          icon="photo_size_select_actual"
          desc={intl.formatMessage(messages.sliderSimpleDesc)}
        >
          <div>
            <SingleCarousel />
            <SourceReader componentName={docSrc + 'SingleCarousel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.sliderCarouselTitle)}
          icon="view_carousel"
          desc=""
        >
          <div>
            <MultipleCarousel />
            <SourceReader componentName={docSrc + 'MultipleCarousel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.sliderAutoplayTitle)}
          icon="play_arrow"
          desc=""
        >
          <div>
            <AutoplayCarousel />
            <SourceReader componentName={docSrc + 'AutoplayCarousel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.sliderThumbTitle)}
          icon="view_carousel"
          desc=""
        >
          <div>
            <ThumbnailCarousel />
            <SourceReader componentName={docSrc + 'ThumbnailCarousel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.sliderVerticalTitle)}
          icon="view_stream"
          desc=""
        >
          <div>
            <VerticalCarousel />
            <SourceReader componentName={docSrc + 'VerticalCarousel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.sliderCustomTitle)}
          icon="control_camera"
          desc=""
        >
          <div>
            <CustomCarousel />
            <SourceReader componentName={docSrc + 'CustomCarousel.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

SliderCarousel.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(SliderCarousel);
