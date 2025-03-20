const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React"
);

const heading1 = React.createElement(
    "h1",
    { id: "heading1", xyz: "abc" },
    "Hello World from heading1"
);

const heading2 = React.createElement(
    "h1",
    { id: "heading2", xyz: "abc" },
    "Hello World from heading2"
);

const innerDiv = React.createElement(
    "div",
    {className: "box"},
    // {heading,heading1}
    [heading,
    heading1,
    heading2]
)

const innerDiv1 = React.createElement(
    "div",
    {className: "box"},
    // {heading,heading1}
    [heading,
    heading1,
    heading2]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([innerDiv,innerDiv1]);
