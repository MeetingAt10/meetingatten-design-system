// @meetingat10/design-system/react: React components over the ds-* CSS (import dist/components.css once in the app).
// Icons beyond the curated vocabulary: @meetingat10/design-system/icons.

// Provider and motion
export { DesignSystemProvider, type DesignSystemProviderProps } from './provider/DesignSystemProvider.js';
export { duration, ease, spring, distance } from './lib/motion.js';
export type { Lane } from './lib/lanes.js';
export type { Key, Selection, SortDescriptor } from 'react-aria-components';

// Icon and identity
export { Icon, type IconProps, type IconName, type IconWeight, type PhosphorIcon } from './icon/Icon.js';
export { ICONS } from './icon/icons.js';
export { DoorPlate, type DoorPlateProps } from './identity/DoorPlate.js';
export { Logo, type LogoProps } from './identity/Logo.js';

// Controls
export { Button, type ButtonProps, type ButtonVariant } from './control/Button.js';
export { IconButton, type IconButtonProps } from './control/IconButton.js';
export { Field, type FieldProps } from './control/Field.js';
export { TextField, type TextFieldProps } from './control/TextField.js';
export { TextArea, type TextAreaProps } from './control/TextArea.js';
export { Search, type SearchProps } from './control/Search.js';
export { Select, type SelectProps } from './control/Select.js';
export { SelectOption, type SelectOptionProps } from './control/SelectOption.js';
export { ComboBox, type ComboBoxProps } from './control/ComboBox.js';
export { Checkbox, CheckboxGroup, type CheckboxProps, type CheckboxGroupProps } from './control/Checkbox.js';
export { RadioGroup, Radio, type RadioGroupProps, type RadioProps } from './control/Radio.js';
export { Switch, type SwitchProps } from './control/Switch.js';
export { SegmentedControl, Segment, type SegmentedControlProps, type SegmentProps } from './control/SegmentedControl.js';
export { TagGroup, Tag, type TagGroupProps, type TagProps } from './control/TagGroup.js';
export { Kbd, type KbdProps } from './control/Kbd.js';
export { Calendar, type CalendarProps } from './control/Calendar.js';
export { DatePicker, type DatePickerProps } from './control/DatePicker.js';
export { FileUpload, type FileUploadProps, type FileStatus } from './control/FileUpload.js';

// Navigation
export { Link, type LinkProps } from './navigation/Link.js';
export { NavItem, type NavItemProps } from './navigation/NavItem.js';
export { Sidebar, SidebarSection, SidebarNote, type SidebarProps } from './navigation/Sidebar.js';
export { TopBar, type TopBarProps } from './navigation/TopBar.js';
export { MobileHeader, type MobileHeaderProps } from './navigation/MobileHeader.js';
export { AppShell, type AppShellProps } from './navigation/AppShell.js';
export { Navbar, type NavbarProps, type NavbarLink } from './navigation/Navbar.js';
export { Tabs, TabList, Tab, TabPanel, type TabsProps, type TabListProps, type TabProps, type TabPanelProps } from './navigation/Tabs.js';
export { Breadcrumbs, type BreadcrumbsProps, type BreadcrumbItem } from './navigation/Breadcrumbs.js';
export { Pagination, pageList, type PaginationProps } from './navigation/Pagination.js';
export { Stepper, type StepperProps, type StepperStep } from './navigation/Stepper.js';
export { MenuButton, MenuItem, MenuSection, MenuSeparator, type MenuButtonProps, type MenuItemProps } from './navigation/Menu.js';
export { CommandPalette, type CommandPaletteProps, type CommandItem } from './navigation/CommandPalette.js';
export { Footer, type FooterProps, type FooterColumn } from './navigation/Footer.js';

// Badges
export { Badge, RoleBadge, Severity, type BadgeProps, type BadgeTone, type BadgeForm, type RoleBadgeProps, type SeverityProps } from './badge/Badge.js';

// Feedback
export { Spinner, type SpinnerProps } from './feedback/Spinner.js';
export { Progress, type ProgressProps } from './feedback/Progress.js';
export { Meter, type MeterProps } from './feedback/Meter.js';
export { Alert, type AlertProps, type AlertTone } from './feedback/Alert.js';
export { ToastRegion, toast, toastQueue, ToastQueue, type ToastRegionProps, type ToastData } from './feedback/Toast.js';
export { Modal, ModalBody, ModalActions, DialogTrigger, type ModalProps } from './feedback/Modal.js';
export { Drawer, type DrawerProps } from './feedback/Drawer.js';
export { Tooltip, TooltipTrigger, type TooltipProps } from './feedback/Tooltip.js';
export { Popover, type PopoverProps } from './feedback/Popover.js';
export { EmptyState, type EmptyStateProps } from './feedback/EmptyState.js';
export { PrivacyNotice, type PrivacyNoticeProps } from './feedback/PrivacyNotice.js';
export { Disclosure, Accordion, type DisclosureProps, type AccordionProps } from './feedback/Disclosure.js';

// Content
export { Card, CardHeader, CardLane, CardWhen, CardTitle, CardBody, CardMeta, CardAction, type CardProps, type CardTitleProps } from './content/Card.js';
export { CardLink, type CardLinkProps } from './content/CardLink.js';
export { AnnouncementCard, type AnnouncementCardProps } from './content/AnnouncementCard.js';
export { ForumCard, type ForumCardProps } from './content/ForumCard.js';
export { Tile, type TileProps, type TileTone } from './content/Tile.js';
export { Avatar, AvatarGroup, initials, type AvatarProps, type AvatarGroupProps } from './content/Avatar.js';

// Data
export { Skeleton, type SkeletonProps } from './data/Skeleton.js';
export { ViewState, type ViewStateProps, type ViewStateKind } from './data/ViewState.js';
export { Table, TableHeader, Column, TableBody, Row as TableRow, Cell, type TableProps, type ColumnProps } from './data/Table.js';
export { ReportsTable, type ReportsTableProps, type ReportRow } from './data/ReportsTable.js';
export { ReportRecord, type ReportRecordProps } from './data/ReportRecord.js';
export { CaseTimeline, type CaseTimelineProps, type CaseEvent, type CaseEventState } from './data/CaseTimeline.js';

// Scheduling
export { TimeBlock, type TimeBlockProps, type BlockForm } from './scheduling/TimeBlock.js';
export { NowLine, useNow, hoursOf, clockOf, type NowLineProps } from './scheduling/NowLine.js';
export { Timetable, type TimetableProps, type TimetableDay, type TimetableEvent } from './scheduling/Timetable.js';
export { ConsultationSlotPicker, type ConsultationSlotPickerProps, type ConsultationDay, type ConsultationSlot } from './scheduling/ConsultationSlotPicker.js';

// Layout
export { Container, type ContainerProps } from './layout/Container.js';
export { Stack, Row, type StackProps, type RowProps } from './layout/Stack.js';
export { Grid, type GridProps } from './layout/Grid.js';
export { Section, type SectionProps } from './layout/Section.js';
export { SectionHeader, type SectionHeaderProps } from './layout/SectionHeader.js';
export { Hero, type HeroProps } from './layout/Hero.js';
export { Agenda, AgendaItem, type AgendaProps, type AgendaItemProps } from './layout/Agenda.js';
export { Highlight, type HighlightProps } from './layout/Highlight.js';
export { Divider, type DividerProps } from './layout/Divider.js';
