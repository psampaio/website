import {block} from '@keystatic/core/content-components'

export const Hero = block({
    label: 'Hero',
    schema: {},
    ContentView: (prop) => {
        return (
            <div>
                <h1>Hero Section</h1>
            </div>
        );
    }
})

export const Projects = block({
    label: 'Projects',
    schema: {},
    ContentView: (prop) => {
        return (
            <div>
                <h1>Projects Section</h1>
            </div>
        );
    }
})