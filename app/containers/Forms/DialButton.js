import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl, intlShape } from 'react-intl';
import { SourceReader, PapperBlock } from 'enl-components';
import { DialSimple, DialCustomClose, DialTooltip } from './demos';
import messages from './messages';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function DialButton(props) {
  const title = brand.name + ' - Form';
  const description = brand.desc;
  const docSrc = 'containers/Forms/demos/';
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
      <PapperBlock title={intl.formatMessage(messages.dialSimpleTitle)} icon="add_circle_outline" desc={intl.formatMessage(messages.dialSimpleDesc)}>
        <div>
          <DialSimple />
          <SourceReader componentName={docSrc + 'DialSimple.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title={intl.formatMessage(messages.dialCustomTitle)} icon="cancel" desc={intl.formatMessage(messages.dialCustomDesc)}>
        <div>
          <DialCustomClose />
          <SourceReader componentName={docSrc + 'DialCustomClose.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title={intl.formatMessage(messages.dialTooltipsTitle)} icon="chat_bubble" desc={intl.formatMessage(messages.dialTooltipsDesc)}>
        <div>
          <DialTooltip />
          <SourceReader componentName={docSrc + 'DialTooltip.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

DialButton.propTypes = {
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(DialButton));
