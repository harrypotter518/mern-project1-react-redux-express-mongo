import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  ImageGridList,
  TitlebarGridList,
  AdvancedGridList,
  SingleLineGridList
} from './demos';

class ImageGrid extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/ImageGrid/';
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
          title={intl.formatMessage(messages.imageGridOnlyTitle)}
          icon="dashboard"
          desc={intl.formatMessage(messages.imageGridOnlyDesc)}
        >
          <div>
            <ImageGridList />
            <SourceReader componentName={docSrc + 'ImageGridList.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.imageGridTitlebarsTitle)}
          icon="view_module"
          desc={intl.formatMessage(messages.imageGridTitlebarsDesc)}
        >
          <div>
            <TitlebarGridList />
            <SourceReader componentName={docSrc + 'TitlebarGridList.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.imageGridAdvancedTitle)}
          icon="video_label"
          desc={intl.formatMessage(messages.imageGridAdvancedDesc)}
        >
          <div>
            <AdvancedGridList />
            <SourceReader componentName={docSrc + 'AdvancedGridList.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.imageGridSingleTitle)}
          icon="view_carousel"
          desc={intl.formatMessage(messages.imageGridSingleDesc)}
        >
          <div>
            <SingleLineGridList />
            <SourceReader componentName={docSrc + 'SingleLineGridList.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

ImageGrid.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(ImageGrid);
