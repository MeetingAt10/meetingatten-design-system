export interface AvatarProps {
    /** Person's name: the accessible name, and the source of the initials. */
    name: string;
    /** Photo URL. Without it the avatar shows initials. */
    src?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
/** Avatar: initials or photo in a circle (24 / 32 / 40px). */
export declare function Avatar({ name, src, size, className }: AvatarProps): import("react").JSX.Element;
