import { sectionMetadata } from "@/app/_site/SectionIndex";
import { ComponentGallery } from "@/app/_site/ComponentGallery";

export const metadata = sectionMetadata("components");

export default function ComponentsPage() {
  return <ComponentGallery />;
}
