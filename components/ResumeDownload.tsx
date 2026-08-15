import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ResumeDownload() {
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    setTarget(document.querySelector(".hero .cta-row"));
  }, []);

  if (!target) {
    return null;
  }

  return createPortal(
    <a
      className="button button-ghost resume-download no-print"
      href="/HoomanYarahmadi-Java.pdf"
      download="HoomanYarahmadi-Java.pdf"
      aria-label="Download Hooman Yarahmadi resume as PDF"
    >
      <span aria-hidden="true">↓</span>
      Download résumé PDF
    </a>,
    target,
  );
}
