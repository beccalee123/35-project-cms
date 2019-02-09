import React from 'react';

import Record from './record.js';
import Models from './models.js';
import Records from './records.js';

/**
 * CMS class
 * renders the models, records, and record components
 * @export
 * @class CMS
 * @extends {React.Component}
 */
export default class CMS extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <Models />
          </nav>
        </header>
        
        <section>
          <Records />
        </section>

        <section>
          <Record />
        </section>
      </>
    );
  }
}
