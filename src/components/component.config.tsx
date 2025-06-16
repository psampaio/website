import {fields} from '@keystatic/core'
import {block} from '@keystatic/core/content-components'

export const Hero = block({
    label: 'Hero',
    schema: {
        name: fields.text({label: 'Name'}),
        tagLine: fields.text({label: "Tag Line"}),
        summary: fields.text({label: "Summary"}),
        cta: fields.text({label: "CTA", description: "Link to your CTA"}),
    },
    ContentView: (props) => {
        return (
            <div>
                <h1>{props.value.name || "Your Name"}</h1>
                <h2>{props.value.tagLine || "Your Tag Line"}</h2>
                <p>{props.value.summary || "Add your summary here..."}</p>
                <button>{props.value.cta || "Click Me"}</button>
            </div>
        );
    }
})