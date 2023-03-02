export default interface ISmartLinkProps {
  /**
   * Link label
   */
  label: string;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * URL or path
   */
  href: string;
  /**
   * Type of Link
   */
  type: "email" | "number" | "tel" | "text" | "url" | "week";
  /**
   * Icon name
   */
  icon?: string;
  /**
   * Has underline
   */
  underline?: boolean;
  /**
   * Add font size as such: text-sm or font-md and others
   */
  iconSize?: number;
  /**
   * Mode
   */
  mode: "light" | "dark";
}