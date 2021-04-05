/*
 * Maps Messages
 *
 * This contains all the text for the Maps page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.Maps';

export default defineMessages({
  markerTitle: {
    id: `${scope}.Marker.title`,
    defaultMessage: 'Map Marker',
  },
  markerDefaultTitle: {
    id: `${scope}.Marker.default.title`,
    defaultMessage: 'Map With A Marker',
  },
  markerDefaultDesc: {
    id: `${scope}.Marker.default.desc`,
    defaultMessage: 'A sample for basic mark a coodinate in map',
  },
  markerPopoverTitle: {
    id: `${scope}.Marker.popover.title`,
    defaultMessage: 'Marker With Popover/Info Window',
  },
  markerPopoverDesc: {
    id: `${scope}.Marker.popover.desc`,
    defaultMessage: 'Click marker to show detail place',
  },
  directionTitle: {
    id: `${scope}.Direction.title`,
    defaultMessage: 'Click marker to show detail place',
  },
  directionDefaultTitle: {
    id: `${scope}.Direction.default.title`,
    defaultMessage: 'Map With Direction',
  },
  directionDefaultDesc: {
    id: `${scope}.Direction.default.desc`,
    defaultMessage: 'Rendering map with default configuration',
  },
  searchTitle: {
    id: `${scope}.Search.title`,
    defaultMessage: 'Map Searchbox',
  },
  searchLoactionTitle: {
    id: `${scope}.Search.location.title`,
    defaultMessage: 'Search Location',
  },
  searchLoactionDesc: {
    id: `${scope}.Search.location.desc`,
    defaultMessage: 'Map with search input to find any location',
  },
  trafficTitle: {
    id: `${scope}.Traffic.title`,
    defaultMessage: 'Map Traffic',
  },
  trafficIndicatorTitle: {
    id: `${scope}.Traffic.indicator.title`,
    defaultMessage: 'Traffic Indicator',
  },
  trafficIndicatorDesc: {
    id: `${scope}.Traffic.indicator.desc`,
    defaultMessage: 'Get information of transportation traffic arround the world',
  },
  streetTitle: {
    id: `${scope}.Street.title`,
    defaultMessage: 'Street View',
  },
  streetViewTitle: {
    id: `${scope}.Street.view.title`,
    defaultMessage: 'Street View',
  },
  streetViewDesc: {
    id: `${scope}.Street.view.desc`,
    defaultMessage: 'View location in 3d perspective',
  }
});
