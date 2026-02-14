// ============================================================================
// KnightrodexContent.ts
//
// Detailed content for the Knightrodex project.
// ============================================================================

import type { ExperiencePageData } from "../../../../common/components/experience-pages/ExperiencePageTypes";

export const KnightrodexContent: ExperiencePageData = {
    bannerImageUrl: `${import.meta.env.BASE_URL}assets/images/projects/knightrodex/knightrodex-banner.png`,
    overview: {
        paragraphs: [
            "Knightrodex is a QR-based badge hunting app designed for UCF students. Students can decipher hints and work together to find QR codes hidden around campus, which can be scanned to earn badges. These badges can represent UCF events, landmarks, and more. Students can view their own activity and follow other users to see their activity.",
            "This project was developed alongside 6 other student developers of various roles in an agile environment. We were tasked to create a full-stack MERN application with a mobile component."
        ]
    },
    contributions: {
        overview: [
            "I acted as the API lead for the project, designing and implementing the RESTful API endpoints, enabling the CI/CD pipeline,setting up the automated testing framework, and contributing to the overall project documentation."
        ],
        features: [
            {
                title: "API Development",
                details: "Scripted 13 RESTful API endpoints for interacting with a MongoDB database containing user and badge collections. Endpoint behaviors include:",
                bulletPoints: [
                    "User registration and authentication",
                    "Badge scanning and validation",
                    "User and follower activity retrieval",
                    "Badge management and administration"
                ],
                media: {
                    type: "image",
                    url: `${import.meta.env.BASE_URL}assets/images/projects/knightrodex/knightrodex-use-case.png`,
                    caption: "Use Case Diagram"
                }
            },
            {
                title: "CI/CD Pipeline",
                details: "Led the build and deployment process by setting up a CI/CD pipeline with Heroku. This included configuring automated builds, testing, and deployments to ensure a smooth development workflow and rapid iteration.",
                media: {
                    type: "image",
                    url: `${import.meta.env.BASE_URL}assets/images/projects/knightrodex/knightrodex-class-diagram.png`,
                    caption: "CI/CD Class Diagram"
                }
            },
            {
                title: "Automated Testing Framework",
                details: "Created 56 automated unit tests using Jest and Supertest to validate the functionality of the API endpoints. These tests cover various scenarios, including successful operations, error handling, and edge cases, ensuring the reliability and robustness of the backend.",
                media: {
                    type: "image",
                    url: `${import.meta.env.BASE_URL}assets/images/projects/knightrodex/knightrodex-unit-tests.png`,
                    caption: "Unit Tests"
                }
            },
            {
                title: "Documentation",
                details: "Contributed to the overall project documentation by writing detailed API documentation, including endpoint descriptions, request/response formats, and usage examples in SwaggerHub and Jira Confluence.",
                media: {
                    type: "image",
                    url: `${import.meta.env.BASE_URL}assets/images/projects/knightrodex/knightrodex-documentation.png`,
                    caption: "Login Endpoint API Documentation"
                }
            }
        ]
    },
    challenges: [
        {
            title: "Initial Deployment to Heroku",
            systemOverview: "We were provided with a barebones server.js file that set up an Express server. I also had a .env file with necessary environment variables for connecting to the MongoDB database. Both server.js and .env were stored under the /backend directory.",
            problemStatement: "Since the API was the first component of the project to be deployed, I had to set up the initial CI/CD pipeline to deploy the API to Heroku. However, my builds were failing due to Heroku not being able to find my MongoDB connection string, which was stored in the .env file.",
            solution: [
                "I began by researching the various error messages in the build logs. None of the search results were helpful, as most did not apply to my situation. I eventually found a relevant forum post where the user said to verify that the .env file was included in the root directory of the project, as Heroku only looks for it there.",
                "I had been storing the .env file in the /backend directory, so I moved it to the root directory and updated the server.js file to point to the new location. This resolved the issue and allowed me to successfully deploy the API to Heroku."
            ],
            whatILearned: "I was forced to troubleshoot technology that I had no prior experience with, which was a common theme throughout the project. This experience helped teach me how to solve problems without relying on step-by-step guides."
        }
    ]
}