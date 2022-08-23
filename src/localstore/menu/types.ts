interface MenuItem {
  menuId: string;
  label: string;
  caption: string;
  icon: string;
  target: string;
  level: number;
  sectionBegin: boolean;
  children: Array<MenuItem>;
}

interface MenuState {
  MainBreadcrumbs: Array<MenuItem>;
  ActiveMainBreadcrumb: MenuItem;
}

export {
  MenuItem,
  MenuState
}
