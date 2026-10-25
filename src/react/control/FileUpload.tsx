"use client";
import { useState } from 'react';
import { DropZone, FileTrigger, Text, Button as AriaButton, type DropZoneProps, type FileDropItem } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { IconButton } from './IconButton.js';
import { cx } from '../lib/cx.js';

type DropEvent = Parameters<NonNullable<DropZoneProps['onDrop']>>[0];

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

const formatSize = (bytes: number) => (bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`);

/** File upload: drop files on the dashed sheet or browse; each file becomes a ruled row with size, progress and remove. */
export function FileUpload({ label, description, acceptedFileTypes, allowsMultiple, isDisabled, onChange, status = {}, className }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const update = (next: File[]) => {
    setFiles(next);
    onChange?.(next);
  };
  const add = (list: File[]) => update(allowsMultiple ? [...files, ...list.filter((f) => !files.some((g) => g.name === f.name))] : list.slice(0, 1));
  const onDrop = async (e: DropEvent) => {
    const items = e.items.filter((i): i is FileDropItem => i.kind === 'file');
    add(await Promise.all(items.map((i) => i.getFile())));
  };
  return (
    <div className={cx('ds-field', className)}>
      <DropZone
        className="ds-dropzone"
        isDisabled={isDisabled}
        onDrop={onDrop}
        getDropOperation={(types) => (acceptedFileTypes && !acceptedFileTypes.some((t) => types.has(t)) ? 'cancel' : 'copy')}
      >
        <span className="ds-dropzone__icon" aria-hidden="true"><Icon name="upload" size={24} /></span>
        <Text slot="label" className="ds-dropzone__title">{label}</Text>
        <p className="ds-dropzone__hint">
          Drop {allowsMultiple ? 'files' : 'a file'} here or{' '}
          <FileTrigger acceptedFileTypes={acceptedFileTypes} allowsMultiple={allowsMultiple} onSelect={(list) => list && add([...list])}>
            <AriaButton className="ds-dropzone__browse" isDisabled={isDisabled}>browse your device</AriaButton>
          </FileTrigger>
        </p>
        {description && <p className="ds-dropzone__hint">{description}</p>}
      </DropZone>
      {files.length > 0 && (
        <ul className="ds-file-list" aria-label="Selected files">
          {files.map((f) => {
            const s = status[f.name] ?? {};
            return (
              <li key={f.name} className={cx('ds-file', s.error && 'ds-file--error', s.done && 'ds-file--done')}>
                <Icon name={s.done ? 'check-circle' : s.error ? 'warning-circle' : 'file'} className="ds-file__icon" />
                <div>
                  <p className="ds-file__name">{f.name}</p>
                  <p className="ds-file__meta">{s.error ?? (s.progress !== undefined && !s.done ? `${Math.round(s.progress)}% of ${formatSize(f.size)}` : formatSize(f.size))}</p>
                </div>
                <IconButton icon="x" label={`Remove ${f.name}`} onPress={() => update(files.filter((g) => g !== f))} />
                {s.progress !== undefined && !s.done && (
                  <span className="ds-file__progress" aria-hidden="true"><span style={{ '--value': s.progress } as React.CSSProperties} /></span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
