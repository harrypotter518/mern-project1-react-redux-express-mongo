import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { SimpleAccordion, AdvancedAccordion, ControlledAccordion } from './demos';

class Accordion extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Accordion/';
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
          title={intl.formatMessage(messages.accordionDefaultTitle)}
          icon="view_day"
          desc={intl.formatMessage(messages.accordionDefaultDesc)}
        >
          <div>
            <SimpleAccordion />
            <SourceReader componentName={docSrc + 'SimpleAccordion.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.accordionSecondaryTitle)}
          icon="view_day"
          desc={intl.formatMessage(messages.accordionSecondaryDesc)}
        >
          <div>
            <AdvancedAccordion />
            <SourceReader componentName={docSrc + 'AdvancedAccordion.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.accordionControlledTitle)}
          icon="view_day"
          desc={intl.formatMessage(messages.accordionControlledDesc)}
        >
          <div>
            <ControlledAccordion />
            <SourceReader componentName={docSrc + 'ControlledAccordion.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

Accordion.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Accordion);
