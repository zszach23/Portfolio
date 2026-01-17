// ============================================================================
// HomeFeaturedExperienceCard.tsx
//
// Featured Experience Card component for the home page.
// ============================================================================

import Chevron from "../../common/components/visuals/Chevron";
import SkillTag from "../../common/components/visuals/SkillTag";
import { formatDateRange } from "../../common/utils/DateUtils";
import type { ExperienceSummary } from "../../content/experiences/ExperienceSummaryTypes";

export default function HomeFeaturedExperienceCard({ experience }: { experience: ExperienceSummary}) {
    return (
        <a href={experience.pageLink} className="group block mb-12 p-6 rounded-lg transition-all hover:bg-purple-50 hover:shadow-md">
            <div className="grid grid-cols-8 gap-4">
                <div className="col-span-8 sm:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {formatDateRange(experience.startDate, experience.endDate)}
                    </p>
                </div>
                <div className="col-span-8 sm:col-span-6">
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors inline-flex items-center">
                        {experience.title}
                        <span className="ml-1 transition-transform group-hover:translate-x-1 align-middle">
                            <Chevron />
                        </span>
                    </h3>
                    {experience.company && (
                        <p className="mt-1 text-sm text-gray-700">
                            {experience.company}
                        </p>
                    )}

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
        </a>
    );
}