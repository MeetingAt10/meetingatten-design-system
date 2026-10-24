"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { DropZone, FileTrigger, Text } from 'react-aria-components';
import { Button } from './Button.js';
import { Icon } from '../icon/Icon.js';
import { cx } from '../lib/cx.js';
/** FileUpload: drop files on the zone or choose them with the button; lists the selected file names. */
export function FileUpload({ label, description, acceptedFileTypes, allowsMultiple, isDisabled, onSelect, className }) {
    const [files, setFiles] = useState([]);
    const take = (list) => {
        setFiles(list);
        onSelect?.(list);
    };
    const onDrop = async (e) => {
        const items = e.items.filter((i) => i.kind === 'file');
        take(await Promise.all((allowsMultiple ? items : items.slice(0, 1)).map((i) => i.getFile())));
    };
    return (_jsxs("div", { className: cx('ds-field', className), children: [_jsxs(DropZone, { className: "ds-dropzone", isDisabled: isDisabled, onDrop: onDrop, getDropOperation: (types) => (acceptedFileTypes && !acceptedFileTypes.some((t) => types.has(t)) ? 'cancel' : 'copy'), children: [_jsx(Icon, { name: "report", size: 24 }), _jsx(Text, { slot: "label", className: "ds-label", children: label }), description && _jsx("span", { children: description }), _jsx(FileTrigger, { acceptedFileTypes: acceptedFileTypes, allowsMultiple: allowsMultiple, onSelect: (list) => list && take([...list]), children: _jsx(Button, { variant: "secondary", size: "sm", isDisabled: isDisabled, children: allowsMultiple ? 'Choose files' : 'Choose file' }) })] }), files.length > 0 && (_jsx("ul", { className: "ds-file-list", "aria-label": "Selected files", children: files.map((f) => _jsx("li", { children: f.name }, f.name)) }))] }));
}
