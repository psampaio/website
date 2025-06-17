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
                summary: fields.text({label: 'Summary', multiline: true}),
                image: fields.image({
                    label: 'Image',
                    directory: "public/images/projects",
                    publicPath: "/images/projects"
                }),
                url: fields.url({label: 'Link'}),
                urlText: fields.text({label: 'Link Text'}),
                order: fields.number({label: "Order"})
            }
        }),
        posts: collection({
            label: "Posts",
            slugField: "title",
            path: "src/content/posts/*",
            format: {contentField: 'content'},
            entryLayout: "content",
            schema: {
                title: fields.slug({name: {label: "Title"}}),
                description: fields.text({label: "Description"}),
                pubDate: fields.date({label: "Published On"}),
                thumbnail: fields.image({
                    label: "Thumbnail",
                    directory: "public/images/posts/",
                    publicPath: "images/posts"
                }),
                content: fields.mdx({label: "Content"})
            }
        }),
        experience: collection({
            label: "Experience",
            slugField: "position",
            path: "src/content/experience/*",
            schema: {
                company: fields.slug({name: {label: "Company"}}),
                position: fields.text({label: "Position"}),
                startDate: fields.date({label: "Start Date"}),
                endDate: fields.date({label: "End Date"}),
                summary: fields.text({label: "Summary", multiline: true}),
            }
        }),
        navLinks: collection({
            label: "Navigation Links",
            slugField: 'title',
            path: 'src/content/nav-links/*',
            schema: {
                title: fields.slug({name: {label: 'Title'}}),
                url: fields.url({label: 'Link'}),
                order: fields.number({label: "Order"})
            }
        }),
        socialLinks: collection({
            label: "Social Links",
            slugField: 'title',
            path: 'src/content/social-links/*',
            schema: {
                title: fields.slug({name: {label: 'Title'}}),
                url: fields.url({label: 'Link'}),
                order: fields.number({label: "Order"})
            }
        })
    },
    singletons: {
        ownerInfo: singleton({
            label: "Owner Info",
            path: "src/content/owner-info/",
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
        siteInfo: singleton({
            label: "Site Info",
            path: "src/content/site-info",
            schema: {
                language: fields.text({label: "Language"}), // "en",
                socialImage: fields.image({
                    label: "Social Image",
                    directory: "public/images",
                    publicPath: "/images"
                }), //"/zen-og.png",
                canonicalUrl: fields.url({label: "Canonical URL"}), //"https://pedrosampaio.me",
                plausibleDomain: fields.text({label: "Plausible Domain"}) //"pedrosampaio.me",

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