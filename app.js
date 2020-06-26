import { React, ReactDOM } from "https://unpkg.com/es-react";
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(React.createElement);

const Route = {
  "/react-zero/": React.lazy(() => import("./routes/home/index.js")),
  "/react-zero/*": React.lazy(() => import("./routes/lost/index.js")),
};

ReactDOM.render(
  html`
    <${React.Suspense} fallback=${html`<div></div>`}>
      <${Route[location.pathname] || Route["*"]} />
    <//>
  `,
  document.body
);
