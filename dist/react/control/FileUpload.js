"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { DropZone, FileTrigger, Text, Button as AriaButton } from 'react-aria-components';
import { Icon } from '../icon/Icon.js';
import { IconButton } from './IconButton.js';
import { cx } from '../lib/cx.js';
const formatSize = (bytes) => (bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`);
/** File upload: drop files on the dashed sheet or browse; each file becomes a ruled row with size, progress and remove. */
export function FileUpload({ label, description, acceptedFileTypes, allowsMultiple, isDisabled, onChange, status = {}, className }) {
    const [files, setFiles] = useState([]);
    const update = (next) => {
        setFiles(next);
        onChange?.(next);
    };
    const add = (list) => update(allowsMultiple ? [...files, ...list.filter((f) => !files.some((g) => g.name === f.name))] : list.slice(0, 1));
    const onDrop = async (e) => {
        const items = e.items.filter((i) => i.kind === 'file');
        add(await Promise.all(items.map((i) => i.getFile())));
    };
    return (_jsxs("div", { className: cx('ds-field', className), children: [_jsxs(DropZone, { className: "ds-dropzone", isDisabled: isDisabled, onDrop: onDrop, getDropOperation: (types) => (acceptedFileTypes && !acceptedFileTypes.some((t) => types.has(t)) ? 'cancel' : 'copy'), children: [_jsx("span", { className: "ds-dropzone__icon", "aria-hidden": "true", children: _jsx(Icon, { name: "upload", size: 24 }) }), _jsx(Text, { slot: "label", className: "ds-dropzone__title", children: label }), _jsxs("p", { className: "ds-dropzone__hint", children: ["Drop ", allowsMultiple ? 'files' : 'a file', " here or", ' ', _jsx(FileTrigger, { acceptedFileTypes: acceptedFileTypes, allowsMultiple: allowsMultiple, onSelect: (list) => list && add([...list]), children: _jsx(AriaButton, { className: "ds-dropzone__browse", isDisabled: isDisabled, children: "browse your device" }) })] }), description && _jsx("p", { className: "ds-dropzone__hint", children: description })] }), files.length > 0 && (_jsx("ul", { className: "ds-file-list", "aria-label": "Selected files", children: files.map((f) => {
                    const s = status[f.name] ?? {};
                    return (_jsxs("li", { className: cx('ds-file', s.error && 'ds-file--error', s.done && 'ds-file--done'), children: [_jsx(Icon, { name: s.done ? 'check-circle' : s.error ? 'warning-circle' : 'file', className: "ds-file__icon" }), _jsxs("div", { children: [_jsx("p", { className: "ds-file__name", children: f.name }), _jsx("p", { className: "ds-file__meta", children: s.error ?? (s.progress !== undefined && !s.done ? `${Math.round(s.progress)}% of ${formatSize(f.size)}` : formatSize(f.size)) })] }), _jsx(IconButton, { icon: "x", label: `Remove ${f.name}`, onPress: () => update(files.filter((g) => g !== f)) }), s.progress !== undefined && !s.done && (_jsx("span", { className: "ds-file__progress", "aria-hidden": "true", children: _jsx("span", { style: { '--value': s.progress } }) }))] }, f.name));
                }) }))] }));
}
