// ============================================================================
// NASA23Content.ts
//
// Content for the NASA 2023 Experience
// ============================================================================

import type { ExperiencePageData } from "../../../../common/components/experience-pages/ExperiencePageTypes";

export const NASA23Content: ExperiencePageData = {
    bannerImageUrl: `${import.meta.env.BASE_URL}assets/images/work/nasa/nasa-banner.jpg`,
    overview: {
        paragraphs: [
            "During the Summer of 2023, I had the opportunity to return to NASA at Kennedy Space Center as a software engineer intern under the Spaceport Command and Control System. I worked with the team responsible for monitoring and controlling the systems involved during launch operations."
        ]
    },
    contributions: {
        overview: [
            "Throughout my internship, I contributed to the development of Class A, human-rated, safety critical software used to test the Launch Control System's (LCS) capabilities. Specifically, I wrote Computer Software Configuration Item (CSCI) Functional Tests (CFTs) to test a system monitor."
        ],
        features: [
            {
                title: "System Monitor Overview",
                details: "The system monitor that I wrote these tests for alerts operators when the CPU usage, disk space usage, or swap space usage of a system exceeds a certain threshold. It also tracks the status of certain processes and alerts operators when any of these processes are not running. This information is crucial for operators to have during launch operations, as it allows them to quickly identify and troubleshoot any issues that may arise with the systems involved in launch operations."
            },
            {
                title: "Development Process",
                details: "To write these CFTs, I learned a keyword-driven automated testing framework by analyzing existing documentation and source code. In addition, I collaborated closely with my team's technical points of contact to learn how the system monitor works and how it fits into LCS. Also, I participated in status meetings with my team to give updates and raise concerns throughout the development lifecycle."
            },
            {
                title: "Mocking System Calls",
                details: "The system monitor relies on system calls from standard libraries to retrieve data about disk and swap space usage on a system. In order to test the system monitor's response to different disk and swap space usage thresholds, I developed mock system call methods that return different values based on different test scenarios. This allows the CFTs to simulate different system states and verify that the monitor responds correctly to each state."
            },
            {
                title: "Project Impact",
                details: "The CFTs that I wrote will optimize the testing of the system monitor in the firing rooms by removing the need for Master Console Operators to manually set up and run the tests. This will accelerate the speed at which these tests will be done, allowing the operators to focus on other priorities prior to launch operations."
            }
        ]
    },
    challenges: [
        {
            title: "Mocking System Calls",
            systemOverview: "The system monitor relies on system calls from standard libraries to retrieve data about disk and swap space usage on a system. The system monitor would report whether the usage has reached preconfigured threshold values. For our CFTs, we needed to test that the monitor is able to report that usage has exceeded each preconfigured threshold.",
            problemStatement: "For our CFTs, we needed to figure out a way to mock these calls in order to get a pre-determined output. It was not preferable, and in some cases impossible, to fill directories with dummy data to reach disk and swap space usage thresholds. It was also preferable to not alter the source code or recompile it, as that defeats the point of the tests. Therefore, we needed to find a way to intercept the system call and change the values returned during run-time. The problem spanned multiple applications both within my intern group and other CSCIs.",
            solution: [
                "I solved this problem by using Test-Driven development. I wrote small tests that called the functions I wanted to mock and verified that the data returned was my dummy data.",
                "I started by creating a mock shared library that alters the data returned by the original system call. In my case, I wanted to use the actual system call within my mock to verify directories were valid before returning the dummy data. After collaborating with my team and relentless googling, I found a way to call the original system call and implemented this in my mock library.",
                "Now that I had the mock shared library, I needed a way to call it BEFORE the system call. I collaborated with fellow interns who were having similar issues with system calls and we eventually found an environment variable that allowed us to load our mock version before the system call at compile time.",
                "With this solution, I was able to write CFTs that test the system monitor's response to different disk and swap space usage thresholds without altering the source code or needing to fill directories with dummy data. I made sure to document my process and supply templates of these mocks so that engineers can replicate the process for any application that requires it for testing."
            ],
            whatILearned: "Basic concepts such as test-driven development can be highly effective in solving complex problems. I was able to successfully identify, analyze, research, and test solutions for a problem that spanned across multiple CSCIs at Kennedy Space Center by breaking down the problem and collaborating with others."
        }
    ]
}