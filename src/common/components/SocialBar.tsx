// ============================================================================
// SocialBar.tsx
//
// Social Bar Component for displaying social media links
// ============================================================================

import { FaEnvelope, FaFilePdf, FaSquareGithub, FaLinkedin  } from "react-icons/fa6";

export default function SocialBar() {
    return (
        <ul className="mt-8 flex items-center gap-5">
            <a href="mailto:zszach23@gmail.com" aria-label="Email">
                <FaEnvelope />
            </a>
            <a href="/Zachary_Sally_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                <FaFilePdf />
            </a>
            <a href="https://github.com/zszach23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaSquareGithub />
            </a>
            <a href="https://www.linkedin.com/in/zachary-sally/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
        </ul>
    );
}