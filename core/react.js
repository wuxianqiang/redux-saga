class Component {
  static isReactComponent = true;
  constructor (props) {
    this.props = props
  }
}

function ReactElement(type, props) {
  const element = {type, props}
  return element
}

function createElement(type, config = {}, children) {
  const props = {}
  for (const propName in config) {
    props[propName] = config[propName]
  }
  const childrenLength = arguments.length - 2
  if (childrenLength === 1) {
    props.children = children
  } else {
    props.children = Array.from(arguments).slice(2)
  }
  return ReactElement(type, props)
}

let result = createElement("div", {
  className: "bg",
  id: "title"
}, "12");
console.log(result, '参数')

export default {createElement, Component}