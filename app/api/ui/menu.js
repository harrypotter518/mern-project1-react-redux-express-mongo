module.exports = [
  {
    key: 'home',
    name: 'Home',
    icon: 'home',
    child: [
      {
        key: 'landing_page',
        name: 'Landing Page',
        title: true,
      },
      {
        key: 'corporate',
        name: 'Corporate',
        link: '/',
        icon: 'business',
        badge: 'Hot'
      },
      {
        key: 'dashboard',
        name: 'Dashboard',
        title: true,
      },
      {
        key: 'personal',
        name: 'Analytic',
        icon: 'settings_brightness',
        link: '/app'
      },
      {
        key: 'crm',
        name: 'Marketing',
        icon: 'settings_system_daydream',
        link: '/app/marketing-dashboard'
      },
      {
        key: 'crypto',
        name: 'Cryptocurrency',
        icon: 'local_atm',
        link: '/app/crypto-dashboard'
      },
      {
        key: 'widgets',
        name: 'Widgets',
        title: true,
      },
      {
        key: 'infographics_widget',
        icon: 'timelapse',
        name: 'Infographics',
        link: '/app/widgets/infographics'
      },
      {
        key: 'status_widget',
        icon: 'nature_people',
        name: 'Status',
        link: '/app/widgets/status'
      },
      {
        key: 'analytics_widget',
        icon: 'insert_chart',
        name: 'Analytics',
        link: '/app/widgets/analytics'
      },
      {
        key: 'mini_apps_widget',
        icon: 'web',
        name: 'Mini Apps',
        link: '/app/widgets/mini-apps'
      },
      {
        key: 'gallery_widget',
        icon: 'satellite',
        name: 'Gallery',
        link: '/app/widgets/gallery-carousel'
      },
      {
        key: 'material_font_icon',
        name: 'Fonts & Icons',
        title: true,
      },
      {
        key: 'typography',
        name: 'Typography',
        icon: 'font_download',
        link: '/app/ui/typography'
      },
      {
        key: 'icons',
        name: 'Material Icons',
        icon: 'bookmark',
        link: '/app/ui/icons'
      },
      {
        key: 'layouts',
        name: 'Layouts',
        title: true,
      },
      {
        key: 'grid',
        name: 'Grid',
        icon: 'view_column',
        link: '/app/layouts/grid'
      },
      {
        key: 'application_layout',
        name: 'App Layout',
        icon: 'web',
        link: '/app/layouts/app-layout'
      },
      {
        key: 'responsive',
        name: 'Responsive',
        icon: 'mobile_friendly',
        link: '/app/layouts/responsive'
      }
    ]
  },
  {
    key: 'apps',
    name: 'Applications',
    icon: 'widgets',
    child: [
      {
        key: 'static_apps',
        name: 'Static Apps',
        title: true,
      },
      {
        key: 'todo',
        name: 'Todo',
        icon: 'check_circle',
        link: '/app/pages/todo',
      },
      {
        key: 'contact',
        name: 'Contact',
        icon: 'perm_contact_calendar',
        link: '/app/pages/contact'
      },
      {
        key: 'email',
        name: 'Email',
        icon: 'mail',
        link: '/app/pages/email',
        badge: '4'
      },
      {
        key: 'firebase_apps',
        name: 'Firebase Apps',
        title: true,
      },
      {
        key: 'todo_fullstack',
        name: 'Todo Firebase',
        icon: 'check_circle',
        link: '/app/pages/todo-firebase',
      },
      {
        key: 'contact_fullstack',
        name: 'Contact Firebase',
        icon: 'perm_contact_calendar',
        link: '/app/pages/contact-firebase'
      },
      {
        key: 'email_fullstack',
        name: 'Email Firebase',
        icon: 'mail',
        link: '/app/pages/email-firebase',
      },
      {
        key: 'maps',
        name: 'Maps',
        title: true,
      },
      {
        key: 'map_marker',
        name: 'Map Marker',
        icon: 'place',
        link: '/app/maps/map-marker'
      },
      {
        key: 'map_direction',
        name: 'Map Direction',
        icon: 'directions',
        link: '/app/maps/map-direction'
      },
      {
        key: 'map_searchbox',
        name: 'Map with Searchbox',
        icon: 'search',
        link: '/app/maps/map-searchbox'
      },
      {
        key: 'map_traffic',
        name: 'Traffic Indicator',
        icon: 'traffic',
        link: '/app/maps/map-traffic'
      },
      {
        key: 'street_view',
        name: 'Street View',
        icon: 'map',
        link: '/app/maps/street-view'
      },
    ]
  },
  {
    key: 'pages',
    name: 'Pages',
    icon: 'important_devices',
    child: [
      {
        key: 'static_auth',
        name: 'Static Auth',
        title: true,
      },
      {
        key: 'login',
        name: 'Login',
        icon: 'account_box',
        link: '/login'
      },
      {
        key: 'register',
        name: 'Register',
        icon: 'border_color',
        link: '/register'
      },
      {
        key: 'reset',
        name: 'Reset Password',
        icon: 'undo',
        link: '/reset-password'
      },
      {
        key: 'lock',
        name: 'Lock Screen',
        icon: 'lock',
        link: '/lock-screen'
      },
      {
        key: 'firebase_auth',
        name: 'Firebase Auth',
        title: true,
      },
      {
        key: 'login_firebase',
        name: 'Login Firebase',
        icon: 'account_box',
        link: '/login-firebase'
      },
      {
        key: 'register_firebase',
        name: 'Register Firebase',
        icon: 'border_color',
        link: '/register-firebase'
      },
      {
        key: 'reset_firebase',
        name: 'Reset Password Firebase',
        icon: 'undo',
        link: '/reset-firebase'
      },
      {
        key: 'auth_page',
        name: 'Authenticated Page',
        icon: 'lock_outline',
        link: '/app/pages/authenticated-page'
      },
      {
        key: 'social_page',
        name: 'Social Page',
        title: true,
      },
      {
        key: 'timeline',
        name: 'Timeline',
        icon: 'local_movies',
        link: '/app/pages/timeline'
      },
      {
        key: 'chat',
        name: 'Chat',
        icon: 'message',
        link: '/app/pages/chat'
      },
      {
        key: 'user_profile',
        name: 'User Profile',
        icon: 'contacts',
        link: '/app/pages/user-profile'
      },
      {
        key: 'ecommerce',
        name: 'E-commerce',
        title: true,
      },
      {
        key: 'itemlist',
        icon: 'shopping_cart',
        name: 'Product Catalogues',
        link: '/app/pages/ecommerce'
      },
      {
        key: 'item_detail',
        name: 'Product Detail',
        icon: 'library_books',
        link: '/app/pages/product-detail'
      },
      {
        key: 'checkout',
        name: 'Checkout Page',
        icon: 'shopping_basket',
        link: '/app/pages/checkout'
      },
      {
        key: 'dynamic_invoice',
        icon: 'description',
        name: 'Dynamic Invoice',
        link: '/app/pages/invoice'
      },
      {
        key: 'errors',
        name: 'Errors',
        title: true,
      },
      {
        key: 'not_found_page',
        name: 'Not Found Page',
        icon: 'pets',
        link: '/app/pages/not-found'
      },
      {
        key: 'error_page',
        name: 'Error Page',
        icon: 'flash_on',
        link: '/app/pages/error'
      },
      {
        key: 'other_page',
        name: 'Other Page',
        title: true,
      },
      {
        key: 'blank',
        name: 'Blank Page',
        icon: 'video_label',
        link: '/app/pages/blank-page'
      },
      {
        key: 'gallery',
        name: 'Photo Gallery',
        icon: 'photo_size_select_actual',
        link: '/app/pages/photo-gallery'
      },
      {
        key: 'maintenance',
        name: 'Maintenance',
        icon: 'settings',
        link: '/maintenance'
      },
      {
        key: 'coming_soon',
        name: 'Coming Soon',
        icon: 'polymer',
        link: '/coming-soon'
      },
    ]
  },
  {
    key: 'tables',
    name: 'Tables Charts',
    icon: 'table_chart',
    child: [
      {
        key: 'common_table',
        name: 'Common Table',
        title: true,
      },
      {
        key: 'basic_table',
        name: 'Basic',
        icon: 'grid_on',
        link: '/app/tables/basic-table'
      },
      {
        key: 'data_table',
        name: 'Data Tables',
        icon: 'table_chart',
        link: '/app/tables/data-table'
      },
      {
        key: 'table_playground',
        name: 'Table Playgound',
        icon: 'view_module',
        link: '/app/tables/table-playground'
      },
      {
        key: 'redux_table',
        name: 'Redux Table',
        icon: 'view_module',
        title: true,
      },
      {
        key: 'tree_table',
        name: 'Tree Table',
        icon: 'subdirectory_arrow_right',
        link: '/app/tables/tree-table'
      },
      {
        key: 'editable_cell',
        name: 'Table Edit',
        icon: 'edit',
        link: '/app/tables/editable-cell'
      },
      {
        key: 'svg_charts',
        name: 'SVG Chart',
        title: true,
      },
      {
        key: 'line_charts',
        name: 'Line',
        icon: 'timeline',
        link: '/app/charts/line-charts'
      },
      {
        key: 'bar_charts',
        name: 'Bar',
        icon: 'bar_chart',
        link: '/app/charts/bar-charts'
      },
      {
        key: 'area_charts',
        name: 'Area',
        icon: 'insert_photo',
        link: '/app/charts/area-charts'
      },
      {
        key: 'pie_charts',
        name: 'Pie & Doughnut',
        icon: 'pie_chart',
        link: '/app/charts/pie-charts'
      },
      {
        key: 'radar_charts',
        name: 'Radar',
        icon: 'timelapse',
        link: '/app/charts/radar-charts'
      },
      {
        key: 'scatter_charts',
        name: 'Scatter',
        icon: 'bubble_chart',
        link: '/app/charts/scatter-charts'
      },
      {
        key: 'compossed_charts',
        name: 'Compossed',
        icon: 'insert_chart',
        link: '/app/charts/compossed-chart'
      },
    ]
  },
  {
    key: 'forms',
    name: 'Form Button',
    icon: 'border_color',
    child: [
      {
        key: 'buttons_collection',
        name: 'Button Collection',
        title: true,
      },
      {
        key: 'buttons',
        name: 'Buttons',
        icon: 'add_circle',
        link: '/app/forms/buttons'
      },
      {
        key: 'toggle_button',
        name: 'Toggle Button',
        icon: 'iso',
        link: '/app/forms/toggle-button'
      },
      {
        key: 'dial_button',
        name: 'Dial Button',
        icon: 'add_circle',
        link: '/app/forms/dial-button'
      },
      {
        key: 'text_input',
        name: 'Text Input',
        title: true,
      },
      {
        key: 'textfields',
        name: 'Textfields',
        icon: 'text_fields',
        link: '/app/forms/textfields'
      },
      {
        key: 'autocomplete',
        name: 'Autocomplete & Tag',
        icon: 'list',
        link: '/app/forms/autocomplete'
      },
      {
        key: 'datetimepicker',
        name: 'Date Time Picker',
        icon: 'date_range',
        link: '/app/forms/date-time-picker'
      },
      {
        key: 'reduxform',
        name: 'Redux Form',
        icon: 'ballot',
        link: '/app/forms/reduxform'
      },
      {
        key: 'selection',
        name: 'Selection',
        title: true,
      },
      {
        key: 'checkbox_radio',
        name: 'Checkbox & Radio',
        icon: 'ballot',
        link: '/app/forms/checkbox-radio'
      },
      {
        key: 'switches',
        name: 'Switches',
        icon: 'check_box',
        link: '/app/forms/switches'
      },
      {
        key: 'selectbox',
        name: 'Select',
        icon: 'storage',
        link: '/app/forms/selectbox'
      },
      {
        key: 'advanced_input',
        name: 'Advanced Input',
        title: true,
      },
      {
        key: 'slider',
        name: 'Slider Range',
        icon: 'tune',
        link: '/app/forms/slider-range'
      },
      {
        key: 'upload',
        name: 'Upload',
        icon: 'cloud_upload',
        link: '/app/forms/upload'
      },
      {
        key: 'texteditor',
        name: 'WYSIWYG Editor',
        icon: 'format_color_text',
        link: '/app/forms/wysiwyg-editor'
      },
    ]
  },
  {
    key: 'ui',
    name: 'UI Collection',
    icon: 'extension',
    child: [
      {
        key: 'material_content',
        name: 'Block Container',
        title: true,
      },
      {
        key: 'card_papper',
        name: 'Card & Papper',
        icon: 'view_quilt',
        link: '/app/ui/card-papper'
      },
      {
        key: 'accordion',
        name: 'Accordion',
        icon: 'view_day',
        link: '/app/ui/accordion'
      },
      {
        key: 'material_navigation',
        name: 'Navigation',
        title: true,
      },
      {
        key: 'tab',
        name: 'Tabs Navigation',
        icon: 'tab',
        link: '/app/ui/tabs'
      },
      {
        key: 'drawer_menu',
        name: 'Menu & Drawer',
        icon: 'vertical_split',
        link: '/app/ui/drawer-menu'
      },
      {
        key: 'breadcrumbs',
        name: 'Breadcrumbs',
        icon: 'chevron_right',
        link: '/app/ui/breadcrumbs'
      },
      {
        key: 'steppers',
        name: 'Steppers',
        icon: 'linear_scale',
        link: '/app/ui/steppers'
      },
      {
        key: 'tree_view',
        name: 'Tree View',
        icon: 'subdirectory_arrow_right',
        link: '/app/ui/tree-view'
      },
      {
        key: 'material_popup',
        name: 'Popup',
        title: true,
      },
      {
        key: 'dialog_modal',
        name: 'Dialog & Modal',
        icon: 'library_books',
        link: '/app/ui/dialog-modal'
      },
      {
        key: 'popover_tooltip',
        name: 'Popover & Tooltip',
        icon: 'textsms',
        link: '/app/ui/popover-tooltip'
      },
      {
        key: 'material_notif',
        name: 'Notification',
        title: true,
      },
      {
        key: 'badges',
        name: 'Badges',
        icon: 'info',
        link: '/app/ui/badges'
      },
      {
        key: 'snackbar',
        name: 'Messages',
        icon: 'picture_in_picture',
        link: '/app/ui/snackbar'
      },
      {
        key: 'material_dividers',
        name: 'Dividers',
        title: true,
      },
      {
        key: 'list_divider',
        name: 'List & Divider',
        icon: 'calendar_view_day',
        link: '/app/ui/list'
      },
      {
        key: 'material_image',
        name: 'Images',
        title: true,
      },
      {
        key: 'avatars',
        name: 'Avatars',
        icon: 'account_circle',
        link: '/app/ui/avatars'
      },
      {
        key: 'image_gird',
        name: 'Image Grid Gallery',
        icon: 'dashboard',
        link: '/app/ui/image-grid'
      },
      {
        key: 'slider_carousel',
        name: 'Slider & Carousel',
        icon: 'burst_mode',
        link: '/app/ui/slider-carousel'
      },
      {
        key: 'utilities',
        name: 'Utility',
        title: true,
      },
      {
        key: 'progress',
        name: 'Progress & Spinners',
        icon: 'all_inclusive',
        link: '/app/ui/progress'
      },
      {
        key: 'tags',
        name: 'Tags',
        icon: 'local_offer',
        link: '/app/ui/tags'
      },
    ]
  },
  {
    key: 'menu_levels',
    name: 'Menu Levels',
    multilevel: true,
    icon: 'sort',
    child: [
      {
        key: 'level_1',
        name: 'Level 1',
        link: '/#'
      },
      {
        key: 'level_2',
        keyParent: 'menu_levels',
        name: 'Level 2',
        child: [
          {
            key: 'sub_menu_1',
            name: 'Sub Menu 1',
            link: '/#'
          },
          {
            key: 'sub_menu_2',
            name: 'Sub Menu 2',
            link: '/#'
          },
        ]
      },
    ]
  },
  {
    key: 'no_child',
    name: 'One Level Menu',
    icon: 'notes',
    linkParent: '/app/pages/blank-page',
  }
];
