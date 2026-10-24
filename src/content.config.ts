import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { TAG_NAMES } from "./tags";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string(),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    // Must be tags defined in src/tags.ts. Omitting the key gives ["misc"];
    // an explicitly empty array is rejected.
    tags: z.array(z.enum(TAG_NAMES)).min(1).default(["misc"]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts,
};
