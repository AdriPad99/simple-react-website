import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js'
import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>

        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* maps through the CORE_CONCEPTS array one-by-one and passes the current
            array index object to the CoreConcept Component but spreads them and passes
            them into the component as props. Each instance is displayed on the page with 
            each iterations information */}
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} />)}
          </ul>
        </section>

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

          {!selectedTopic ? <p>Please select a topic.</p> : null}
          {selectedTopic ? (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          ) : null}


        </section>

      </main>
    </div>
  );
}

export default App;
