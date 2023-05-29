const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: 'tabler:smart-home',

      // badgeContent: 'new',
      badgeColor: 'error',
      children: [
        {
          title: 'Analytics',
          path: '/dashboards/analytics'
        },
        {
          title: 'CRM',
          path: '/dashboards/crm'
        },
        {
          title: 'eCommerce',
          path: '/dashboards/ecommerce'
        }
      ]
    },
    {
      sectionTitle: 'Apps & Pages'
    },
    {
      title: 'Email',
      icon: 'tabler:mail',
      path: '/apps/email'
    },
    {
      title: 'Chat',
      icon: 'tabler:messages',
      path: '/apps/chat'
    },
    {
      title: 'Calendar',
      icon: 'tabler:calendar',
      path: '/apps/calendar'
    },
    {
      title: 'Invoice',
      icon: 'tabler:file-dollar',
      children: [
        {
          title: 'List',
          path: '/apps/invoice/list'
        },
        {
          title: 'Preview',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Edit',
          path: '/apps/invoice/edit'
        },
        {
          title: 'Add',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      sectionTitle: 'Settings & Security'
    },

    {
      title: 'General Settings',
      icon: 'tabler:settings',
      children: [
        {
          title: 'Profile',
          icon: 'tabler:user',
          path: '/pages/account-settings/profile'
        },
        {
          title: 'Company',
          icon: 'tabler:building',
          path: '/pages/account-settings/company'
        },
        {
          title: 'Billing',
          icon: 'tabler:file-invoice',
          path: '/pages/account-settings/billing'
        },
        {
          title: 'Notifications',
          icon: 'tabler:notification',
          path: '/pages/account-settings/notifications'
        },
        {
          title: 'Connections',
          icon: 'tabler:social',
          path: '/pages/account-settings/connections'
        },
        {
          title: 'Roles & Permissions',
          icon: 'tabler:user-shield',
          children: [
            {
              title: 'Roles',
              icon: 'tabler:accessible',
              path: '/apps/roles'
            },
            {
              title: 'Permissions',
              icon: 'tabler:lock-access',
              path: '/apps/permissions'
            }
          ]
        },
        {
          title: 'Users',
          icon: 'tabler:users-group',
          path: '/apps/user/list'
        }
      ]
    },
    {
      sectionTitle: 'FAQ & Help Center'
    },

    {
      title: 'FAQ',
      icon: 'tabler:lifebuoy',
      path: '/pages/faq'
    },
    {
      title: 'Help Center',
      icon: 'tabler:help-circle',
      path: '/pages/help-center'
    }
  ]
}

export default navigation
