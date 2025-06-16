import {block} from '@keystatic/core/content-components'

export const Hero = block({
    label: 'Hero',
    schema: {},
    ContentView: () => {
        return (
            <div>
                <h2>Hero Section</h2>
            </div>
        );
    }
})

export const Projects = block({
    label: 'Projects',
    schema: {},
    ContentView: () => {
        return (
            <div>
                <h2>Projects Section</h2>
            </div>
        );
    }
})

export const About = block({
    label: 'About',
    schema: {},
    ContentView: () => {
        return (
            <div>
                <h2>About Section</h2>
            </div>
        );
    }
})
