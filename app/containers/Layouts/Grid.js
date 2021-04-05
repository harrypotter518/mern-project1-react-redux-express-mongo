import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import {
  GridLayout,
  FullWidth,
  Centered,
  Interactive,
} from './demos';
import messages from './messages';

class Grid extends Component {
  render() {
    const title = brand.name + ' - Layout';
    const description = brand.desc;
    const docSrc = 'containers/Layouts/demos/';
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
          title={intl.formatMessage(messages.gridSpacingTitle)}
          icon="grid_on"
          desc={intl.formatMessage(messages.gridSpacingDesc)}
        >
          <div>
            <GridLayout />
            <SourceReader componentName={docSrc + 'GridLayout.js'} />
          </div>
        </PapperBlock>

        <PapperBlock
          title={intl.formatMessage(messages.fullWidthTitle)}
          icon="grid_on"
          desc={intl.formatMessage(messages.fullWidthDesc)}
        >
          <div>
            <FullWidth />
            <SourceReader componentName={docSrc + 'FullWidth.js'} />
          </div>
        </PapperBlock>

        <PapperBlock
          title={intl.formatMessage(messages.centeredGridTitle)}
          icon="grid_on"
          desc={intl.formatMessage(messages.centeredGridDesc)}
        >
          <div>
            <Centered />
            <SourceReader componentName={docSrc + 'Centered.js'} />
          </div>
        </PapperBlock>

        <PapperBlock
          title={intl.formatMessage(messages.interactiveTitle)}
          icon="grid_on"
          desc={intl.formatMessage(messages.interactiveDesc)}
        >
          <div>
            <Interactive />
            <SourceReader componentName={docSrc + 'Interactive.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

Grid.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Grid);
