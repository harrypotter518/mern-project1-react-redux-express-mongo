/*
 * UI Messages
 *
 * This contains all the text for the UI collection page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.UI';

export default defineMessages({
  cardPaperTitle: {
    id: `${scope}.CardPaper.title`,
    defaultMessage: 'Card Papper',
  },
  paperTitle: {
    id: `${scope}.CardPaper.paper.title`,
    defaultMessage: 'Papper',
  },
  paperDesc: {
    id: `${scope}.CardPaper.paper.desc`,
    defaultMessage: 'In material design, the physical properties of paper are translated to the screen.',
  },
  standardCardsTitle: {
    id: `${scope}.CardPaper.standard.title`,
    defaultMessage: 'Standard Cards',
  },
  standardCardsDesc: {
    id: `${scope}.CardPaper.standard.desc`,
    defaultMessage: 'A card is a sheet of material that serves as an entry point to more detailed information.',
  },
  controlCardsTitle: {
    id: `${scope}.CardPaper.control.title`,
    defaultMessage: 'Control Cards',
  },
  controlCardsDesc: {
    id: `${scope}.CardPaper.control.desc`,
    defaultMessage: 'Supplemental actions within the card are explicitly called out using icons, text, and UI controls.',
  },
  socialCardsTitle: {
    id: `${scope}.CardPaper.social.title`,
    defaultMessage: 'Social Cards',
  },
  socialCardsDesc: {
    id: `${scope}.CardPaper.social.desc`,
    defaultMessage: 'A Customized material-ui card that contain profile elements.',
  },
  ecommerceCardsTitle: {
    id: `${scope}.CardPaper.ecommerce.title`,
    defaultMessage: 'Ecommerce Cards',
  },
  ecommerceCardsDesc: {
    id: `${scope}.CardPaper.ecommerce.desc`,
    defaultMessage: 'A Customized material-ui card that contain product information.',
  },
  accordionTitle: {
    id: `${scope}.Accordion.title`,
    defaultMessage: 'Accordion',
  },
  accordionDefaultTitle: {
    id: `${scope}.Accordion.default.title`,
    defaultMessage: 'Accordion',
  },
  accordionDefaultDesc: {
    id: `${scope}.Accordion.default.desc`,
    defaultMessage: 'Accordion is MUI Expansion Panels contain creation flows and allow lightweight editing of an element.',
  },
  accordionSecondaryTitle: {
    id: `${scope}.Accordion.secondary.title`,
    defaultMessage: 'Secondary Heading And Columns',
  },
  accordionSecondaryDesc: {
    id: `${scope}.Accordion.secondary.desc`,
    defaultMessage: 'Multiple columns can be used to structure the content, and a helper text may be added to the panel to assist the user.',
  },
  accordionControlledTitle: {
    id: `${scope}.Accordion.controlled.title`,
    defaultMessage: 'Controlled Accordion',
  },
  accordionControlledDesc: {
    id: `${scope}.Accordion.controlled.desc`,
    defaultMessage: 'Extend the default panel behavior to create an accordion with the ExpansionPanel component.',
  },
  tabsTitle: {
    id: `${scope}.Tabs.title`,
    defaultMessage: 'Tabs',
  },
  tabsSimpleTitle: {
    id: `${scope}.Tabs.simple.title`,
    defaultMessage: 'Simple Tabs',
  },
  tabsSimpleDesc: {
    id: `${scope}.Tabs.simple.desc`,
    defaultMessage: 'A simple example with no frills.',
  },
  tabsIconTitle: {
    id: `${scope}.Tabs.icon.title`,
    defaultMessage: 'Icon Tabs',
  },
  tabsIconDesc: {
    id: `${scope}.Tabs.icon.desc`,
    defaultMessage: 'Tab labels may be either all icons or all text.',
  },
  tabsScrollTitle: {
    id: `${scope}.Tabs.scroll.title`,
    defaultMessage: 'Scrollable Tabs',
  },
  tabsScrollDesc: {
    id: `${scope}.Tabs.scroll.desc`,
    defaultMessage: 'Left and right scroll buttons will automatically be presented on desktop and hidden on mobile. (based on viewport width)',
  },
  tabsScrollIconTitle: {
    id: `${scope}.Tabs.scrollIcon.title`,
    defaultMessage: 'Scrollable Icon Tabs',
  },
  tabsScrollIconDesc: {
    id: `${scope}.Tabs.scrollIcon.desc`,
    defaultMessage: ' ',
  },
  tabsDisabledTitle: {
    id: `${scope}.Tabs.disabled.title`,
    defaultMessage: 'Disabled Tab',
  },
  tabsDisabledDesc: {
    id: `${scope}.Tabs.disabled.desc`,
    defaultMessage: 'Tab may be disabled by setting disabled property.',
  },
  tabsBottomTitle: {
    id: `${scope}.Tabs.bottom.title`,
    defaultMessage: 'Bottom Navigation',
  },
  tabsBottomDesc: {
    id: `${scope}.Tabs.bottom.desc`,
    defaultMessage: 'Bottom navigation bars make it easy to explore and switch between top-level views in a single tap.',
  },
  MenuTitle: {
    id: `${scope}.Menu.title`,
    defaultMessage: 'Drawer Menu',
  },
  temporaryTitle: {
    id: `${scope}.Menu.temporary.title`,
    defaultMessage: 'Temporary Drawer',
  },
  temporaryDesc: {
    id: `${scope}.Menu.temporary.desc`,
    defaultMessage: 'Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.',
  },
  swipeTitle: {
    id: `${scope}.Menu.swipe.title`,
    defaultMessage: 'Swipeable Temporary Drawer',
  },
  swipeDesc: {
    id: `${scope}.Menu.swipe.desc`,
    defaultMessage: 'You can make the drawer swipeable with the SwipeableDrawer component.',
  },
  basicMenuTitle: {
    id: `${scope}.Menu.basic.title`,
    defaultMessage: 'Basic Menu',
  },
  basicMenuDesc: {
    id: `${scope}.Menu.basic.desc`,
    defaultMessage: 'Basic menus open over the anchor element by default (this option can be changed via props). When close to a screen edge, simple menus vertically realign to make all menu items are completely visible.',
  },
  selectedMenuTitle: {
    id: `${scope}.Menu.selected.title`,
    defaultMessage: 'Selected Menus',
  },
  selectedMenuDesc: {
    id: `${scope}.Menu.selected.desc`,
    defaultMessage: 'If used for item selection, when opened, simple menus attempt to vertically align the currently selected menu item with the anchor element.',
  },
  styledMenuTitle: {
    id: `${scope}.Menu.styled.title`,
    defaultMessage: 'Styled Menu',
  },
  styledMenuDesc: {
    id: `${scope}.Menu.styled.desc`,
    defaultMessage: 'The MenuItem is a wrapper around ListItem with some additional styles.',
  },
  transitionMenuTitle: {
    id: `${scope}.Menu.transition.title`,
    defaultMessage: 'Transition',
  },
  transitionMenuDesc: {
    id: `${scope}.Menu.transition.desc`,
    defaultMessage: 'Use a different transition altogether.',
  },
  breadcrumbTitle: {
    id: `${scope}.Breadcrumb.title`,
    defaultMessage: 'Breadcrumbs',
  },
  breadcrumbClassicTitle: {
    id: `${scope}.Breadcrumb.classic.title`,
    defaultMessage: 'Classic Breadcrumb',
  },
  breadcrumbClassicDesc: {
    id: `${scope}.Breadcrumb.classic.desc`,
    defaultMessage: 'Breadcrumb is one of navigation component. With this User can jump to parent, children or grand-children page as long in a single inheritance.This example is designed with classic style separator',
  },
  breadcrumbPaperTitle: {
    id: `${scope}.Breadcrumb.paper.title`,
    defaultMessage: 'Paper Breadcrumb',
  },
  breadcrumbPaperDesc: {
    id: `${scope}.Breadcrumb.paper.desc`,
    defaultMessage: ' ',
  },
  steppersTitle: {
    id: `${scope}.Steppers.title`,
    defaultMessage: 'Steppers',
  },
  stepHorizontalTitle: {
    id: `${scope}.Steppers.horizontal.title`,
    defaultMessage: 'Horizontal Linear',
  },
  stepHorizontalDesc: {
    id: `${scope}.Steppers.horizontal.desc`,
    defaultMessage: 'The Stepper can be controlled by passing the current step index (zero-based) as the activeStep property.',
  },
  stepHorizontalNonTitle: {
    id: `${scope}.Steppers.horizontalNon.title`,
    defaultMessage: 'Horizontal Non-Linear',
  },
  stepHorizontalNonDesc: {
    id: `${scope}.Steppers.horizontalNon.desc`,
    defaultMessage: 'Non-linear steppers allow users to enter a multi-step flow at any point.',
  },
  stepErrorTitle: {
    id: `${scope}.Steppers.error.title`,
    defaultMessage: 'Horizontal Non Linear - Error Step',
  },
  stepErrorDesc: {
    id: `${scope}.Steppers.error.desc`,
    defaultMessage: ' ',
  },
  stepVerticalTitle: {
    id: `${scope}.Steppers.vertical.title`,
    defaultMessage: 'Vertical Stepper',
  },
  stepVerticalDesc: {
    id: `${scope}.Steppers.vertical.desc`,
    defaultMessage: ' ',
  },
  stepMobileTitle: {
    id: `${scope}.Steppers.mobile.title`,
    defaultMessage: 'Mobile Stepper',
  },
  stepMobileDesc: {
    id: `${scope}.Steppers.mobile.desc`,
    defaultMessage: 'Use a progress bar or dots when there are many steps, or if there are steps that need to be inserted during the process (based on responses to earlier steps).',
  },
  stepCarouselTitle: {
    id: `${scope}.Steppers.carousel.title`,
    defaultMessage: 'Carousel Stepper',
  },
  stepCarouselDesc: {
    id: `${scope}.Steppers.carousel.desc`,
    defaultMessage: 'This is essentially a back/next button positioned correctly. You must implement the textual description yourself, however, an example is provided below for reference.',
  },
  dialogTitle: {
    id: `${scope}.Dialog.title`,
    defaultMessage: 'Dialog Modal',
  },
  dialogStandardTitle: {
    id: `${scope}.Dialog.standard.title`,
    defaultMessage: 'Modals',
  },
  dialogStandardDesc: {
    id: `${scope}.Dialog.standard.desc`,
    defaultMessage: 'The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.',
  },
  dialogAlertsTitle: {
    id: `${scope}.Dialog.alert.title`,
    defaultMessage: 'Alerts',
  },
  dialogAlertsDesc: {
    id: `${scope}.Dialog.alert.desc`,
    defaultMessage: 'Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.',
  },
  dialogSelectionTitle: {
    id: `${scope}.Dialog.selection.title`,
    defaultMessage: 'Selection Dialog',
  },
  dialogSelectionDesc: {
    id: `${scope}.Dialog.selection.desc`,
    defaultMessage: 'Choosing an option immediately commits the option and closes the menu.',
  },
  dialogRadioTitle: {
    id: `${scope}.Dialog.radio.title`,
    defaultMessage: 'Selection Radio Dialog',
  },
  dialogRadioDesc: {
    id: `${scope}.Dialog.radio.desc`,
    defaultMessage: 'In this example, users can listen to multiple ringtones but only make a final selection upon touching “OK.”',
  },
  dialogFullscreenTitle: {
    id: `${scope}.Dialog.fullscreen.title`,
    defaultMessage: 'Full Screen (Responsive)',
  },
  dialogFullscreenDesc: {
    id: `${scope}.Dialog.fullscreen.desc`,
    defaultMessage: 'You may make a Dialog responsively full screen the dialog using withMobileDialog. By default, withMobileDialog()(Dialog) responsively full screens at or below the sm screen size.',
  },
  dialogScrollTitle: {
    id: `${scope}.Dialog.scroll.title`,
    defaultMessage: 'Scrolling Dialog',
  },
  dialogScrollDesc: {
    id: `${scope}.Dialog.scroll.desc`,
    defaultMessage: 'When dialogs become too long for the user’s viewport or device, they scroll.',
  },
  tooltipTitle: {
    id: `${scope}.Tooltip.title`,
    defaultMessage: 'Popover Tooltip',
  },
  tooltipSimpleTitle: {
    id: `${scope}.Tooltip.simple.title`,
    defaultMessage: 'Simple Tooltips',
  },
  tooltipSimpleDesc: {
    id: `${scope}.Tooltip.simple.desc`,
    defaultMessage: 'The tooltips are text labels that appear when the user hovers over, focuses on, or touches an element.',
  },
  tooltipPositionedTitle: {
    id: `${scope}.Tooltip.positioned.title`,
    defaultMessage: 'Positioned Tooltips',
  },
  tooltipPositionedDesc: {
    id: `${scope}.Tooltip.positioned.desc`,
    defaultMessage: 'The Tooltip has 12 placements choice. They don’t have directional arrows; instead, they rely on motion emanating from the source to convey direction.',
  },
  tooltipTriggerTitle: {
    id: `${scope}.Tooltip.trigger.title`,
    defaultMessage: 'Triggers Tooltips',
  },
  tooltipTriggerDesc: {
    id: `${scope}.Tooltip.trigger.desc`,
    defaultMessage: 'You can define the types of events that cause a tooltip to show.',
  },
  tooltipDelayTitle: {
    id: `${scope}.Tooltip.delay.title`,
    defaultMessage: 'Delay Tooltip',
  },
  tooltipDelayDesc: {
    id: `${scope}.Tooltip.delay.desc`,
    defaultMessage: 'A delay in showing or hiding the tooltip can be added also.',
  },
  tooltipPopoverTitle: {
    id: `${scope}.Tooltip.popover.title`,
    defaultMessage: 'Simple Popover',
  },
  tooltipPopoverDesc: {
    id: `${scope}.Tooltip.popover.desc`,
    defaultMessage: 'A Popover can be used to display some content on top of another.',
  },
  tooltipPlayTitle: {
    id: `${scope}.Tooltip.play.title`,
    defaultMessage: 'Popover Playground',
  },
  tooltipPlayDesc: {
    id: `${scope}.Tooltip.play.desc`,
    defaultMessage: 'Use the radio buttons to adjust the anchorOrigin and transformOrigin positions. You can also set the anchorReference to anchorPosition or anchorEl.',
  },
  badgesTitle: {
    id: `${scope}.Badges.title`,
    defaultMessage: 'Badges',
  },
  badgesCommonTitle: {
    id: `${scope}.Badges.common.title`,
    defaultMessage: 'Common Badges',
  },
  badgesCommonDesc: {
    id: `${scope}.Badges.common.desc`,
    defaultMessage: 'Badge generates a small badge to the top-right of its child(ren).',
  },
  badgesVariantTitle: {
    id: `${scope}.Badges.variant.title`,
    defaultMessage: 'Variant Badges',
  },
  badgesVariantDesc: {
    id: `${scope}.Badges.variant.desc`,
    defaultMessage: 'Examples of badges with icon and in tab, using primary and secondary colors. The badge is applied to its children.',
  },
  messagesTitle: {
    id: `${scope}.Messages.title`,
    defaultMessage: 'Snackbar',
  },
  messagesNotifTitle: {
    id: `${scope}.Messages.notif.title`,
    defaultMessage: 'Snackbars/Notification',
  },
  messagesNotifDesc: {
    id: `${scope}.Messages.notif.desc`,
    defaultMessage: 'Snackbars provide brief feedback about an operation through a message - typically at the bottom of the screen.',
  },
  messagesStyledTitle: {
    id: `${scope}.Messages.styled.title`,
    defaultMessage: 'Styled Notification',
  },
  messagesStyledDesc: {
    id: `${scope}.Messages.styled.desc`,
    defaultMessage: 'Some snackbars with varying message style. And some snackbars with varying message length.',
  },
  messagesMobileTitle: {
    id: `${scope}.Messages.mobile.title`,
    defaultMessage: 'Mobile Notification',
  },
  messagesMobileDesc: {
    id: `${scope}.Messages.mobile.desc`,
    defaultMessage: 'Move the floating action button vertically to accommodate the snackbar height.',
  },
  messagesTransitionTitle: {
    id: `${scope}.Messages.transition.title`,
    defaultMessage: 'Transition',
  },
  messagesTransitionDesc: {
    id: `${scope}.Messages.transition.desc`,
    defaultMessage: 'Per Google\'s guidelines, when a second snackbar is triggered while the first is displayed, the first should start the contraction motion downwards before the second one animates upwards.',
  },
  listTitle: {
    id: `${scope}.List.title`,
    defaultMessage: 'List',
  },
  listBasicTitle: {
    id: `${scope}.List.basic.title`,
    defaultMessage: 'List Basic',
  },
  listBasicDesc: {
    id: `${scope}.List.basic.desc`,
    defaultMessage: 'The divider renders as a <hr> by default. You can save rendering this DOM element by using the divider property on the ListItem component.',
  },
  listMenuTitle: {
    id: `${scope}.List.menu.title`,
    defaultMessage: 'List Menu',
  },
  listMenuDesc: {
    id: `${scope}.List.menu.desc`,
    defaultMessage: 'Lists are made up of a continuous column of rows. Each row contains a tile. Primary actions fill the tile, and supplemental actions are represented by icons and text.',
  },
  listPinnedTitle: {
    id: `${scope}.List.pinned.title`,
    defaultMessage: 'Pinned Subheader List',
  },
  listPinnedDesc: {
    id: `${scope}.List.pinned.desc`,
    defaultMessage: 'Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader.',
  },
  listControlTitle: {
    id: `${scope}.List.control.title`,
    defaultMessage: 'List Controls',
  },
  listControlDesc: {
    id: `${scope}.List.control.desc`,
    defaultMessage: 'The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.',
  },
  listInteractiveTitle: {
    id: `${scope}.List.interactive.title`,
    defaultMessage: 'Interactive',
  },
  listInteractiveDesc: {
    id: `${scope}.List.interactive.desc`,
    defaultMessage: 'Below is an interactive demo that lets you explore the visual results of the different settings:',
  },
  avatarTitle: {
    id: `${scope}.Avatars.title`,
    defaultMessage: 'Avatars',
  },
  avatarStandardTitle: {
    id: `${scope}.Avatars.standard.title`,
    defaultMessage: 'Avatars',
  },
  avatarStandardDesc: {
    id: `${scope}.Avatars.standard.desc`,
    defaultMessage: 'Avatars are found throughout material design with uses in everything from tables to dialog menus.',
  },
  avatarImplementedTitle: {
    id: `${scope}.Avatars.implemented.title`,
    defaultMessage: 'Implemented Avatars',
  },
  avatarImplementedDesc: {
    id: `${scope}.Avatars.implemented.desc`,
    defaultMessage: 'Some examples of components, using an image Avatar, SVG Icon Avatar, Letter and (string) Avatar.',
  },
  imageGridTitle: {
    id: `${scope}.Image.title`,
    defaultMessage: 'Image Grid',
  },
  imageGridOnlyTitle: {
    id: `${scope}.Image.only.title`,
    defaultMessage: 'Image-Only Grid List',
  },
  imageGridOnlyDesc: {
    id: `${scope}.Image.only.desc`,
    defaultMessage: 'A simple example of a scrollable image GridList',
  },
  imageGridTitlebarsTitle: {
    id: `${scope}.Image.titleBars.title`,
    defaultMessage: 'Grid List With Titlebars',
  },
  imageGridTitlebarsDesc: {
    id: `${scope}.Image.titleBars.desc`,
    defaultMessage: 'This example demonstrates the use of the GridListTileBar to add an overlay to each GridListTile.',
  },
  imageGridAdvancedTitle: {
    id: `${scope}.Image.advanced.title`,
    defaultMessage: 'Advanced Grid List',
  },
  imageGridAdvancedDesc: {
    id: `${scope}.Image.advanced.desc`,
    defaultMessage: 'This example demonstrates featured tiles, using the rows and cols props to adjust the size of the tile, and the padding prop to adjust the spacing.',
  },
  imageGridSingleTitle: {
    id: `${scope}.Image.single.title`,
    defaultMessage: 'Single Line Grid List',
  },
  imageGridSingleDesc: {
    id: `${scope}.Image.single.desc`,
    defaultMessage: 'This example demonstrates a horizontal scrollable single-line grid list of images.',
  },
  sliderTitle: {
    id: `${scope}.Slider.title`,
    defaultMessage: 'Slider Carousel',
  },
  sliderSimpleTitle: {
    id: `${scope}.Slider.simple.title`,
    defaultMessage: 'Simple Slider',
  },
  sliderSimpleDesc: {
    id: `${scope}.Slider.simple.desc`,
    defaultMessage: 'React slick is a carousel component built with React. It is a react port of slick carousel',
  },
  sliderCarouselTitle: {
    id: `${scope}.Slider.carousel.title`,
    defaultMessage: 'Carousel',
  },
  sliderAutoplayTitle: {
    id: `${scope}.Slider.autoplay.title`,
    defaultMessage: 'Autoplay Carousel',
  },
  sliderThumbTitle: {
    id: `${scope}.Slider.thumb.title`,
    defaultMessage: 'Carousel With Thumbnail Pagination',
  },
  sliderVerticalTitle: {
    id: `${scope}.Slider.vertical.title`,
    defaultMessage: 'Vertical Carousel',
  },
  sliderCustomTitle: {
    id: `${scope}.Slider.custom.title`,
    defaultMessage: 'Custom Navigation Carousel',
  },
  typoTitle: {
    id: `${scope}.Typo.title`,
    defaultMessage: 'Typography',
  },
  typoGeneralTitle: {
    id: `${scope}.Typo.general.title`,
    defaultMessage: 'Genereal Typo',
  },
  typoGeneralDesc: {
    id: `${scope}.Typo.general.desc`,
    defaultMessage: 'The Lato font will not be automatically loaded by Material-UI. The developer is responsible for loading all fonts used in their application. Lato Font has a few easy ways to get started.',
  },
  typoHeadingTitle: {
    id: `${scope}.Typo.heading.title`,
    defaultMessage: 'Heading',
  },
  typoListTitle: {
    id: `${scope}.Typo.list.title`,
    defaultMessage: 'List',
  },
  typoAlignmentTitle: {
    id: `${scope}.Typo.alignment.title`,
    defaultMessage: 'Text Alignment',
  },
  typoQuotesTitle: {
    id: `${scope}.Typo.quotes.title`,
    defaultMessage: 'Quotes',
  },
  typoColouredTitle: {
    id: `${scope}.Typo.coloured.title`,
    defaultMessage: 'Coloured Text',
  },
  iconsTitle: {
    id: `${scope}.Icons.title`,
    defaultMessage: 'Icons',
  },
  iconsMaterialTitle: {
    id: `${scope}.Icons.material.title`,
    defaultMessage: 'Material Icons',
  },
  iconsMaterialDesc: {
    id: `${scope}.Icons.material.desc`,
    defaultMessage: 'Material icons are delightful, beautifully crafted symbols for common actions and items. System icons are designed to be simple, modern, friendly, and sometimes quirky. Each icon is reduced to its minimal form, expressing essential characteristics.',
  },
  ioniconsTitle: {
    id: `${scope}.IonIcons.title`,
    defaultMessage: 'Ionicons',
  },
  ionconsDefaultTitle: {
    id: `${scope}.IonIcons.default.title`,
    defaultMessage: 'Ion Icons',
  },
  ioniconsDefaultDesc: {
    id: `${scope}.IonIcons.default.desc`,
    defaultMessage: 'Ion icons a beautifully crafted open source icons. Premium designed icons for use in web.',
  },
  progressTitle: {
    id: `${scope}.Progress.title`,
    defaultMessage: 'Progress',
  },
  progressCircularTitle: {
    id: `${scope}.Progress.circular.title`,
    defaultMessage: 'Circular Static',
  },
  progressCircularDesc: {
    id: `${scope}.Progress.circular.desc`,
    defaultMessage: 'Progress and activity indicators are visual indications of an app loading content.',
  },
  progressIndeterminateTitle: {
    id: `${scope}.Progress.indeterminate.title`,
    defaultMessage: 'Circular Indeterminate',
  },
  progressIndeterminateDesc: {
    id: `${scope}.Progress.indeterminate.desc`,
    defaultMessage: 'Indicators visualize an unspecified wait time.',
  },
  progressDeterminateTitle: {
    id: `${scope}.Progress.determinate.title`,
    defaultMessage: 'Circular Determinate',
  },
  progressDeterminateDesc: {
    id: `${scope}.Progress.determinate.desc`,
    defaultMessage: 'Indicators display how long an operation will take.',
  },
  progressIntegrationTitle: {
    id: `${scope}.Progress.integration.title`,
    defaultMessage: 'Circular Integration',
  },
  progressIntegrationDesc: {
    id: `${scope}.Progress.integration.desc`,
    defaultMessage: 'Visual indicator should be used to represent each type of operation.',
  },
  progressLinearTitle: {
    id: `${scope}.Progress.linear.title`,
    defaultMessage: 'Linear Static',
  },
  progressLinearDeterminateTitle: {
    id: `${scope}.Progress.linearDeterminate.title`,
    defaultMessage: 'Linear Determinate',
  },
  progressLinearIndeterminateTitle: {
    id: `${scope}.Progress.linearIndeterminate.title`,
    defaultMessage: 'Linear Indeterminate',
  },
  progressBufferTitle: {
    id: `${scope}.Progress.buffer.title`,
    defaultMessage: 'Linear Buffer',
  },
  progressQueryTitle: {
    id: `${scope}.Progress.query.title`,
    defaultMessage: 'Linear Query',
  },
  tagsTitle: {
    id: `${scope}.Tags.title`,
    defaultMessage: 'Tags',
  },
  tagsBasicTitle: {
    id: `${scope}.Tags.basic.title`,
    defaultMessage: 'Basic Tags',
  },
  tagsBasicDesc: {
    id: `${scope}.Tags.basic.desc`,
    defaultMessage: 'Tags represent complex entities in small blocks, such as a contact.',
  },
  tagsArrayTitle: {
    id: `${scope}.Tags.array.title`,
    defaultMessage: 'Array Tags',
  },
  tagsArrayDesc: {
    id: `${scope}.Tags.array.desc`,
    defaultMessage: 'An example of rendering multiple Tags from an array of values.',
  }
});
