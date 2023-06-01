import { SidebarMenuItem } from "./types/sidebar-menu-item";

declare module '#app' {
  interface PageMeta {
    menuItems?: SidebarMenuItem[]
  }
}

// It is always important to ensure you import/export something when augmenting a type
export { }