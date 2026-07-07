import { defineConfig } from "tinacms";

const branch =
  process.env.TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // Filled in from your free Tina Cloud project (see HANDOFF):
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: { outputFolder: "admin", publicFolder: "public" },
  media: { tina: { mediaRoot: "assets/img", publicFolder: "public" } },

  schema: {
    collections: [
      {
        name: "home",
        label: "Website Content",
        path: "content",
        format: "json",
        match: { include: "home" },
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "business",
            label: "Business Details",
            fields: [
              { type: "string", name: "phone", label: "Phone (display)" },
              { type: "string", name: "phoneHref", label: "Phone (digits only, for tap-to-call)" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "address", label: "Workshop address" },
              { type: "string", name: "hours", label: "Opening hours" },
              { type: "string", name: "instagram", label: "Instagram handle" },
              { type: "string", name: "instagramUrl", label: "Instagram link" },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Hero (top banner)",
            fields: [
              { type: "string", name: "kicker", label: "Small label above heading" },
              { type: "string", name: "titleLine1", label: "Headline line 1" },
              { type: "string", name: "titleLine2", label: "Headline line 2" },
              { type: "string", name: "titleLine3", label: "Headline line 3" },
              { type: "string", name: "sub", label: "Sub-text", ui: { component: "textarea" } },
              { type: "string", name: "ctaPrimary", label: "Primary button text" },
              { type: "string", name: "ctaSecondary", label: "Secondary button text" },
              { type: "image", name: "image", label: "Hero background photo" },
            ],
          },
          {
            type: "object",
            name: "materials",
            label: "Materials strip",
            list: true,
            ui: { itemProps: (i) => ({ label: i?.name }) },
            fields: [
              { type: "string", name: "name", label: "Material" },
              { type: "string", name: "sub", label: "Sub-line" },
            ],
          },
          {
            type: "object",
            name: "intro",
            label: "Intro statement",
            fields: [
              { type: "string", name: "kicker", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "capabilities",
            label: "Capabilities section",
            fields: [
              { type: "string", name: "kicker", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "sub", label: "Sub-text" },
              {
                type: "object", name: "items", label: "Capability cards", list: true,
                ui: { itemProps: (i) => ({ label: i?.title }) },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "feature1",
            label: "Feature — Three materials",
            fields: [
              { type: "string", name: "kicker", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Photo" },
              {
                type: "object", name: "points", label: "Points", list: true,
                ui: { itemProps: (i) => ({ label: i?.strong }) },
                fields: [
                  { type: "string", name: "strong", label: "Bold lead-in" },
                  { type: "string", name: "rest", label: "Rest of line" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "work",
            label: "Recent work gallery",
            fields: [
              { type: "string", name: "kicker", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "sub", label: "Sub-text" },
              {
                type: "object", name: "items", label: "Photos", list: true,
                ui: { itemProps: (i) => ({ label: i?.caption }) },
                fields: [
                  { type: "image", name: "image", label: "Photo" },
                  { type: "string", name: "tag", label: "Tag (optional, e.g. Mining / Gas)" },
                  { type: "string", name: "caption", label: "Caption" },
                  { type: "string", name: "size", label: "Tile size", options: ["small", "wide", "large"] },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "projects",
            label: "Projects / Trusted on major sites",
            fields: [
              { type: "string", name: "kicker", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "sub", label: "Sub-text", ui: { component: "textarea" } },
              {
                type: "object", name: "companies", label: "Trusted-site logos", list: true,
                ui: { itemProps: (item) => ({ label: item?.name }) },
                fields: [
                  { type: "string", name: "name", label: "Company name" },
                  { type: "image", name: "logo", label: "Logo (white PNG, transparent background)" },
                ],
              },
              { type: "string", name: "note", label: "Small note below" },
            ],
          },
          {
            type: "object",
            name: "feature2",
            label: "Feature — Workshop to site",
            fields: [
              { type: "string", name: "kicker", label: "Label" },
              { type: "string", name: "headingLine1", label: "Heading line 1" },
              { type: "string", name: "headingLine2", label: "Heading line 2" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "cta", label: "Button text" },
              { type: "image", name: "image", label: "Photo" },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Stats row",
            list: true,
            ui: { itemProps: (i) => ({ label: i?.label }) },
            fields: [
              { type: "string", name: "value", label: "Big number/value" },
              { type: "string", name: "label", label: "Label" },
            ],
          },
          {
            type: "object",
            name: "industries",
            label: "Industries section",
            fields: [
              { type: "string", name: "kicker", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object", name: "items", label: "Industries", list: true,
                ui: { itemProps: (i) => ({ label: i?.name }) },
                fields: [{ type: "string", name: "name", label: "Industry" }],
              },
            ],
          },
          {
            type: "object",
            name: "process",
            label: "Process section",
            fields: [
              { type: "string", name: "kicker", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object", name: "steps", label: "Steps", list: true,
                ui: { itemProps: (i) => ({ label: i?.title }) },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Description", ui: { component: "textarea" } },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "contact",
            label: "Contact section",
            fields: [
              { type: "string", name: "kicker", label: "Label" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "sub", label: "Sub-text", ui: { component: "textarea" } },
              { type: "string", name: "formEndpoint", label: "Quote form endpoint (Formspree/Netlify)" },
            ],
          },
          {
            type: "object",
            name: "ctaBanner",
            label: "Bottom call-to-action banner",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "image", name: "image", label: "Background photo" },
              { type: "string", name: "ctaPrimary", label: "Primary button text" },
              { type: "string", name: "ctaSecondary", label: "Secondary button text" },
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "string", name: "blurb", label: "Footer blurb", ui: { component: "textarea" } },
            ],
          },
        ],
      },
    ],
  },
});
