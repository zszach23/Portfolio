// CertificationsFooter.tsx
//
// Footer Component for the Certifications Page.
// ============================================================================

export default function CertificationsFooter({ displayedCertificationsCount}: { displayedCertificationsCount: number}) {
    return (
        <div className="mt-12 text-sm text-gray-600">
            Showing {displayedCertificationsCount} certifications.
        </div>
    )
}