// ============================================================================
// ExperiencePageTypes.ts
//
// Type definitions for experience page components.
// ============================================================================

export type MediaItem = {
    type: "image" | "video";
    url: string;
    alt?: string;
    caption: string;
    subcaption?: string;
}

export type Overview = {
    paragraphs: string[];
    media?: MediaItem[];
}

export type Contributions = {
    overview: string[];
    features: Feature[];
}

export type Feature = {
    title: string;
    details: string;
    bulletPoints?: string[];
    media?: MediaItem;
}

export type Challenge = {
    title: string;
    systemOverview?: string;
    problemStatement: string;
    solution: string[];
    whatILearned: string;
}

export type ExperiencePageData = {
    bannerImageUrl: string;
    overview: Overview;
    contributions: Contributions;
    challenges: Challenge[];
}