import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts() {

    return (
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {/* maps through the CORE_CONCEPTS array one-by-one and passes the current
                    array index object to the CoreConcept Component but spreads them and passes
                    them into the component as props. Each instance is displayed on the page with 
                    each iterations information */}
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            </ul>
        </section>
    );
}
