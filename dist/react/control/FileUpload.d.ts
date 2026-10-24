export interface FileUploadProps {
    /** Visible label for the drop zone. */
    label: string;
    /** Help text, for example accepted types and size. Do not promise security or privacy. */
    description?: React.ReactNode;
    /** MIME types, for example `["application/pdf", "image/png"]`. */
    acceptedFileTypes?: string[];
    allowsMultiple?: boolean;
    isDisabled?: boolean;
    /** Called with the chosen or dropped files. */
    onSelect?: (files: File[]) => void;
    className?: string;
}
/** FileUpload: drop files on the zone or choose them with the button; lists the selected file names. */
export declare function FileUpload({ label, description, acceptedFileTypes, allowsMultiple, isDisabled, onSelect, className }: FileUploadProps): import("react").JSX.Element;
