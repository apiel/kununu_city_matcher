import React from 'react';

import Autocomplete from './autocomplete';

const Row = ({ id, name }) => (
    <div className='row'>
        <div className='column'>({ id }) { name }</div>
        <div className='column'>
            <Autocomplete />
        </div>
    </div>
);

export default Row;