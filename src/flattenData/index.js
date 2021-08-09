export function flattenChildData(element) {
  const flatData = {
    typeId: element.typeId,
    instances: [],
  };

  if (element.instances && element.instances.length > 0) {
    // element.instances.reduce
    flatData.instances = element.instances.reduce((acc, element) => {
      debugger;
      if (element) {
        if (element != null) acc.push(flattenData(element));
      }
      return acc;
    }, []);
  }

  return flatData;
}

export function flattenData(element) {
  const flatData = {
    ...element.instance,
    children: [],
  };

  if (element.children && element.children.length > 0) {
    flatData.children = element.children
      .filter((child) => !!child)
      .map((child) => flattenChildData(child));
  }

  return flatData;
}
