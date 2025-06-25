import {collection, config, fields, singleton} from '@keystatic/core';

export default config({
    storage: {
        kind: process.env.NODE_ENV === 'production' ? 'cloud' : 'local',
    },
    cloud: {
        project: 'psampaio/website'
    },
    collections: {
        projects: collection({
            label: "Projects",
            slugField: 'name',
            path: 'src/content/projects/*',
            schema: {
                name: fields.slug({name: {label: 'Name', validation: {isRequired: true}}}),
                summary: fields.text({label: 'Summary', multiline: true, validation: {isRequired: true}}),
                image: fields.image({
                    label: 'Image',
                    directory: "public/images/projects",
                    publicPath: "/images/projects"
                }),
                url: fields.url({label: 'Link', validation: {isRequired: true}}),
                urlText: fields.text({label: 'Link Text'}),
                order: fields.number({label: "Order", validation: {isRequired: true}})
            }
        }),
        posts: collection({
            label: "Posts",
            slugField: "title",
            path: "src/content/posts/*",
            format: {contentField: 'content'},
            entryLayout: "content",
            schema: {
                title: fields.slug({name: {label: "Title", validation: {isRequired: true}}}),
                description: fields.text({label: "Description", multiline: true}),
                pubDate: fields.date({label: "Published On", validation: {isRequired: true}}),
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
                company: fields.slug({name: {label: "Company", validation: {isRequired: true}},}),
                position: fields.text({label: "Position", validation: {isRequired: true}}),
                startDate: fields.date({label: "Start Date", validation: {isRequired: true}}),
                endDate: fields.date({label: "End Date"}),
                summary: fields.text({label: "Summary", multiline: true, validation: {isRequired: true}}),
            }
        }),
        navLinks: collection({
            label: "Navigation Links",
            slugField: 'title',
            path: 'src/content/nav-links/*',
            schema: {
                title: fields.slug({name: {label: 'Title', validation: {isRequired: true}}}),
                url: fields.url({label: 'Link', validation: {isRequired: true}}),
                order: fields.number({label: "Order", validation: {isRequired: true}})
            }
        }),
        socialLinks: collection({
            label: "Social Links",
            slugField: 'title',
            path: 'src/content/social-links/*',
            schema: {
                title: fields.slug({name: {label: 'Title', validation: {isRequired: true}}}),
                url: fields.url({label: 'Link', validation: {isRequired: true}}),
                order: fields.number({label: "Order", validation: {isRequired: true}})
            }
        })
    },
    singletons: {
        ownerInfo: singleton({
            label: "Owner Info",
            path: "src/content/owner-info/",
            schema: {
                name: fields.text({label: "Name", validation: {isRequired: true}}),
                headline: fields.text({label: "Headline", validation: {isRequired: true}}),
                description: fields.text({label: "Description, validation: {isRequired: true}"}),
                about: fields.mdx({label: "About"}),
                small_image: fields.image({
                    label: "Small Profile Image",
                    directory: "public/images",
                    publicPath: "/images",
                    validation: {isRequired: true}
                }),
                large_image: fields.image({
                    label: "Large Profile Image",
                    directory: "public/images",
                    publicPath: "/images",
                    validation: {isRequired: true}
                }),
            }
        }),
        siteInfo: singleton({
            label: "Site Info",
            path: "src/content/site-info",
            schema: {
                language: fields.text({label: "Language", validation: {isRequired: true}, defaultValue: "en"}),
                socialImage: fields.image({
                    label: "Social Image",
                    directory: "public/images",
                    publicPath: "/images",
                    validation: {isRequired: true}
                }), //"/zen-og.png",
                canonicalUrl: fields.url({label: "Canonical URL", validation: {isRequired: true}}),
                plausibleDomain: fields.text({label: "Plausible Domain"})
            }
        }),
        heroInfo: singleton({
            label: "Hero Info",
            path: 'src/content/hero-info',
            schema: {
                summary: fields.text({label: 'Summary', multiline: true, validation: {isRequired: true}}),
                cta: fields.url({label: 'CTA', description: 'Link to your CTA', validation: {isRequired: true}})
            }
        })
    }
})