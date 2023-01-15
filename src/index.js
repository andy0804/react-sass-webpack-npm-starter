import React from 'react';
import ReactDOM from 'react-dom';

import MyWidget from './App';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <MyWidget title={title} />,
  document.getElementById('app')
);

// module.hot.accept();

export {MyWidget}

