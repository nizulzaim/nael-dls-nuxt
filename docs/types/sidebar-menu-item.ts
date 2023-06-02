export type SidebarMenuItemChildren = {
  text: string;
  href: string;
}

export type SidebarMenuItem = {
  text: string;
  href: string;
  icon: string;
  children?: SidebarMenuItemChildren[]
}