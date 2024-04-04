import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The fundamental building blocks of the user interface, allowing for the assembly of various UI elements into cohesive structures.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Generates HTML-like syntax, facilitating the creation of dynamic markup that dictates the appearance and behavior of components.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Enable the customization and reusability of components by passing data inputs to them, shaping their appearance and behavior.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "Represents React-managed data within components, triggering re-renders and UI updates upon modification, ensuring real-time synchronization.",
  },
];

export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components serve as the cornerstone of React applications, encapsulating self-contained modules comprising HTML, optional CSS, and JavaScript, to render desired output.",
    code: `
const Welcome = () => {
  return <h1>Hello, World!</h1>;
};`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX, a JavaScript syntax extension, combines the power of JavaScript with a template-like structure, facilitating dynamic content rendering within React components.",
    code: `
const userName = "John";
return (
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>
);`,
  },
  props: {
    title: "Props",
    description:
      "Props, short for properties, serve as arbitrary inputs accepted by components, analogous to function arguments, enabling dynamic customization and reusability.",
    code: `
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};`,
  },
  state: {
    title: "State",
    description:
      "State empowers React components to adapt their output over time, responding to user interactions, network requests, and various stimuli, ensuring dynamic user experiences.",
    code: `
const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
};`,
  },
};
