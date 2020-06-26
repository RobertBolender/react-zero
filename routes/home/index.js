import { React } from "https://unpkg.com/es-react";
import htm from "https://unpkg.com/htm?module";
const html = htm.bind(React.createElement);

export default function () {
  return html`<${Title} title="Hello world!" />`;
}

function Title({ title }) {
  return html`<h1>${title}</h1>`;
}
