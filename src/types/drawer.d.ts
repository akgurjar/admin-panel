declare interface DrawerMenu {
  label: string;
  icon: string;
  link: string;
  exact: boolean;
  isOpened?: boolean;
  children?: DrawerMenu[];
}
