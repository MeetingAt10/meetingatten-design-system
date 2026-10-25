export interface FileStatus {
    /** 0-100 while uploading. */
    progress?: number;
    /** Shown instead of the size, in danger ink. */
    error?: string;
    done?: boolean;
}
export interface FileUploadProps {
    /** Visible label for the drop zone ("Attach files"). */
    label: string;
    /** Accepted types and size, in words. Do not promise security or privacy. */
    description?: React.ReactNode;
    /** MIME types, for example `["application/pdf", "image/png"]`. */
    acceptedFileTypes?: string[];
    allowsMultiple?: boolean;
    isDisabled?: boolean;
    /** Called with the full list whenever files are added or removed. */
    onChange?: (files: File[]) => void;
    /** Upload state per file (keyed by file name) for the progress line and errors. */
    status?: Record<string, FileStatus>;
    className?: string;
}
/** File upload: drop files on the dashed sheet or browse; each file becomes a ruled row with size, progress and remove. */
export declare function FileUpload({ label, description, acceptedFileTypes, allowsMultiple, isDisabled, onChange, status, className }: FileUploadProps): import("react").JSX.Element;
