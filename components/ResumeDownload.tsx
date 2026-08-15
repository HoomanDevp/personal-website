export default function ResumeDownload() {
  return (
    <a
      className="resume-download no-print"
      href="/personal-website/HoomanYarahmadi-Java.pdf"
      download="HoomanYarahmadi-Java.pdf"
      aria-label="Download Hooman Yarahmadi resume as PDF"
    >
      <span className="resume-download-icon" aria-hidden="true">↓</span>
      <span>
        <small>Résumé</small>
        <strong>Download PDF</strong>
      </span>
    </a>
  );
}
