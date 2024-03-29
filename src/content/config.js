// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const certsCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      issuer: z.string(),
      url: z.string(),
    }),
  ),
});

const projectCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      url: z.string(),
      img: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      tag: z.string(),
      featured: z.boolean().optional(),
    }),
  ),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  certifications: certsCollection,
  projects: projectCollection,
};
