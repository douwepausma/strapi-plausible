/*
 *
 * Plausible analytics dashboard.
 *
 */

import React, { memo, useEffect, useState } from "react";
import { Main } from '@strapi/design-system';
// import * as React from 'react';
import { useIntl } from 'react-intl';
import { Typography } from '@strapi/design-system';
import { SingleSelect, SingleSelectOption } from '@strapi/design-system';
import { EmptyStateLayout } from '@strapi/design-system';
// import { EmptyData } from '@strapi/icons';
import pluginId from "../../utils/pluginId";

const Dashboard = () => {
  const [config, setConfig] = React.useState(null);
  const [selectedDomain, setSelectedDomain] = React.useState(null);
  const { formatMessage } = useIntl();

  const fetchConfig = async () => {
    try {
      const response = await fetch('/plausible/config');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setConfig(data);

      // Set the first domain as selected if available
      if (data?.domains.length) {
        setSelectedDomain(data.domains[0]);
      }
    } catch (error) {
      console.error('Failed to fetch config:', error);
    }
  }

  React.useEffect(() => {
    fetchConfig();
  }, []);

  return (
    <Main>
      <header style={{
        maxWidth: '1280px',
        padding: '40px 24px 0px 24px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="alpha" fontWeight="bold" textColor="neutral800">
            {formatMessage({ id: `${pluginId}.page.title` })}
          </Typography>
          <Typography variant="epsilon" textColor="neutral600">
            {formatMessage({ id: `${pluginId}.page.description` })}
          </Typography>

        </div>
        <SingleSelect
          label={formatMessage({ id: `${pluginId}.select.domain.label`, defaultMessage: 'Select Domain' })}
          placeholder={formatMessage({ id: `${pluginId}.select.domain.placeholder`, defaultMessage: 'Select a domain' })}
          disabled={!config?.domains.length}
          value={selectedDomain ? selectedDomain.name : ''}
          onChange={(value) => {
            const domain = config?.domains.find(d => d.name === value);
            setSelectedDomain(domain || null);
          }}
        >
          {config?.domains.map((domain) => (
            <SingleSelectOption key={domain.name} value={domain.name}>
              {domain.name}
            </SingleSelectOption>
          ))}
        </SingleSelect>
      </header>
      {config && config.domains.length ? (
        <>
          {selectedDomain ? (
            <>
              <iframe frameBorder={0} src={`${config.plausibleInstance}/share/${selectedDomain.name}?auth=${selectedDomain.auth}&embed=true&theme=light&background=%23F6F6F9`} scrolling="no" loading="lazy" style={{ width: '1px', minWidth: '100%', height: '2000px' }}></iframe>
            </>
          ) : (
            <></>
          )}
          <script async src={`${config.plausibleInstance}/js/embed.host.js`}></script>
        </>
      ) : (
        <div style={{
          maxWidth: '1280px',
          padding: '40px 24px 0px 24px',
          margin: '0 auto',
        }}>
          {/* <EmptyStateLayout
            icon={<EmptyData height={500} width={500} />}
            content={formatMessage({ id: 'empty.state.content', defaultMessage: 'You don\'t have any domains configured.' })}
          /> */}
        </div>
      )}
    </Main>
  );
};

export default memo(Dashboard);
