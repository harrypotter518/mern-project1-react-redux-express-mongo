import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  StandardCards,
  ControlCards,
  PaperSheet,
  SocialCards,
  EcommerceCards
} from './demos';

class Cards extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Cards/';
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
          title={intl.formatMessage(messages.paperTitle)}
          icon="insert_drive_file"
          desc={intl.formatMessage(messages.paperDesc)}
        >
          <div>
            <PaperSheet />
            <SourceReader componentName={docSrc + 'PaperSheet.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.standardCardsTitle)}
          icon="credit_card"
          desc={intl.formatMessage(messages.standardCardsDesc)}
        >
          <div>
            <StandardCards />
            <SourceReader componentName={docSrc + 'StandardCards.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.controlCardsTitle)}
          icon="play_circle_outline"
          desc={intl.formatMessage(messages.controlCardsDesc)}
        >
          <div>
            <ControlCards />
            <SourceReader componentName={docSrc + 'ControlCards.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.socialCardsTitle)}
          icon="card_membership"
          desc={intl.formatMessage(messages.socialCardsDesc)}
        >
          <div>
            <SocialCards />
            <SourceReader componentName={docSrc + 'SocialCards.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.ecommerceCardsTitle)}
          icon="shopping_cart"
          desc={intl.formatMessage(messages.ecommerceCardsDesc)}
        >
          <div>
            <EcommerceCards />
            <SourceReader componentName={docSrc + 'EcommerceCards.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

Cards.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Cards);
