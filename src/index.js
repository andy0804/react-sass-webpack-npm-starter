import React from 'react';
import ReactDOM from 'react-dom';

import MyWidget from './App';
import Button from './Button/Button';
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <MyWidget title={title} />,
  document.getElementById('app')
);

// module.hot.accept();

export {MyWidget,Button}

