import _ from 'lodash';

export default (data) => {
 

  let parentData = data.map((instance) => ({
    ...instance,
    parentId: instance.children[0].instances[0]
      ? instance.children[0].instances[0].id
      : null,

      
  }));

  console.log('parentdata', parentData);

  const hasParentId = _.groupBy(parentData, 'parentId');
  console.log('hass', hasParentId)

  parentData = parentData.map((instance) => ({
    ...instance,
    _children: hasParentId[instance.id] || [],
  }));
  const prData = Object.keys(hasParentId);
  const childData = [];

  // eslint-disable-next-line no-restricted-syntax

  // let tree = {}
  // function treeData(data) {
  //   data.map((info) => {
  //     console.log('ind', info);
  //     let currentId = info.id;
  //     console.log('ino',currentId);

  //     let parent = info.children[0] && info.children[0].instances[0] !== null && info.children[0].instances[0]

  //     console.log('parent', parent);

  //     if (parent) {
  //       let parentId = parent.id;
  //       if (tree[parentId]) {
  //         tree[parentId].push(currentId);
  //       } else {
  //         tree[parentId] = [currentId];
  //       }
  //     }
  //   })
  // }
  for (const id in prData) {
    if (prData[id]) {
      parentData.map((instance) => {
        console.log('innderloop', instance)
        if (instance.parentId && prData[id] === instance.parentId) {
          childData.push(instance);
        }
        return true;
      });
    }
  }
  // treeData(data)
  console.log('treeeee111',parentData)


  
  return [parentData, childData];

  // return [treeData, tree];
};
