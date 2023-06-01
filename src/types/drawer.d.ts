declare interface DrawerMenu {
  label: string;
  icon: string;
  link: string;
  exact: boolean;
  children?: DrawerMenu[];
}
