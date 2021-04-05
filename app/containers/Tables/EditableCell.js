import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { EditableCellDemo } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function CrudTablePage(props) {
  const title = brand.name + ' - Table';
  const description = brand.desc;
  const docSrc = 'containers/Tables/demos/';
  const { classes, intl } = props;
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
        whiteBg
        icon="border_color"
        title={intl.formatMessage(messages.inRowEditTitle)}
        desc={intl.formatMessage(messages.inRowEditDesc)}
      >
        <div className={classes.root}>
          <EditableCellDemo />
          <SourceReader componentName={docSrc + 'EditableCellDemo.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

CrudTablePage.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(CrudTablePage));
