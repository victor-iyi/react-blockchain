import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';


// Middlwares...
const middleware = applyMiddleware();

// Create store with reducers.
const store = middleware(createStore)(reducers);

// Export store.
export { store };
