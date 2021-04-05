import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
// import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import { SourceReader, PapperBlock } from 'enl-components';
// import messages from './messages';
import {
  BasicTree,
  CustomTree,
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class TreeView extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const { classes } = this.props;
    const docSrc = 'containers/UiElements/demos/TreeView/';
    // const { intl } = this.props;
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
            title="Basic Tree View"
            icon="subdirectory_arrow_right"
            desc="Tree views can be used to represent a file system navigator displaying folders and files, an item representing a folder can be expanded to reveal the contents of the folder, which may be files, folders, or both."
          >
            <div>
              <BasicTree />
              <SourceReader componentName={docSrc + 'Basic.js'} />
            </div>
          </PapperBlock>
        </div>
        <div className={classes.root}>
          <PapperBlock
            title="Customized tree view"
            icon="sort"
            desc="Custom icons, border and animation"
          >
            <div>
              <CustomTree />
              <SourceReader componentName={docSrc + 'Custom.js'} />
            </div>
          </PapperBlock>
        </div>
      </div>
    );
  }
}

TreeView.propTypes = {
  classes: PropTypes.object.isRequired,
  // intl: intlShape.isRequired
};

// export default withStyles(styles)(injectIntl(TreeView));
export default withStyles(styles)(TreeView);
