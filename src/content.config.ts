import {defineCollection, z} from 'astro:content'
import {glob} from 'astro/loaders'

const pages = defineCollection({
    loader: glob({pattern: '**/*.mdx', base: 'src/content/pages'}),
    schema: z.object({
        title: z.string()
    }),
})

const posts = defineCollection({
    loader: glob({pattern: '**/*.mdx', base: 'src/content/posts'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        thumbnail: z.string().optional(),
    }),
})

export const collections = {pages, posts}