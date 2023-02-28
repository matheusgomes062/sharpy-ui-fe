export default interface IMenuItemsProps {
  /**
   * Title of menu item
   */
  title: string;
  /**
   * Url of menu item
   */
  url: string;
  /**
   * Submenu of meu items
   */
  submenu?: IMenuItemsProps[];
}