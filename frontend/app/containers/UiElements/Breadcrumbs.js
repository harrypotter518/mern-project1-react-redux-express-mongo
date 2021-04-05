import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { ClassicBreadcrumbs, PaperBreadcrumbs } from './demos';

class BreadCrumbs extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Breadcrumbs/';
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
          title={intl.formatMessage(messages.breadcrumbClassicTitle)}
          icon="arrow_forward_ios"
          desc={intl.formatMessage(messages.breadcrumbClassicDesc)}
        >
          <div>
            <ClassicBreadcrumbs />
            <SourceReader componentName={docSrc + 'ClassicBreadcrumbs.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.breadcrumbPaperTitle)}
          icon="arrow_forward_ios"
          desc={intl.formatMessage(messages.breadcrumbPaperDesc)}
        >
          <div>
            <PaperBreadcrumbs />
            <SourceReader componentName={docSrc + 'PaperBreadcrumbs.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

BreadCrumbs.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(BreadCrumbs);
