import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl, intlShape } from 'react-intl';
import { SourceReader, PapperBlock } from 'enl-components';
import messages from './messages';
import {
  ListBasic,
  ListMenu,
  PinnedList,
  ListControl,
  ListInteractive
} from './demos';

class List extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/List/';
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
          title={intl.formatMessage(messages.listBasicTitle)}
          icon="list"
          desc={intl.formatMessage(messages.listBasicDesc)}
        >
          <div>
            <ListBasic />
            <SourceReader componentName={docSrc + 'ListBasic.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.listMenuTitle)}
          icon="featured_play_list"
          desc={intl.formatMessage(messages.listMenuDesc)}
        >
          <div>
            <ListMenu />
            <SourceReader componentName={docSrc + 'ListMenu.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.listPinnedTitle)}
          icon="line_weight"
          desc={intl.formatMessage(messages.listPinnedDesc)}
        >
          <div>
            <PinnedList />
            <SourceReader componentName={docSrc + 'PinnedList.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.listControlTitle)}
          icon="list_alt"
          desc={intl.formatMessage(messages.listControlDesc)}
        >
          <div>
            <ListControl />
            <SourceReader componentName={docSrc + 'ListControl.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.listInteractiveTitle)}
          icon="playlist_play"
          desc={intl.formatMessage(messages.listInteractiveDesc)}
        >
          <div>
            <ListInteractive />
            <SourceReader componentName={docSrc + 'ListInteractive.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

List.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(List);
