/**
 * @author Seok Kyun. Choi. - Syaku
 * @since 2019. 3. 3.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

import '@/config/axiosSetting';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  document.getElementById('app'),
);
