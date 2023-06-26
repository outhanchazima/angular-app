import { MenuItem } from "src/app/modules/layout/models/menu.model";


export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/view-grid.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'Up Coming', route: '/dashboard/upcoming' },
            { label: "Suggestions", route: '/dashboard/suggestions'}
          ],
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/bell.svg',
          label: 'Notifications',
          route: '/notifications',
        },
      ],
    },
  ];
}
