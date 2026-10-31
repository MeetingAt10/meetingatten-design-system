import { imagery, type ImageryName } from "@meetingat10/design-system/react";

/** FloatingArt props for a package render. The files are copied to /imagery by scripts/gen-props.mjs. */
export const art = (name: ImageryName) => ({ src: `/imagery/${name}.webp`, width: imagery[name].width, height: imagery[name].height });
