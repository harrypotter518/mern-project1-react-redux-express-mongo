import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  TemporaryDrawer,
  SwipeDrawer,
  BasicMenu,
  DropdownMenu,
  StyledMenu,
  MenuTransition
} from './demos';

class DrawerMenu extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/DrawerMenu/';
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
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PapperBlock
              title={intl.formatMessage(messages.temporaryTitle)}
              icon="vertical_split"
              desc={intl.formatMessage(messages.temporaryDesc)}
            >
              <div>
                <TemporaryDrawer />
                <SourceReader componentName={docSrc + 'TemporaryDrawer.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6}>
            <PapperBlock
              title={intl.formatMessage(messages.swipeTitle)}
              icon="exit_to_app"
              desc={intl.formatMessage(messages.swipeDesc)}
            >
              <div>
                <SwipeDrawer />
                <SourceReader componentName={docSrc + 'SwipeDrawer.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        <PapperBlock
          title={intl.formatMessage(messages.basicMenuTitle)}
          icon="featured_play_list"
          desc={intl.formatMessage(messages.basicMenuDesc)}
        >
          <div>
            <BasicMenu />
            <SourceReader componentName={docSrc + 'BasicMenu.js'} />
          </div>
        </PapperBlock>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PapperBlock
              title={intl.formatMessage(messages.selectedMenuTitle)}
              icon="view_list"
              desc={intl.formatMessage(messages.selectedMenuDesc)}
            >
              <div>
                <DropdownMenu />
                <SourceReader componentName={docSrc + 'DropdownMenu.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6}>
            <PapperBlock
              title={intl.formatMessage(messages.styledMenuTitle)}
              icon="list_alt"
              desc={intl.formatMessage(messages.styledMenuDesc)}
            >
              <div>
                <StyledMenu />
                <SourceReader componentName={docSrc + 'StyledMenu.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        <PapperBlock
          title={intl.formatMessage(messages.transitionMenuTitle)}
          icon="flip_to_front"
          desc={intl.formatMessage(messages.transitionMenuDesc)}
        >
          <div>
            <MenuTransition />
            <SourceReader componentName={docSrc + 'MenuTransition.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

DrawerMenu.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(DrawerMenu);
