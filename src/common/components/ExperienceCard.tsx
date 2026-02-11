// ============================================================================
// HomeFeaturedExperienceCard.tsx
//
// Featured Experience Card component for the home page.
// ============================================================================

import { Link } from "react-router-dom";
import Chevron from "./visuals/Chevron";
import SkillTag from "./visuals/SkillTag";
import { formatDateRange } from "../utils/DateUtils";
import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";

export default function ExperienceCard({ experience }: { experience: ExperienceSummary}) {
    return (
        <Link to={experience.pageLink} className="group block mb-12 p-6 rounded-lg transition-all hover:bg-purple-50 hover:shadow-md">
            <div className="flex gap-4 items-center">
                <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden">
                    {experience.imageUrl && (
                        <img src={experience.imageUrl} alt={experience.title} className="w-full h-full object-cover"
                        />
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors inline-flex items-center">
                        {experience.title}
                        <span className="ml-1 transition-transform group-hover:translate-x-1 align-middle">
                            <Chevron color="text-gray-400" hoverColor="text-purple-700" />
                        </span>
                    </h3>
                    
                    {experience.company && (
                        <p className="mt-1 text-sm text-gray-700">
                            {experience.company}
                        </p>
                    )}
                    
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {formatDateRange(experience.startDate, experience.endDate)}
                    </p>
                    
                    <p className="mt-2 text-sm leading-normal text-gray-600">
                        {experience.description}
                    </p>
                    
                    <ul className="mt-3 flex flex-wrap gap-2">
                        {experience.skills.map((skill, index) => (
                            <li key={index}>
                                <SkillTag skill={skill} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Link>
    );
}