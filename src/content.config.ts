import {defineCollection, z} from 'astro:content'
import {glob} from 'astro/loaders'

const pages = defineCollection({
    loader: glob({pattern: '**/*.mdx', base: 'src/content/pages'}),
    schema: z.object({
        title: z.string()
    }),
})

const projects = defineCollection({
    loader: glob({pattern: '**/*.yaml', base: 'src/content/projects'}),
    schema: z.object({
        name: z.string(),
        summary: z.string(),
        image: z.string().optional(),
        url: z.string(),
        urlText: z.string().optional(),
    }),
})

const posts = defineCollection({
    loader: glob({pattern: '**/*.mdx', base: 'src/content/posts'}),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.date(),
        thumbnail: z.string().optional(),
    }),
})

const experience = defineCollection({
    loader: glob({pattern: '**/*.mdx', base: 'src/content/experience'}),
    schema: z.object({
        company: z.string(),
        position: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
        summary: z.string(),
    }),
})

export const collections = {pages, projects, posts, experience}