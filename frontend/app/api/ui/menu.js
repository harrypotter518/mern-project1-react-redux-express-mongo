module.exports = [
  {
    key: 'home',
    name: 'Home',
    icon: 'home',
    child: [
   
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
        key: 'entities',
        name: 'Entities',
        icon: 'view_module',
        title: true,
      },

      {
        key: 'editable_cell',
        name: 'Countries',
        icon: 'local_atm',
        link: '/app/entities/countries'
      },
      {
        key: 'editable_cell2',
        name: 'Commodity Types',
        icon: 'business',
        link: '/app/entities/commodityTypes'
      },    

      {
        key: 'editable_cell4',
        name: 'Suppliers',
        icon: 'nature_people',
        link: '/app/entities/suppliers'
      },

      {
        key: 'editable_cell5',
        name: 'Mills',
        icon: 'mobile_friendly',
        link: '/app/entities/mills'
      },

      {
        key: 'editable_cell3',
        name: 'Commodities',
        icon: 'Gallery',
        link: '/app/entities/commodities'
      },

    ]
  },

];
