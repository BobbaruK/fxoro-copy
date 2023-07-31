type MenuRouteT = string;
// type RouteLabelType = { [key: string]: string } | string;
type MenuRouteLabelT = string;
type MenuItemT = {
  route: MenuRouteT;
  routeLabel: MenuRouteLabelT;
  children?: MenuItemsT;
  class?: string;
  divider?: boolean;
};

export type MenuItemsT = { [key: string]: MenuItemT };
