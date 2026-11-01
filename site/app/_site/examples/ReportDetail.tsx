"use client";
import { useState } from "react";
import {
  Alert, Badge, Breadcrumbs, Button, CaseTimeline, Divider, FileUpload, MenuButton, MenuItem, Modal, ModalActions, ModalBody,
  PrivacyNotice, SectionHeader, Severity, Stack, Stepper, TextArea, toast,
} from "@meetingat10/design-system/react";
import { Portal } from "./Portal";

const FACTS = [
  ["Reference", "CCS-2026-0142"],
  ["Category", "General concern"],
  ["Created", "21 Oct 2026, 09:12"],
  ["Visibility", "You only, until recipients are confirmed"],
] as const;

export function ReportDetailBody() {
  const [discardOpen, setDiscardOpen] = useState(false);
  return (
    <Portal current="reports" title="My reports">
      <Stack gap={32}>
        <Stack gap={16}>
          <Breadcrumbs items={[{ label: "My reports", href: "/examples/admin-overview/" }, { label: "CCS-2026-0142" }]} />
          <SectionHeader
            level={1}
            split
            title="General concern"
            description="Draft CCS-2026-0142. Only you can see it."
            actions={
              <>
                <Badge tone="warning" form="pending">Draft</Badge>
                <Severity level="medium" />
              </>
            }
          />
        </Stack>

        <PrivacyNotice title="Restricted record" foot="Submission is disabled until recipients and access rules are confirmed.">
          <p>Only you can open this draft today. When recipients are confirmed, the people assigned to it will see it too.</p>
          <p>Restricted access does not mean anonymous: assigned reviewers will know who submitted it.</p>
        </PrivacyNotice>

        <Stepper steps={["Draft", { label: "Recipients confirmed", description: "Pending policy decision" }, "Submitted", "Review"]} current={1} label="Report progress" />

        <Divider />
        <section aria-labelledby="summary-h" className="ds-stack ds-stack--16">
          <h2 id="summary-h" className="ds-type-h3">Summary</h2>
          <dl className="ds-record__facts">
            {FACTS.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </section>

        <Divider />
        <section aria-labelledby="details-h" className="ds-stack ds-stack--16">
          <h2 id="details-h" className="ds-type-h3">Details</h2>
          <TextArea label="What happened" description="Describe what happened, when, and where. Leave out names you do not need to share." showCount maxLength={1000} defaultValue="Asked the department office about the room change for Thursday." />
          <FileUpload label="Attachments" description="PDF, PNG or JPG, up to 10 MB each. Attachments follow the same access rules as the record." allowsMultiple acceptedFileTypes={["application/pdf", "image/png", "image/jpeg"]} />
          <div className="ds-row">
            <Button variant="secondary" icon="note" onPress={() => toast("Draft saved", { description: "CCS-2026-0142 · only you can see it.", tone: "success" })}>Save draft</Button>
            <Button icon="arrow-right" isDisabled>Submit report</Button>
            <MenuButton label="More actions" iconOnly onAction={(k) => k === "discard" && setDiscardOpen(true)}>
              <MenuItem id="copy" icon="copy">Copy reference</MenuItem>
              <MenuItem id="discard" icon="trash" danger>Discard draft</MenuItem>
            </MenuButton>
          </div>
          <Alert tone="neutral" title="Why is Submit disabled?">Recipients and access rules for reports are still being confirmed by the department. Your draft is kept.</Alert>
        </section>

        <Divider />
        <section aria-labelledby="activity-h" className="ds-stack ds-stack--16">
          <h2 id="activity-h" className="ds-type-h3">Activity</h2>
          <CaseTimeline
            events={[
              { title: "Draft created", date: "21 Oct 09:12", dateTime: "2026-10-21T09:12", actor: "You" },
              { title: "Attachment added", date: "21 Oct 09:20", dateTime: "2026-10-21T09:20", actor: "You" },
              { title: "Recipients being confirmed", state: "current", body: "The department office is confirming who receives reports in this category.", actor: "Department office" },
              { title: "Submitted to assigned reviewers", state: "pending" },
              { title: "Review", state: "restricted", body: "Visible only to assigned reviewers and you." },
            ]}
          />
        </section>
      </Stack>

      <Modal title="Discard draft CCS-2026-0142?" role="alertdialog" isOpen={discardOpen} onOpenChange={setDiscardOpen}>
          {({ close }) => (
            <>
              <ModalBody><p>The draft and its attachments are removed from your records. This cannot be undone.</p></ModalBody>
              <ModalActions>
                <Button variant="secondary" onPress={close}>Keep draft</Button>
                <Button variant="destructive" icon="trash" onPress={() => { close(); toast("Draft discarded", { description: "CCS-2026-0142 was removed." }); }}>Discard draft</Button>
              </ModalActions>
            </>
          )}
      </Modal>
    </Portal>
  );
}
