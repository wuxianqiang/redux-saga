function render(element, parentNode) {
  if (typeof element === 'string') {
    return parentNode.appendChild(document.createTextNode(element))
  }
  let type, props;
  type = element.type;
  props = element.props;
  // 类组件
  if (type.isReactComponent) {
    let returnedElement = new type(props).render();
    type = returnedElement.type;
    props = returnedElement.props;
  } else if (typeof type === 'function') {
    let returnedElement = type(props)
    type = returnedElement.type;
    props = returnedElement.props;
  }
  let domElement = document.createElement(type);
  for (const propName in props) {
    if (propName === 'className') {
      document.className = props[propName]
    } else if (propName === 'style') {
      let styleObj = props[propName];
      let cssText = Object.keys(styleObj).map(attr => {
        return `${
          attr.replace(
            /([A-Z])/g,
            function () {
              return '-' + arguments[1].toLowerCase()
            })}:${styleObj[attr]}`
      })
      domElement.style.cssText = cssText
    } else if (propName === 'children') {
      props.children.forEach(child => render(child, domElement))
    } else {
      domElement.setAttribute(propName, props[propName])
    }
  }
  parentNode.appendChild(domElement)
}

export default {render}