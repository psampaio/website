import {collection, config, fields, singleton} from '@keystatic/core';

import {About, Hero, Projects} from '@components/component.config.tsx'

export default config({
    storage: {
        kind: process.env.NODE_ENV === 'production' ? 'cloud' : 'local',
    },
    cloud: {
        project: 'psampaio/website'
    },
    collections: {
        pages: collection({
            label: 'Pages',
            slugField: 'title',
            path: 'src/content/pages/*',
            format: {contentField: 'content'},
            entryLayout: "content",
            schema: {
                title: fields.slug({name: {label: 'Title'}}),
                content: fields.mdx({
                    label: 'Content',
                    components: {
                        Hero,
                        Projects,
                        About
                    }
                }),
            },
        }),
        projects: collection({
            label: "Projects",
            slugField: 'name',
            path: 'src/content/projects/*',
            schema: {
                name: fields.slug({name: {label: 'Name'}}),
                summary: fields.text({label: 'Summary'}),
                image: fields.image({
                    label: 'Image',
                    directory: "public/images/projects",
                    publicPath: "/images/projects"
                }),
                url: fields.url({label: 'Link'}),
                urlText: fields.text({label: 'Link Text'})
            }
        })
    },
    singletons: {
        ownerInfo: singleton({
            label: "Owner Info",
            path: "src/content/owner-info/",
            // format: {contentField: "about"},
            schema: {
                name: fields.text({label: "Name"}),
                headline: fields.text({label: "Headline"}),
                description: fields.text({label: "Description"}),
                about: fields.mdx({label: "About"}),
                small_image: fields.image({
                    label: "Small Profile Image",
                    directory: "public/images",
                    publicPath: "/images"
                }),
                large_image: fields.image({
                    label: "Large Profile Image",
                    directory: "public/images",
                    publicPath: "/images"
                }),
            }
        }),
        heroInfo: singleton({
            label: "Hero Info",
            path: 'src/content/hero-info',
            schema: {
                summary: fields.text({label: 'Summary', multiline: true}),
                cta: fields.url({label: 'CTA', description: 'Link to your CTA'})
            }
        })
    }
})