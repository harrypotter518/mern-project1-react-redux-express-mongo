import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  TodoListMini,
  ContactsMini,
  TradeMini
} from './demos';

function MiniApps(props) {
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
      <PapperBlock
        title={intl.formatMessage(messages.contactTitle)}
        whiteBg
        icon="contact_phone"
        desc={intl.formatMessage(messages.contactDesc)}
      >
        <div>
          <ContactsMini />
          <SourceReader componentName={docSrc + 'ContactsMini.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.todoTitle)}
        whiteBg
        icon="playlist_add_check"
        desc={intl.formatMessage(messages.contactDesc)}
      >
        <div>
          <TodoListMini />
          <SourceReader componentName={docSrc + 'TodoListMini.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.todoTitle)}
        icon="compare_arrows"
        desc={intl.formatMessage(messages.todoDesc)}
      >
        <div>
          <TradeMini />
          <SourceReader componentName={docSrc + 'TradeMini.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

MiniApps.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(MiniApps);
