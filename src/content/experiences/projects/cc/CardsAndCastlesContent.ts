// ============================================================================
// CardsAndCastlesContent.ts
//
// Content data for the Cards and Castles project experience page.
// ============================================================================

import type { ExperiencePageData } from "../../../../common/components/experience-pages/ExperiencePageTypes";

export const CardsAndCastlesContent: ExperiencePageData = {
    bannerImageUrl: `${import.meta.env.BASE_URL}assets/images/projects/cc/cc-banner.png`,
    overview: {
        paragraphs: [
            "Cards & Castles is a Multiplayer VR Real-Time Strategy game where players use card decks to summon magical creatures and spells to attack and defend against mythical enemy forces.",
            "Developed as a team project for my AI for Game Programming course at UCF, I along with a team of 3 other members began constructing the game from scratch using Unity. I worked closely with my teammates in an agile development environment with the goal of producing a working, fun game.",
            "By the end of the semester, we were able to present a working game with 4 unique levels, a linear progression system, swappable card decks, and a small multiplayer hub world. Out of the 15 other games during the semester, our game was given the Best Technical Game award by our professor for being the most technically advanced game of the semester.",
        ],
        media: [
            {
                type: "image",
                url: `${import.meta.env.BASE_URL}assets/images/projects/cc/cc-best-technical-award.png`,
                caption: "Best Technical Award",
                subcaption: "Recognized as the most technically advanced game in the Spring 2023 semester"
            },
            {
                type: "video",
                url: "https://www.youtube.com/embed/sjXsvTe_NwU",
                caption: "Professor Mell's Highlight Reel",
                subcaption: "Timestamp: 3:06-4:43"
            }
        ]
    },
    contributions: {
        overview: [
            "I acted as the lead AI programmer for the project, designing and implementing the core AI systems for enemy behavior, pathfinding, and decision-making."
        ],
        features: [
            {
                title: "Character AI Behaviors",
                details: "I developed a Finite State Machine and utilized Unity's NavMesh system and Prefab variants to code character AI behaviors including:",
                bulletPoints: [
                    "Patrol: Units will patrol a given area using predefined waypoints.",
                    "Pursue: Units will target and chase down the closest enemy that they can detect.",
                    "Attack: Units will attack their target once in range.",
                    "Move and Mow Down: Enemy units will travel a path to a given objective and attack anything that stands in their way."
                ],
                media: {
                        type: "video",
                        url: "https://www.youtube.com/embed/-Au1zp6PUpI",
                        caption: "AI Behavior Demonstration",
                }
            },
            {
                title: "Detection System",
                details: "I integrated a detection system so that AI units would not pursue and attack enemies that they shouldn't be able to see.",
                bulletPoints: [
                    "If a target was in range of an AI unit, it would cast a LineCast between the two transforms to determine if there was any terrain that would obstruct their view of each other.",
                    "Used to solve the case where ranged units would begin firing projectiles at an enemy behind a wall."
                ],
                media: {
                        type: "video",
                        url: "https://www.youtube.com/embed/qm11B-cWpmM",
                        caption: "Detection System Demonstration"
                }
            },
            {
                title: "Enemy Spawning Systems",
                details: "I implemented a spawning system so that enemy AI units would be able to spawn based on the current state of the game.",
                bulletPoints: [
                    "Developed a timer-based spawn system where enemies would spawn from their huts after a given cooldown period.",
                    "Implemented a spawn system where enemies will \"build their forces\" by spawning huts on captured objectives.",
                    "Used scriptable objects to design a wave-based spawning system that spawns predefined waves of enemies at random locations and at a set time interval."
                ],
                media: {
                        type: "video",
                        url: "https://www.youtube.com/embed/dCOccoaxTrY",
                        caption: "Enemy Spawning Systems Demonstration"
                    }
            }
        ]
    },
    challenges: [
        {
            title: "Detection System Design",
            systemOverview: "During the early stages of development, we used a method for checking for targets within a unit's detection range. This method would filter for units within a certain radius, under the Character layer, and team membership. This method would return the first enemy in the list that fit those criteria.",
            problemStatement: "This approach wasn't realistic in that units would be able to target enemies that were behind walls. This was especially problematic because ranged units would start firing projectiles at an enemy behind a wall. Also, the method in question would pick the first enemy out of a list of other units, not necessarily the closest enemy.",
            solution: [
                "I integrated a detection system to help make AI behaviors more realistic. Within the check method, I put in a LineCast between the unit and its possible target's transform to detect whether any terrain is obstructing their line of view. If there was some obstruction between the two, the method would move on to the next unit it found. It would iterate through all units within the detection sphere, keeping track of the closest one that is not obstructed from view. At the end, if there was a target that met all the criteria, it would be targeted by the unit."
            ],
            whatILearned: "The easiest solution is not always the most realistic/immersive one. Simple additions such as this create a more immersive experience, even if a player may never consciously notice it."
        },
        {
            title: "Move and Mow Down State",
            systemOverview: "For the Beasts of the Black Forest and Desert of the Damned levels, we needed enemy AI to pursue and attack players' Castle Keep while attacking any of the players' forces it comes across. So, I developed a \"Move and Mow Down\" state where enemy units would move towards their objective and mow down any adversaries in their path. The early version of this state only had the objective as its destination in the pathfinding system.",
            problemStatement: "The early version of this state worked when the distances to the objective were small. However, with our large scale maps, we quickly noticed that the AI would jitter when trying to go to an objective on the other side of the map.",
            solution: [
                "Using Unity's profiler tool, I realized the problem was the limitations of Unity's NavMesh system. When first spawning the units, we would set their destination to the objective on the other side of our extensive maps, which was heavy on the NavMesh's pathfind system. I solved this problem by modifying Move and Mow Down to travel a set of predefined checkpoints similar to the Patrol state, with the end point being the objective. This decreased the cost on the NavMesh's pathfinding system, as it would only need to calculate the path to the next checkpoint."
            ],
            whatILearned: "This taught me the importance of not over-relying on built in systems to work as expected in every case. I should look to optimize code and reduce the calculations performed as much as possible at every step."
        }
    ]
};