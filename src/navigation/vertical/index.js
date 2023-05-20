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
      sectionTitle: 'Settings & Security'
    },
    ,
    {
      title: 'Account Settings',
      icon: 'tabler:settings',
      children: [
        {
          title: 'Account',
          path: '/pages/account-settings/account'
        },
        {
          title: 'Security',
          path: '/pages/account-settings/security'
        },
        {
          title: 'Billing',
          path: '/pages/account-settings/billing'
        },
        {
          title: 'Notifications',
          path: '/pages/account-settings/notifications'
        },
        {
          title: 'Connections',
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
          title: 'User',
          icon: 'tabler:users-group',
          children: [
            {
              title: 'List',
              path: '/apps/user/list'
            },
            {
              title: 'View',
              children: [
                {
                  title: 'Account',
                  path: '/apps/user/view/account'
                },
                {
                  title: 'Security',
                  path: '/apps/user/view/security'
                },
                {
                  title: 'Billing & Plans',
                  path: '/apps/user/view/billing-plan'
                },
                {
                  title: 'Notifications',
                  path: '/apps/user/view/notification'
                },
                {
                  title: 'Connection',
                  path: '/apps/user/view/connection'
                }
              ]
            }
          ]
        }
      ]
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
