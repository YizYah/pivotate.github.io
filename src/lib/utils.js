export const unwrapComponent = (component) =>
  component.WrappedComponent
    ? unwrapComponent(component.WrappedComponent)
    : component;
