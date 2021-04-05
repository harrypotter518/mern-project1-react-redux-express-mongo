import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import { SourceReader, PapperBlock } from 'enl-components';
import messages from './messages';
import {
  SimpleTabs,
  IconTabs,
  ScrollTabs,
  ScrollIconTabs,
  DisabledTab,
  BottomNav
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class Tabs extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const { classes } = this.props;
    const docSrc = 'containers/UiElements/demos/Tabs/';
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
        <div className={classes.root}>
          <PapperBlock
            title={intl.formatMessage(messages.tabsSimpleTitle)}
            icon="tab"
            desc={intl.formatMessage(messages.tabsSimpleDesc)}
          >
            <div>
              <SimpleTabs />
              <SourceReader componentName={docSrc + 'SimpleTabs.js'} />
            </div>
          </PapperBlock>
          <PapperBlock
            title={intl.formatMessage(messages.tabsIconTitle)}
            icon="folder"
            desc={intl.formatMessage(messages.tabsIconDesc)}
          >
            <div>
              <IconTabs />
              <SourceReader componentName={docSrc + 'IconTabs.js'} />
            </div>
          </PapperBlock>
          <PapperBlock
            title={intl.formatMessage(messages.tabsScrollTitle)}
            icon="tab"
            desc={intl.formatMessage(messages.tabsScrollDesc)}
          >
            <div>
              <ScrollTabs />
              <SourceReader componentName={docSrc + 'ScrollTabs.js'} />
            </div>
          </PapperBlock>
          <PapperBlock
            title={intl.formatMessage(messages.tabsScrollIconTitle)}
            icon="tab"
            desc=""
          >
            <div>
              <ScrollIconTabs />
              <SourceReader componentName={docSrc + 'ScrollIconTabs.js'} />
            </div>
          </PapperBlock>
          <PapperBlock
            title={intl.formatMessage(messages.tabsDisabledTitle)}
            icon="folder"
            desc={intl.formatMessage(messages.tabsDisabledDesc)}
          >
            <div>
              <DisabledTab />
              <SourceReader componentName={docSrc + 'DisabledTab.js'} />
            </div>
          </PapperBlock>
          <PapperBlock
            title={intl.formatMessage(messages.tabsBottomTitle)}
            icon="picture_in_picture_alt"
            desc={intl.formatMessage(messages.tabsBottomDesc)}
          >
            <div>
              <BottomNav />
              <SourceReader componentName={docSrc + 'BottomNav.js'} />
            </div>
          </PapperBlock>
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(Tabs));
