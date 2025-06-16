import {collection, config, fields, singleton} from '@keystatic/core';

import {Hero} from '@components/component.config.tsx'

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
                        Hero
                    }
                }),
            },
        }),
    },
    singletons: {
        heroInfo: singleton({
            label: "Hero Info",
            path: 'src/content/hero-info',
            schema: {
                name: fields.text({label: 'Name'}),
                tagLine: fields.text({label: 'Tag Line'}),
                summary: fields.text({label: 'Summary', multiline: true}),
                cta: fields.url({label: 'CTA', description: 'Link to your CTA'})
            }
        })
    }
});