import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brand from 'enl-api/dummy/brand';
import { PapperBlock, Invoice } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  btnArea: {
    textAlign: 'center'
  },
  wrapper: {
    width: '100%',
    overflow: 'auto'
  }
});

function InvoicePage(props) {
  const { classes, intl } = props;
  const title = brand.name + ' - Dynamic Invoice';
  const description = brand.desc;
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
        title={intl.formatMessage(messages.invoice_title)}
        icon="note"
        desc={intl.formatMessage(messages.invoice_desc)}
      >
        <section className={classes.wrapper}>
          <Invoice />
        </section>
      </PapperBlock>
    </div>
  );
}

InvoicePage.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(InvoicePage));
