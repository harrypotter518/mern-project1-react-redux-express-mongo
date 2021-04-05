import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import {
  SimpleTooltips,
  PositionedTooltips,
  SimplePopover,
  PopoverPlayground,
  DelayTooltips,
  TriggersTooltips,
} from './demos';

class PopoverTooltip extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/PopoverTooltip/';
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
          title={intl.formatMessage(messages.tooltipSimpleTitle)}
          icon="chat_bubble"
          desc={intl.formatMessage(messages.tooltipSimpleDesc)}
        >
          <div>
            <SimpleTooltips />
            <SourceReader componentName={docSrc + 'SimpleTooltips.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          overflowX
          icon="chat_bubble_outline"
          title={intl.formatMessage(messages.tooltipPositionedTitle)}
          desc={intl.formatMessage(messages.tooltipPositionedDesc)}
        >
          <div>
            <PositionedTooltips />
            <SourceReader componentName={docSrc + 'PositionedTooltips.js'} />
          </div>
        </PapperBlock>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <PapperBlock
              title={intl.formatMessage(messages.tooltipTriggerTitle)}
              icon="chat_bubble"
              desc={intl.formatMessage(messages.tooltipTriggerDesc)}
            >
              <div>
                <TriggersTooltips />
                <SourceReader componentName={docSrc + 'TriggersTooltips.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock
              title={intl.formatMessage(messages.tooltipDelayTitle)}
              icon="chat_bubble_outline"
              desc={intl.formatMessage(messages.tooltipDelayDesc)}
            >
              <div>
                <DelayTooltips />
                <SourceReader componentName={docSrc + 'DelayTooltips.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        <PapperBlock
          title={intl.formatMessage(messages.tooltipPopoverTitle)}
          icon="flip_to_front"
          desc={intl.formatMessage(messages.tooltipPopoverDesc)}
        >
          <div>
            <SimplePopover />
            <SourceReader componentName={docSrc + 'SimplePopover.js'} />
          </div>
        </PapperBlock>
        <PapperBlock
          title={intl.formatMessage(messages.tooltipPlayTitle)}
          icon="flip_to_front"
          desc={intl.formatMessage(messages.tooltipPlayDesc)}
        >
          <div>
            <PopoverPlayground />
            <SourceReader componentName={docSrc + 'PopoverPlayground.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

PopoverTooltip.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(PopoverTooltip);
