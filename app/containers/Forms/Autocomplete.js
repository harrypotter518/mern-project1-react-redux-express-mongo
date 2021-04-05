import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { injectIntl, intlShape } from 'react-intl';
import { SourceReader, PapperBlock } from 'enl-components';
import messages from './messages';
import {
  AutoSuggest,
  TagSuggestions,
  SelectSuggestions,
  SelectSuggestionTags,
  HighlightSuggest
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function Autocomplete(props) {
  const { classes, intl } = props;
  const title = brand.name + ' - Form';
  const description = brand.desc;
  const docSrc = 'containers/Forms/demos/';
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
        <Grid container spacing={3}>
          <Grid item md={12}>
            <PapperBlock
              title={intl.formatMessage(messages.hightlightTitle)}
              icon="horizontal_split"
              desc={intl.formatMessage(messages.hightlightDesc)}
            >
              <div>
                <HighlightSuggest />
                <SourceReader componentName={docSrc + 'HighlightSuggest.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6}>
            <PapperBlock
              title={intl.formatMessage(messages.autoTitle)}
              icon="spellcheck"
              desc={intl.formatMessage(messages.autoDesc)}
            >
              <div>
                <AutoSuggest />
                <SourceReader componentName={docSrc + 'AutoSuggest.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6}>
            <PapperBlock
              title={intl.formatMessage(messages.tagTitle)}
              icon="label"
              desc={intl.formatMessage(messages.tagDesc)}
            >
              <div>
                <TagSuggestions />
                <SourceReader componentName={docSrc + 'TagSuggestions.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6}>
            <PapperBlock
              title={intl.formatMessage(messages.selectTitle)}
              icon="calendar_view_day"
              desc={intl.formatMessage(messages.selectDesc)}
            >
              <div>
                <SelectSuggestions />
                <SourceReader componentName={docSrc + 'SelectSuggestions.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6}>
            <PapperBlock
              title={intl.formatMessage(messages.selectTagTitle)}
              icon="label"
              desc={intl.formatMessage(messages.selectTagDesc)}
            >
              <div>
                <SelectSuggestionTags />
                <SourceReader componentName={docSrc + 'SelectSuggestionTags.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

export default withStyles(styles)(injectIntl(Autocomplete));
