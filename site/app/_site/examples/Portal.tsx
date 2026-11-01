"use client";
import {
  AppShell, Avatar, Badge, DoorPlate, IconButton, MenuButton, MenuItem, MenuSeparator, NavItem, RoleBadge, Search, Sidebar, SidebarNote, SidebarSection, TopBar,
} from "@meetingat10/design-system/react";

export type PortalPage = "overview" | "community" | "consultations" | "reports";

const ITEMS: Array<{ id: PortalPage; label: string; href: string; icon: "house" | "chats" | "chalkboard" | "file"; count?: number }> = [
  { id: "overview", label: "Overview", href: "/examples/admin-overview/", icon: "house" },
  { id: "community", label: "Community", href: "/examples/landing/#community", icon: "chats", count: 3 },
  { id: "consultations", label: "Consultations", href: "/examples/landing/#consultations", icon: "chalkboard" },
  { id: "reports", label: "My reports", href: "/examples/report-detail/", icon: "file" },
];

const navItems = (current: PortalPage) => ITEMS.map((i) => <NavItem key={i.id} href={i.href} icon={i.icon} isCurrent={i.id === current} count={i.count}>{i.label}</NavItem>);

/** The ACCS portal frame shared by the portal examples: sidebar, top bar, mobile header and drawer. */
export function Portal({ current, title, children }: { current: PortalPage; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <AppShell
      density="compact"
      sidebar={
        <Sidebar
          brand={<DoorPlate code="CCS" />}
          footer={
            <>
              <div className="ds-sidebar__person">
                <Avatar name="Paolo Dizon" decorative />
                <div>
                  <p className="ds-sidebar__name">Paolo Dizon</p>
                  <RoleBadge>Student</RoleBadge>
                </div>
              </div>
              <SidebarNote>You see your own reports only. A role is not a privacy guarantee.</SidebarNote>
            </>
          }
        >
          <SidebarSection label="Workspace">{navItems(current)}</SidebarSection>
          <SidebarSection label="Account">
            <NavItem href="#" icon="gear">Settings</NavItem>
            <NavItem href="/examples/sign-in/" icon="sign-out">Sign out</NavItem>
          </SidebarSection>
        </Sidebar>
      }
      topBar={
        <TopBar
          title={<>{title} </>}
          tools={
            <>
              <Search label="Search ACCS" placeholder="Search posts and slots" size="sm" className="ds-topbar__search" />
              <IconButton icon="bell" label="Notifications, 2 unread" dot />
              <MenuButton label="Account" iconOnly icon="user" placement="bottom end">
                <MenuItem id="profile" icon="user">Profile</MenuItem>
                <MenuItem id="settings" icon="gear">Settings</MenuItem>
                <MenuSeparator />
                <MenuItem id="out" icon="sign-out">Sign out</MenuItem>
              </MenuButton>
            </>
          }
        />
      }
      mobileBrand={<DoorPlate code="CCS" size="sm" />}
      mobileNav={navItems(current)}
      mobileActions={<IconButton icon="bell" label="Notifications, 2 unread" dot tooltip={false} />}
    >
      {children}
    </AppShell>
  );
}
