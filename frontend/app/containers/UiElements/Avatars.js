import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { AvatarsDemo, AvatarsPractice } from './demos';

class Avatars extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Avatars/';
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
          title={intl.formatMessage(messages.avatarStandardTitle)}
          icon="account_circle"
          desc={intl.formatMessage(messages.avatarStandardDesc)}
        >
          <div>
            <AvatarsDemo />
            <SourceReader componentName={docSrc + 'AvatarsDemo.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.avatarImplementedTitle)}
          icon="account_box"
          desc={intl.formatMessage(messages.avatarImplementedDesc)}
        >
          <div>
            <AvatarsPractice />
            <SourceReader componentName={docSrc + 'AvatarsPractice.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

Avatars.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Avatars);
