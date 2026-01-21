import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from '../data';
import TabButton from './TabButton/TabButton.jsx';
import CoreConcept from './CoreConcept.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    let tabContent;

    if (!selectedTopic) {
        tabContent = <p>Please select a topic.</p>;
    } else {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    handleButtonClick={() => handleClick('components')}
                >
                    Components
                </TabButton>

                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    handleButtonClick={() => handleClick('jsx')}
                >
                    JSX
                </TabButton>

                <TabButton
                    isSelected={selectedTopic === 'props'}
                    handleButtonClick={() => handleClick('props')}
                >
                    Props
                </TabButton>

                <TabButton
                    isSelected={selectedTopic === 'state'}
                    handleButtonClick={() => handleClick('state')}
                >
                    State
                </TabButton>
            </menu>

            {tabContent}

        </section>
    )
}