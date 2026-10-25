export type ViewStateKind = 'loading' | 'empty' | 'error' | 'restricted';
export interface ViewStateProps {
    kind: ViewStateKind;
    title: React.ReactNode;
    /** What happened and what is possible now, in plain words. */
    description?: React.ReactNode;
    /** Next step (for example "Try again"). */
    actions?: React.ReactNode;
    className?: string;
}
/** View state: what a data region shows when it is loading, empty, failed or restricted. Announced as a status. */
export declare function ViewState({ kind, title, description, actions, className }: ViewStateProps): import("react").JSX.Element;
