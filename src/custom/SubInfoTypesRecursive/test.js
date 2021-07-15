let data = {
  unitData: [
    {
      instance: {
        id: 'dbd440d6-7957-455a-9d98-2221f3925a7f',
        value: 'Multitask',
        __typename: 'Instance',
      },
      children: [
        {
          typeId: '1b0a1e97-32a8-41ed-946a-d33c6560f4d2',
          instances: [
            {
              instance: {
                id: '35791151-5e96-4274-90ca-b2bed4d5b70d',
                value: 'User Type',
                __typename: 'Instance',
              },
              children: [
                {
                  typeId: '6ee096cc-1d66-42e1-ae8e-be0cbdcb2bf5',
                  instances: [
                    {
                      instance: {
                        id: 'd06a1383-37b2-433e-be59-553b35f9c2f8',
                        value: 'Scre1',
                        __typename: 'Instance',
                      },
                      children: [
                        {
                          typeId: '49200929-013e-4196-b13b-bbfec87c3efb',
                          instances: [
                            {
                              instance: {
                                id: '3af0771c-cb2c-4264-ac71-701158ce1602',
                                value: '1a',
                                __typename: 'Instance',
                              },
                              children: [
                                {
                                  typeId:
                                    '49200929-013e-4196-b13b-bbfec87c3efb',
                                  instances: [
                                    {
                                      instance: {
                                        id:
                                          'a727bddd-eb7d-44f5-92b6-24dff8e84461',
                                        value: 'Inf',
                                        __typename: 'Instance',
                                      },
                                      __typename: 'InstanceWithTypedChildren',
                                    },
                                  ],
                                  __typename: 'TypeWithInstances',
                                },
                              ],
                              __typename: 'InstanceWithTypedChildren',
                            },
                            {
                              instance: {
                                id: 'ca747624-5cb4-46eb-80ae-5f421f50a376',
                                value: 'child1',
                                __typename: 'Instance',
                              },
                              children: [
                                {
                                  typeId:
                                    '49200929-013e-4196-b13b-bbfec87c3efb',
                                  instances: [
                                    {
                                      instance: {
                                        id:
                                          'a727bddd-eb7d-44f5-92b6-24dff8e84461',
                                        value: 'Inf',
                                        __typename: 'Instance',
                                      },
                                      __typename: 'InstanceWithTypedChildren',
                                    },
                                  ],
                                  __typename: 'TypeWithInstances',
                                },
                              ],
                              __typename: 'InstanceWithTypedChildren',
                            },
                            {
                              instance: {
                                id: 'b35f25d7-c568-4d7f-8bdf-ec4cc189369c',
                                value: 'sub info1',
                                __typename: 'Instance',
                              },
                              children: [
                                {
                                  typeId:
                                    '49200929-013e-4196-b13b-bbfec87c3efb',
                                  instances: [
                                    {
                                      instance: {
                                        id:
                                          'a727bddd-eb7d-44f5-92b6-24dff8e84461',
                                        value: 'Inf',
                                        __typename: 'Instance',
                                      },
                                      __typename: 'InstanceWithTypedChildren',
                                    },
                                  ],
                                  __typename: 'TypeWithInstances',
                                },
                              ],
                              __typename: 'InstanceWithTypedChildren',
                            },
                            {
                              instance: {
                                id: 'a727bddd-eb7d-44f5-92b6-24dff8e84461',
                                value: 'Inf',
                                __typename: 'Instance',
                              },
                              children: [
                                {
                                  typeId:
                                    '49200929-013e-4196-b13b-bbfec87c3efb',
                                  instances: [null],
                                  __typename: 'TypeWithInstances',
                                },
                              ],
                              __typename: 'InstanceWithTypedChildren',
                            },
                          ],
                          __typename: 'TypeWithInstances',
                        },
                      ],
                      __typename: 'InstanceWithTypedChildren',
                    },
                  ],
                  __typename: 'TypeWithInstances',
                },
              ],
              __typename: 'InstanceWithTypedChildren',
            },
          ],
          __typename: 'TypeWithInstances',
        },
        {
          typeId: '1f2a35d2-0757-424b-b610-1eabec184fca',
          instances: [
            {
              instance: {
                id: 'd44cf900-5be0-4a53-8248-9efaf73acc1b',
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                __typename: 'Instance',
              },
              children: null,
              __typename: 'InstanceWithTypedChildren',
            },
          ],
          __typename: 'TypeWithInstances',
        },
      ],
      __typename: 'InstanceWithTypedChildren',
    },
  ],
};

function treeData(data) {
  let tree = {};

  data.unitData.map((application) => {
    application.children[0].instances.map((user) => {
      user.children[0].instances.map((screen) => {
        screen.children[0].instances.map((info) => {
          let currentId = info.instance.id;
          let parent =
            info.children[0].instances[0] &&
            info.children[0].instances[0].instance;

          if (parent) {
            let parentId = parent.id;
            if (tree[parentId]) {
              tree[parentId].push(currentId);
            } else {
              tree[parentId] = [currentId];
            }
          }

          /*  console.log('tree',tree)
           */
        });
      });
    });
  });
}

console.log(treeData(data));

// data.unitData.map((application) => {
//   console.log('application', application);
//   application.children[0].instances.map((usertype) => {
//     usertype.children[0].instances.map((screen) => {
//       console.log(screen);
//       screen.children[0].instances.map((info) => {
//         console.log('infotype', info);
//         let newArr = info.children[0].instances.filter(e=>e );
//         console.log('new',newArr);

//         let currentId = info.instance.id;

//         let parent = info.children[0].instances && info.children[0].instances.length;
//         console.log('parent',parent);

//         if (parent) {
//           let parentId = parent;
//           console.log('idd', parentId);
//           if (tree[parentId]) {
//             tree[parentId].push(currentId);
//           } else {
//             tree[parentId] = [currentId];
//           }
//         }
//       });
//     });
//   });
// });
