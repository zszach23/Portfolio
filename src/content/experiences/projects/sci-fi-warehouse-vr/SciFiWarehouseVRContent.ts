// ============================================================================
// SciFiWarehouseVRContent.ts
//
// Content component for the Sci-Fi Warehouse VR project experience page.
// ============================================================================

import type { ExperiencePageData } from "../../../../common/components/experience-pages/ExperiencePageTypes";

export const SciFiWarehouseVRContent: ExperiencePageData = {
    bannerImageUrl: `${import.meta.env.BASE_URL}assets/images/projects/sci-fi-warehouse-vr/sci-fi-warehouse-vr-banner.png`,
    overview: {
        paragraphs: [
            "Sci-Fi Warehouse VR is a game/simulation where players interact with various entities in a sci-fi warehouse environment. This includes warehouse items like carts and crates, AI robot guards, and an anti-gravity gun.",
            "This was a semester-long project developed for UCF's graduate-level Virtual Reality Engineering course. It was developed in Unity using OpenXR and the Unity XR Interaction Toolkit for the Meta Quest 3. The project files are hosted on Azure DevOps for version control and project management."
        ]
    },
    contributions: {
        overview: [
            "This project is broken down into 6 core aspects of VR development."
        ],
        features: [
            {
                title: "Virtual Environment",
                details: "I designed a warehouse virtual environment that is accurately scaled to real-world dimensions. It was designed to have a slightly higher polygon count and detailed textures to create immersion through realism. I also implemented various lights and sounds to increase immersion. I used Unity's profiler and Statistics window to ensure each frame did not exceed 1 million triangles drawn.",
                media: {
                    type: "video",
                    url: "https://www.youtube.com/embed/B5dOBJ1prGQ?list=PLuCiRApY3VjdbR2FZVq_b70qQNSuZX89a",
                    caption: "Virtual Environment"
                }
            },
            {
                title: "Travel",
                details: "I implemented various travel modes, accessibility features, and wayfinding aids in the project, including:",
                bulletPoints: [
                    "Head-Directed Steering",
                    "Point-and-Instant-Teleport",
                    "Toggleable Tunnel Vignette",
                    "Snap Turning",
                    "Integrated Worldspace UI Markers",
                    "Subtle Aids (Exit Sign, Stairs, etc.)"
                ],
                media: {
                    type: "video",
                    url: "https://www.youtube.com/embed/Ue8VUsW9VRU?list=PLuCiRApY3VjdbR2FZVq_b70qQNSuZX89a",
                    caption: "Travel Modes & Accessibility Features"
                }
            },
            {
                title: "Interaction",
                details: "I incorporated various manipulation techniques and feedback mechanisms, including:",
                bulletPoints: [
                    "Physics-Based Virtual Hands with Direct Interactors",
                    "\"Anti-Gravity Gun\" with Ray Interactor",
                    "Outline for Interactable Objects",
                    "Audio Cues"
                ],
                media: {
                    type: "video",
                    url: "https://www.youtube.com/embed/7PdxAOgTI-Q?list=PLuCiRApY3VjdbR2FZVq_b70qQNSuZX89a",
                    caption: "Interaction"
                }
            },
            {
                title: "Physics",
                details: "I included compound colliders and partial constraints to optimize physics calculations and ensure realistic object behavior.",
                media: {
                    type: "video",
                    url: "https://www.youtube.com/embed/948BDqbG0Xk?list=PLuCiRApY3VjdbR2FZVq_b70qQNSuZX89a",
                    caption: "Physics"
                }
            },
            {
                title: "Animations",
                details: "I incorporated key-frame and procedural animations to create dynamic and responsive interactions, including:",
                bulletPoints: [
                    "Key-Frame Robot Walk and Idle Animations",
                    "Procedural Animations for Virtual Hands, Opening and Closing Doors, and Robot Greet State (Agent Look At Player)"
                ],
                media: {
                    type: "video",
                    url: "https://www.youtube.com/embed/tvXp-Nq6PjU?list=PLuCiRApY3VjdbR2FZVq_b70qQNSuZX89a",
                    caption: "Animations"
                }
            },
            {
                title: "User Interface",
                details: "I developed various UI interactions and functional features throughout the project, including:",
                bulletPoints: [
                    "Robot Interaction UI",
                    "Hand Menu UI"
                ],
                media: {
                    type: "video",
                    url: "https://www.youtube.com/embed/ZhuCiGDU7H4?list=PLuCiRApY3VjdbR2FZVq_b70qQNSuZX89a",
                    caption: "User Interface"
                }
            }
        ]
    },
    challenges: [
        {
            title: "Cylindrical Colliders",
            systemOverview: "I had barrels in the environment that I wanted to be able to interact with ",
            problemStatement: "Unity does not have built-in support for cylindrical colliders, so I had to find a way to create one that was efficient and worked well with the physics system.",
            solution: [
                "I noted that we can achieve the effect of a cylindrical collider by using multiple box colliders arranged in a circular pattern. However, I also needed to ensure that the colliders were optimized for performance.",
                "I created a custom script that generates a specific number of box colliders rotated around a central point to approximate a cylinder. I then fine-tuned the number of colliders and their dimensions to balance accuracy and performance using the Unity profiler to monitor the impact on frame rate."
            ],
            whatILearned: "Accuracy and performance must be balanced when creating projects. I learned how to analyze the trade-offs and fine-tune to achieve the best result for the scope of the project."
        }
    ]
}