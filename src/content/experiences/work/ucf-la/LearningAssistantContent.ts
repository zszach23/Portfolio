// ============================================================================
// LearningAssistantContent.ts
// 
// Learning Assistant Content Component for the Application.
// ============================================================================

import type { ExperiencePageData } from "../../../../common/components/experience-pages/ExperiencePageTypes";

export const LearningAssistantContent: ExperiencePageData = {
    bannerImageUrl: `${import.meta.env.BASE_URL}assets/images/work/ucf-la/ucf-la-banner.png`,
    overview: {
        paragraphs: [
            "During the summer 2024 semester, I worked as an Undergraduate Learning Assistant for the University of Central Florida's Computer Science Department. I worked under Dr. Salih Safa Bacanli for UCF's Object-Oriented Programming course, one of the core courses in UCF's Computer Science curriculum.",
            "As a ULA, I aided over 400 students across 2 sections in learning the fundamentals of object-oriented programming in Java, resulting in an 83% pass rate across both sections."
        ]
    },
    contributions: {
        overview: [
            "As a ULA, I contributed to the course in three main ways: writing lecture notes, creating practice problems, and hosting office hours."
        ],
        features: [
            {
                title: "Lecture Notes",
                details: "I wrote detailed lecture notes based on the course lectures and materials, providing in-depth code examples, diagrams, and explanations to help students understand the course material. These notes were made available to students as a supplementary resource to the course lectures."
            },
            {
                title: "Practice Problems",
                details: "I created targeted practice problems for each lecture topic, designed to reinforce key concepts and provide students with additional opportunities to practice assessment-style questions. These practice problems were made available to students as a resource for exam preparation and skill development."
            },
            {
                title: "Office Hours",
                details: "I hosted regular office hours for 10 hours per week, providing one-on-one assistance to students who needed additional support with course material, homework assignments, or exam preparation. During office hours, I helped students debug code, explained difficult concepts, and provided guidance on how to approach problems effectively."
            }
        ]
    },
    challenges: [
        {
            title: "Office Hour Debugging Sessions",
            systemOverview: "One of the homework assignments in the course involved students implementing a linked list data structure. In this assignment, students were required to generate a linked list from a given input file, and then repeatedly replace adjacent nodes that match X[i] = 2 * X[i - 1] + 7 with sequential negative markers (-100, -99, -98, ...).",
            problemStatement: "I had multiple students come to office hours asking for help with debugging their code, as their output was skipping some of the nodes that were supposed to be replaced.",
            solution: [
                "I started by asking the students to explain their problem, then walk me through their code. This is so that I could understand their thought process and identify any misconceptions they had about the problem or the code.",
                "After understanding their code, I walked through the failing test case with them on a whiteboard, asking them to explain what their code was doing at each step. Once we approached the point where their code was skipping nodes, I asked them to explain why they thought that was happening. When walking through the test case, most students were able to identify that their code was updating their node references incorrectly when the replacement operation was performed multiple times in a row.",
                "Finally, I explained to them how to update their node references correctly to ensure that all nodes were processed and replaced as needed, and then had them implement the fix in their code. After implementing the fix, I had them run the test case again to confirm that their code was now working correctly."
            ],
            whatILearned: "Debugging code with students in office hours is a very different experience than debugging code on your own. It requires the ability to explain complex concepts in a way that is easy for students to understand. It also requires the ability to ask the right questions to guide students towards finding the solution on their own, rather than just giving them the answer."
        }
    ]
}