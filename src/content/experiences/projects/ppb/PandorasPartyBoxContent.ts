// ============================================================================
// PandorasPartyBoxContent.ts
//
// Content for the Pandora's Party Box Experience Page.
// ============================================================================

import type { ExperiencePageData } from "../../../../common/components/experience-pages/ExperiencePageTypes";

export const PandorasPartyBoxContent: ExperiencePageData = {
    bannerImageUrl: `${import.meta.env.BASE_URL}assets/images/projects/ppb/ppb-banner.png`,
    overview: {
        paragraphs: [
            "Pandora's Party Box is an unreleased local multiplayer party game based around Greek mythology. The game is comprised of unique zones based off of different Greek Gods. Each zone includes five minigames that relate to the mythology of its respective God."
        ]
    },
    contributions: {
        overview: [
            "I led the design and development of systems and gameplay elements for the Ares zone. I was specifically assigned to create two minigames: The Labyrinth and Attack on Titan"
        ],
        features: [
            {
                title: "The Labyrinth",
                details: "The Labyrinth is a minigame where the players are trapped inside the labyrinth with the minotaur hunting them down. Players must avoid the minotaur's rampage and various traps scattered around the labyrinth.",
                bulletPoints: [
                    "I coded a finite state machine, animations, and object interactions for the minotaur using C# scripting and Unity's NavMesh system.",
                    "I designed and implemented various traps scattered around the labyrinth that affect player and minotaur movement, including wall traps and cobweb traps."
                ],
                media: {
                        type: "video",
                        url: "https://www.youtube.com/embed/plLhHkICctg",
                        caption: "The Labyrinth Demo"
                }
            },
            {
                title: "Attack on Titan",
                details: "Attack on Titan is a minigame where the leading player is transformed into an enormous titan and is tasked with slamming the arena ground to knock out the other players. The other players must evade the titan's fist and the resulting shockwave and get in close to attack the hand before it goes back up.",
                bulletPoints: [
                    "I created a titan player controller by extending a pre-existing reticle controller.",
                    "I integrated VFX, decals, and other original art to make the scene look dynamic.",
                    "I programmed a shockwave by utilizing a deadly ring mesh collider and a safe inner sphere collider that scaled over time."
                ],
                media: {
                    type: "video",
                    url: "https://www.youtube.com/embed/0skYsfhYv9Y",
                    caption: "Attack on Titan Demo"
                }
            }
        ]
    },
    challenges: [
        {
            title: "Minotaur Patrolling",
            systemOverview: "During preproduction of The Labyrinth, we brainstormed ideas for how the minotaur would patrol the labyrinth. I wanted to create a patrol system that invited randomness in the minotaur's movement to make each playthrough unique. Specifically, I wanted the minotaur to randomly go to some other node that it can visibly see. This system would also need to be able to work with the wall trap by removing the minotaur's ability to move to a node that is blocked behind a wall.",
            problemStatement: "Early prototyping involved a grid-based movement using tiling. However, the grid-based movement felt too restrictive for the minotaur. It didn't feel as realistic as I wanted it to be.",
            solution: [
                "I restarted from scratch and coded a patrol node system using a graph data structure. I created a manager that allowed me to simply drag and drop two node transforms into Unity's Inspector to create an edge in the graph. These edges created a bi-directional link between the nodes, signaling that the minotaur is able to move the other node. This system allowed me to easily implement randomness by selecting a random adjacent node. This also integrated very well with the trap wall, as all I needed to do was give the trap a set of links that would be destroyed when the wall raises and added again when the wall lowers."
            ],
            whatILearned: "Sometimes first designs and prototypes will not be the most optimal approach. It's important to be able to recognize when a system isn't working and be willing to scrap it and start over to create a more elegant solution."
        }
    ]
}