"use client";
import { useState } from 'react';
import { DropZone, FileTrigger, Text, type DropZoneProps, type FileDropItem } from 'react-aria-components';
import { Button } from './Button.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';

type DropEvent = Parameters<NonNullable<DropZoneProps['onDrop']>>[0];

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
export function FileUpload({ label, description, acceptedFileTypes, allowsMultiple, isDisabled, onSelect, className }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const take = (list: File[]) => {
    setFiles(list);
    onSelect?.(list);
  };
  const onDrop = async (e: DropEvent) => {
    const items = e.items.filter((i): i is FileDropItem => i.kind === 'file');
    take(await Promise.all((allowsMultiple ? items : items.slice(0, 1)).map((i) => i.getFile())));
  };
  return (
    <div className={cx('ds-field', className)}>
      <DropZone
        className="ds-dropzone"
        isDisabled={isDisabled}
        onDrop={onDrop}
        getDropOperation={(types) => (acceptedFileTypes && !acceptedFileTypes.some((t) => types.has(t)) ? 'cancel' : 'copy')}
      >
        <Icon name="report" size={24} />
        <Text slot="label" className="ds-label">{label}</Text>
        {description && <span>{description}</span>}
        <FileTrigger acceptedFileTypes={acceptedFileTypes} allowsMultiple={allowsMultiple} onSelect={(list) => list && take([...list])}>
          <Button variant="secondary" size="sm" isDisabled={isDisabled}>
            {allowsMultiple ? 'Choose files' : 'Choose file'}
          </Button>
        </FileTrigger>
      </DropZone>
      {files.length > 0 && (
        <ul className="ds-file-list" aria-label="Selected files">
          {files.map((f) => <li key={f.name}>{f.name}</li>)}
        </ul>
      )}
    </div>
  );
}
