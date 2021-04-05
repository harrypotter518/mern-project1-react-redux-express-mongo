/*
 * Layout Messages
 *
 * This contains all the text for the Layout page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Layouts';

export default defineMessages({
  appLayoutTitle: {
    id: `${scope}.AppLayout.title`,
    defaultMessage: 'App Layout',
  },
  appLayoutSidebarTitle: {
    id: `${scope}.AppLayout.sidebar.title`,
    defaultMessage: 'App Layout With Sidebar.',
  },
  appLayoutSidebarDesc: {
    id: `${scope}.AppLayout.sidebar.desc`,
    defaultMessage: 'The Drawer slides in from the side. It is a common pattern found in Google apps and follows the keylines and metrics for lists.',
  },
  rightSidebarTitle: {
    id: `${scope}.AppLayout.rightSidebar.title`,
    defaultMessage: 'Right Sidebar Mode',
  },
  rightSidebarDesc: {
    id: `${scope}.AppLayout.rightSidebar.desc`,
    defaultMessage: 'The Drawer slides in from the side. It is a common pattern found in Google apps and follows the keylines and metrics for lists.',
  },
  fullHeaderTitle: {
    id: `${scope}.AppLayout.fullHeader.title`,
    defaultMessage: 'Full Header Mode',
  },
  fullHeaderDesc: {
    id: `${scope}.AppLayout.fullHeader.desc`,
    defaultMessage: 'Apps focused on productivity that require balance across the screen.',
  },
  gridTitle: {
    id: `${scope}.Grid.title`,
    defaultMessage: 'Grid',
  },
  gridSpacingTitle: {
    id: `${scope}.Grid.gridSpacing.title`,
    defaultMessage: 'Grid Spacing',
  },
  gridSpacingDesc: {
    id: `${scope}.Grid.gridSpacing.desc`,
    defaultMessage: 'The responsive grid focuses on consistent spacing widths, rather than column width. Material design margins and columns follow an 8dp square baseline grid. Spacing can be 8, 16, 24, or 40dp wide.',
  },
  fullWidthTitle: {
    id: `${scope}.Grid.fullWidth.title`,
    defaultMessage: 'Full-Width',
  },
  fullWidthDesc: {
    id: `${scope}.Grid.fullWidth.desc`,
    defaultMessage: 'Full-width grids: use fluid columns and breakpoints to determine when a layout needs to change.',
  },
  centeredGridTitle: {
    id: `${scope}.Grid.centeredGrid.title`,
    defaultMessage: 'Centered Grid',
  },
  centeredGridDesc: {
    id: `${scope}.Grid.centeredGrid.desc`,
    defaultMessage: 'Centered grids: use fixed columns and re-flow the layout when all columns (plus a defined margin) no longer fit on the screen.',
  },
  interactiveTitle: {
    id: `${scope}.Grid.interactive.title`,
    defaultMessage: 'Interactive',
  },
  interactiveDesc: {
    id: `${scope}.Grid.interactive.desc`,
    defaultMessage: 'Below is an interactive demo that lets you explore the visual results of the different settings:',
  },
  responsiveTitle: {
    id: `${scope}.Responsive.title`,
    defaultMessage: 'Responsive',
  },
  MediaQueriesTitle: {
    id: `${scope}.Responsive.mediaQueries.title`,
    defaultMessage: 'Media Queries',
  },
  MediaQueriesDesc: {
    id: `${scope}.Responsive.mediaQueries.desc`,
    defaultMessage: 'CSS media queries is the idiomatic approach to make your UI responsive.. We provide some CSS-in-JS helpers to do so. In the following demo, we change the background color (red, blue & green) based on the screen width.',
  },
  WithWidthTitle: {
    id: `${scope}.Responsive.withWidth.title`,
    defaultMessage: 'With Width',
  },
  WithWidthDesc: {
    id: `${scope}.Responsive.withWidth.desc`,
    defaultMessage: 'Sometimes, using CSS isn\'t enough. You might want to change the React rendering tree based on the breakpoint value, in JavaScript. We provide a withWidth() higher-order component for this use case. In the following demo, we change the rendered DOM element (em, u, del & span) based on the screen width.',
  },
  HiddenTitle: {
    id: `${scope}.Responsive.hidden.title`,
    defaultMessage: 'Hidden',
  },
  HiddenDesc: {
    id: `${scope}.Responsive.hidden.desc`,
    defaultMessage: 'Hidden works with a range of breakpoints e.g. xsUp or mdDown, or one or more breakpoints e.g. only="sm" or only={["md", "xl"]}. Ranges and individual breakpoints can be used simultaneously to achieve very customized behavior. The ranges are inclusive of the specified breakpoints.',
  },
  IntegrationGridTitle: {
    id: `${scope}.Responsive.integrationGrid.title`,
    defaultMessage: 'Integration With Grid',
  },
  IntegrationGridDesc: {
    id: `${scope}.Responsive.integrationGrid.desc`,
    defaultMessage: 'It is quite common to alter Grid at different responsive breakpoints, and in many cases, you want to hide some of those elements.',
  },
});
