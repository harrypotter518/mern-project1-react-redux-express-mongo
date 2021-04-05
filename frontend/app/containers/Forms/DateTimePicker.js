import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { SourceReader, PapperBlock } from 'enl-components';
import { injectIntl, intlShape } from 'react-intl';
import messages from './messages';
import { DateInput, TimeInput, DateTimeInput } from './demos';

function DateTime(props) {
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
      <PapperBlock
        title={intl.formatMessage(messages.dateTitle)}
        icon="date_range"
        desc={intl.formatMessage(messages.dateDesc)}
      >
        <div>
          <DateInput />
          <SourceReader componentName={docSrc + 'DateInput.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.timeTitle)}
        icon="access_time"
        desc={intl.formatMessage(messages.timeDesc)}
      >
        <div>
          <TimeInput />
          <SourceReader componentName={docSrc + 'TimeInput.js'} />
        </div>
      </PapperBlock>
      <PapperBlock
        title={intl.formatMessage(messages.dateTimeTitle)}
        icon="date_range"
        desc={intl.formatMessage(messages.dateTimeDesc)}
      >
        <div>
          <DateTimeInput />
          <SourceReader componentName={docSrc + 'DateTimeInput.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

DateTime.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(DateTime);
