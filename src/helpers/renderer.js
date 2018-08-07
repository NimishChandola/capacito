import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

const Renderer = (req) => {

	const content = renderToString(
    <StaticRouter context={{}} location={req.path}>
      <Routes/>
    </StaticRouter>
  );

	return `
    <html>
      <head></head>
      <body>
        <div id='root'>${content}</div>
        <script src='assets/development-server.js'></script>
      </body>
    </html>
  `;

};

export default Renderer;