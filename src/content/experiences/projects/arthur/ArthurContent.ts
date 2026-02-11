// ============================================================================
// ArthurContent.ts
//
// Content for the Arthur experience page.
// ============================================================================

import type { ExperiencePageData } from "../../../../common/components/experience-pages/ExperiencePageTypes";

export const ArthurContent: ExperiencePageData = {
    bannerImageUrl: `${import.meta.env.BASE_URL}assets/images/projects/arthur/arthur-banner.jpg`,
    overview: {
        paragraphs: [
            "Arthur in Mixed Reality is a concept application that reimagines the existing iPad-based Arthur App into a mixed reality experience.",
            "The Arthur App is an iOS app originally designed to help non-verbal hospital patients communicate their thoughts, pain, and emotions with staff and family. This new version leverages mixed reality to bring those same capabilities into a 3D space, enhancing accessibility and engagement.",
            "This project showcases the potential of immersive technology like XR to transform healthcare, providing a glimpse into how mixed reality can make patient-provider interactions more intuitive, personal, and effective."
        ],
        media: [
            {
                type: "video",
                url: "https://www.youtube.com/embed/Z9uYXIcb6ms",
                caption: "Arthur Concept Video"
            }
        ]
    },
    contributions: {
        overview: [
            "I was the lead XR developer for the application. I was in charge of handling user interaction, core systems, and game loop. I did so by following mock-up designs and use case diagrams provided by designers."
        ],
        features: [
            {
                title: "Chat Messaging System",
                details: "I created a chat system inspired by the designs of WhatsApp and other instant message providers. Users can press buttons to submit predetermined messages, or type their own unique message with a virtual keyboard.",
                media: {
                    type: "image",
                    url: `${import.meta.env.BASE_URL}assets/images/projects/arthur/arthur-chat-system.png`,
                    caption: "Chat Messaging System"
                }
            },
            {
                title: "Text-to-Speech",
                details: "I implemented text-to-speech using Vivox services so that messages submitted by the user will be played out loud.",
                media: {
                    type: "video",
                    url: "https://www.youtube.com/embed/0NTktBHsSiU",
                    caption: "Arthur TTS"
                }
            },
            {
                title: "Cohesion + Immersion Features",
                details: "I developed various features to enhance the cohesion and immersion of the experience, including:",
                bulletPoints: [
                    "Managed sound effects and music using Unity's Audio Mixer to provide background music and audio feedback for user interactions.",
                    "Created zoom in/out effects for transitioning between panels using DOTween.",
                    "Created fade in/out effects for transitioning between different sections of the experience using DOTween.",
                    "Handled button interaction visualization to follow the user's hand when it is in close proximity to the button, providing visual feedback for interactivity."
                ],
                media: {
                    type: "video",
                    url: "https://www.youtube.com/embed/7f3wI9kLiGk",
                    caption: "Panel Transition + Button Interaction Demo"
                }
            }
        ]
    },
    challenges: [
        {
            title: "Panel Transitions Would Not Open New Panels",
            systemOverview: "One feature of the app is that users can transition between different panels with more button options based on the given category. We wanted a smooth transition between the current and new panels by scaling the current panel down to 0 and scaling the new panel up from 0 to 1 via a coroutine.",
            problemStatement: "When I pushed my changes, others reported that they could no logner open the new panel when a button is selected. I did not test my changes prior to pushing because I have worked with coroutines many times before.",
            solution: [
                "The issue was related to how coroutines behaved. Coroutines stop their execution when the game object is deactivated. In my implementation, I was deactivating the current panel after scaling it down, which caused the coroutine to stop before it could scale up the new panel.",
                "To fix this, I changed the order of operations in the coroutine. Instead of deactivating the current panel immediately after scaling it down, I waited until the new panel was fully scaled up before deactivating the current panel. This allowed the coroutine to complete its execution and successfully transition between panels."
            ],
            whatILearned: "Even though I have used some sort of method/technique many times before, I should still test my changes before pushing to ensure that I did not overlook any important details or edge cases that could cause issues for others."
        }
    ]
}