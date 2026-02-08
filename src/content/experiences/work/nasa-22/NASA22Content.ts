// ============================================================================
// NASA22Content.ts
//
// Content data for the NASA 2022 experience page.
// ============================================================================

import type { ExperiencePageData } from "../../../../common/components/experience-pages/ExperiencePageTypes";

export const NASA22Content: ExperiencePageData = {
    bannerImageUrl: `${import.meta.env.BASE_URL}assets/images/work/nasa/nasa-banner.jpg`,
    overview: {
        paragraphs: [
            "During the Summer of 2022, I had the opportunity to come work for NASA at Kennedy Space Center as a software engineer intern. I worked with the team responsible for handling communication between the Launch Control System and the Space Launch System."
        ]
    },
    contributions: {
        overview: [
            "Throughout my internship, I work on developing documentation for a packet analyzer used to facilitate communication between the Launch Control System (LCS) and the Space Launch System (SLS). Specifically, I wrote a user guide and a developer guide for this packet analyzer, with a focus on the custom dissectors of LCS. These dissectors decommutate telemetry data sent to and from the SLS components into readable information. LCS engineers use these dissectors to troubleshoot and debug their software leading up to launch operations. These documents will be used as a baseline for usage and development of the packet analyzer across the entire software division at Kennedy Space Center.",
            "Developing these guides involved extensive research into official documentation, codebases, and network protocols. I also collaborated with my team's technical points of contact frequently to discuss research and project requirements."
        ],
        features: [
            {
                title: "User Guide",
                details: "The user guide provides information on how to use the User Interface, display filters, packet analysis functions, and data export functions within the packet analyzer GUI. It also provides a basic overview of each custom dissector. It is designed for LCS engineers and future interns to effectively use the packet analyzer by providing a centralized source of information to refer to."
            },
            {
                title: "Developer Guide",
                details: "The developer guide covers all technical information regarding the packet analyzer and the custom dissectors. It details how telemetry data is processed by the dissectors and how the dissectors can be modified or extended. It is designed for LCS engineers and future interns to learn how to build dissectors and background information regarding networks, protocols, and related source files."
            }
        ]
    },
    challenges: [
        {
            title: "No Exact Project Requirements",
            problemStatement: "Since the documentation was the first of its kind, my technical points of contact did not have an outline of everything we should research and include in the guides. This led to a lot of confusion throughout the project, as my partner and I did not know what exactly to focus on.",
            solution: [
                "To overcome this challenge, I iteratively collaborated with my technical points of contact. I began by outlining any concepts that I thought would apply to each guide, the discussed with my team to refine the outline and determine which topics to focus on. I took this information and slowly incorporated more specific information, and repeated this process down to the final product.",
            ],
            whatILearned: "This process helped me grow by giving me experience with technical communication and project management in a real-world application."
        }
    ]
}