export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: "Sprint Velocity" | "Deep Focus" | "Remote Work" | "Engineering Leadership";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "why-traditional-story-points-fail",
    title: "Why Traditional Sprint Story Points Fail (And How to Fix Agile Estimation)",
    excerpt:
      "Most agile engineering squads confuse hours with complexity. Discover why Fibonacci sizing breaks down when teams don't isolate personal focus from collaborative tasks.",
    category: "Sprint Velocity",
    author: {
      name: "Alex Morgan",
      role: "Head of Product Engineering",
      avatar: "AM",
    },
    publishedAt: "September 14, 2026",
    readTime: "6 min read",
    content: [
      "Agile estimation was originally designed to measure relative cognitive effort, not clock hours. Yet in 9 out of 10 engineering squads, story points have degenerated into a clumsy translation table: 1 point equals 4 hours, 2 points equal a day, 5 points equal half a week.",
      "The moment this translation happens, the entire psychological benefit of agile estimation evaporates. Developers begin padding estimates to account for meeting fatigue, slack pings, and unpredicted code reviews.",
      "In SprintDesk, we solve this by divorcing personal focus from collaborative sprint sizing. A developer tracks their actual workday finish line in their private Personal Workspace, while team story points measure purely technical complexity and risk on the shared board.",
      "When personal interruptions are handled by an estimated finish time predictor instead of bloated ticket estimates, sprint velocity becomes predictable, stable, and transparent across quarters.",
    ],
  },
  {
    slug: "the-context-switching-tax",
    title: "The Context-Switching Tax: Why Dual-Workspace Architecture Matters",
    excerpt:
      "Every time a developer or designer switches from code to a public project board, cognitive performance drops by up to 40%. Here is the science behind focus isolation.",
    category: "Deep Focus",
    author: {
      name: "Sarah Chen",
      role: "Staff Infrastructure Architect",
      avatar: "SC",
    },
    publishedAt: "September 08, 2026",
    readTime: "7 min read",
    content: [
      "Psychological research has consistently demonstrated that the human brain does not multitask—it rapidly switches contexts. When an engineer pauses a deep debugging session to update a Jira ticket, they aren't just spending 30 seconds moving a card. They are paying a 20-minute 'attention residue' penalty.",
      "Public project boards compound this problem because they are inherently performative. When every draft note or subtask is visible to stakeholders and managers, developers feel compelled to polish tickets rather than solve engineering problems.",
      "SprintDesk's dual-workspace architecture creates a firewall between your raw, unorganized thoughts and team execution. You capture rough ideas instantly in your private buffer, work through your daily tasks without surveillance, and promote cards to the team board only when they are ready for collaborative review.",
    ],
  },
  {
    slug: "your-workday-needs-a-finish-line",
    title: "Your Workday Needs a Finish Line: The Science of Estimated Completion Time",
    excerpt:
      "Infinite to-do lists create psychological dread and endless overtime. Learn how dynamic completion modeling brings back daily closure.",
    category: "Deep Focus",
    author: {
      name: "David Kim",
      role: "Co-Founder & Engineering Lead",
      avatar: "DK",
    },
    publishedAt: "September 02, 2026",
    readTime: "5 min read",
    content: [
      "The fundamental flaw of traditional to-do lists is that they are mathematically unbounded. You can add 30 items to a list in two minutes, creating an implicit promise that is physically impossible to complete in an eight-hour workday.",
      "When knowledge workers leave their desks with unfinished lists, the brain experiences the Zeigarnik effect—an intrusive psychological tension caused by unclosed cognitive loops. This leads to burnout and evening anxiety.",
      "SprintDesk introduces a dynamic Estimated Finish Time engine. By analyzing task estimates, calendar meeting buffers, and personal completion velocity, the app calculates an honest finish line (e.g., 5:40 PM). If your planned workload pushes your finish line to 9:15 PM, SprintDesk flags the overcommitment so you can proactively triage tasks before the day runs away.",
    ],
  },
  {
    slug: "async-sprint-management-guide",
    title: "Async Sprint Management: How Distributed Teams Eliminate Status Meetings",
    excerpt:
      "How to run high-velocity 2-week engineering sprints across 6 timezones without synchronous standups or video status calls.",
    category: "Remote Work",
    author: {
      name: "Maria Lopez",
      role: "Product Operations Lead",
      avatar: "ML",
    },
    publishedAt: "August 28, 2026",
    readTime: "8 min read",
    content: [
      "For remote teams spanning London, San Francisco, and Tokyo, daily synchronous standups are not just inconvenient—they are toxic to circadian rhythms and family life.",
      "Async sprint execution relies on three pillars: unambiguous task ownership, explicit acceptance criteria on cards, and automated blocker escalation.",
      "With SprintDesk, engineers never wait for a morning meeting to declare a dependency. When a ticket is blocked, flagging the card updates the Command Center in real time and routes an alert to the responsible squad lead, enabling handoffs to happen continuously across the sun.",
    ],
  },
];

export interface Comparison {
  slug: string;
  competitor: string;
  tagline: string;
  verdict: string;
  idealForCompetitor: string;
  idealForSprintDesk: string;
  matrix: { feature: string; sprintdesk: string; competitor: string }[];
}

export const comparisons: Record<string, Comparison> = {
  "sprintdesk-vs-trello": {
    slug: "sprintdesk-vs-trello",
    competitor: "Trello",
    tagline: "Honest Comparison: SprintDesk vs. Trello",
    verdict:
      "Trello is great for basic sticky-note boards, but lacks private personal focus spaces, story point estimation, and daily finish-line calculations for technical teams.",
    idealForCompetitor: "Simple non-technical Kanban boards, personal hobby lists, and lightweight marketing roadmaps.",
    idealForSprintDesk: "Software engineering squads, agile product teams, and individual developers balancing private focus with team sprint velocity.",
    matrix: [
      { feature: "Dual Private / Team Workspaces", sprintdesk: "Native isolation", competitor: "Not supported (all boards public or shared)" },
      { feature: "Estimated Finish Time Engine", sprintdesk: "Built-in dynamic predictor", competitor: "Not supported" },
      { feature: "Story Points & Fibonacci Sizing", sprintdesk: "Native agile metrics", competitor: "Requires third-party Power-Up plugins" },
      { feature: "Assignee Swimlanes", sprintdesk: "1-Click toggle", competitor: "Not supported" },
      { feature: "Event-Driven Automations", sprintdesk: "Native no-code builder", competitor: "Butler rules with strict command quotas" },
    ],
  },
  "sprintdesk-vs-asana": {
    slug: "sprintdesk-vs-asana",
    competitor: "Asana",
    tagline: "Honest Comparison: SprintDesk vs. Asana",
    verdict:
      "Asana is designed for top-down enterprise project tracking, but burdens individual contributors with noisy notifications and lack of personal focus sanctuary.",
    idealForCompetitor: "Large marketing organizations, enterprise project management offices (PMO), and corporate cross-departmental committees.",
    idealForSprintDesk: "High-velocity technical squads, engineering leads, and autonomous builders who hate ticket administration.",
    matrix: [
      { feature: "Personal Focus Sanctuary", sprintdesk: "100% private focus flow", competitor: "Shared 'My Tasks' with team visibility" },
      { feature: "Daily Finish Line Predictor", sprintdesk: "Dynamic calculation (5:40 PM)", competitor: "Manual due dates only" },
      { feature: "Developer Speed & Hotkeys", sprintdesk: "Global capture < 2s", competitor: "Heavy web application with multiple clicks" },
      { feature: "Agile Swimlanes", sprintdesk: "Included on Pro ($8/mo)", competitor: "Restricted to Enterprise tiers ($25+/mo)" },
      { feature: "Pricing Transparency", sprintdesk: "$0 / $8 / $20 predictable", competitor: "Steep tier jumps and sales-gated contracts" },
    ],
  },
  "sprintdesk-vs-clickup": {
    slug: "sprintdesk-vs-clickup",
    competitor: "ClickUp",
    tagline: "Honest Comparison: SprintDesk vs. ClickUp",
    verdict:
      "ClickUp tries to be 'everything for everyone' resulting in slow page loads and complex configuration. SprintDesk is fast, structured, and focused.",
    idealForCompetitor: "Teams that want 50 different views, docs, chat, whiteboards, and spreadsheets all crammed into a single browser tab.",
    idealForSprintDesk: "Teams that want a lightning-fast, opinionated workspace that connects personal productivity with sprint delivery.",
    matrix: [
      { feature: "Page Speed & Performance", sprintdesk: "Sub-100ms instant transitions", competitor: "Known for lag and heavy JavaScript bundles" },
      { feature: "Estimated Finish Time", sprintdesk: "Live finish-time predictor", competitor: "Not available" },
      { feature: "Simplicity & Learning Curve", sprintdesk: "2-minute instant onboarding", competitor: "Steep learning curve with endless settings" },
      { feature: "Private Focus Flow", sprintdesk: "Isolated personal workspace", competitor: "Tasks entangled across complex folder spaces" },
      { feature: "No-Code Automations", sprintdesk: "Deterministic triggers", competitor: "Complex conditional builders with failure states" },
    ],
  },
};
