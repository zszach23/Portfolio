// ============================================================================
// SocialBar.tsx
//
// Social Bar Component for displaying social media links
// ============================================================================

import { FaEnvelope, FaFilePdf, FaSquareGithub, FaLinkedin  } from "react-icons/fa6";

export default function SocialBar() {
    return (
        <ul className="mt-8 flex items-center gap-5 mb-5 justify-items-center">
            <a href="mailto:zszach23@gmail.com" aria-label="Email">
                <FaEnvelope className="w-6 h-6" />
            </a>
            <a href={`${import.meta.env.BASE_URL}/assets/Zachary_Sally_Resume.pdf`} target="_blank" rel="noopener noreferrer" aria-label="Resume">
                <FaFilePdf className="w-6 h-6" />
            </a>
            <a href="https://github.com/zszach23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaSquareGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/zachary-sally/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
            </a>
        </ul>
    );
}