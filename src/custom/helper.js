function buildChildren(singleNode) {
    if (singleNode && singleNode.children && singleNode.children.length > 0) {
      if (singleNode.children[0].instances) {
        singleNode.childrenX = [];
        for (let i in singleNode.children[0].instances) {
          singleNode.childrenX.push(
            buildChildren(singleNode.children[0].instances[i])
          );
        }
      }
    }
    return singleNode;
  }
  
  let rawData = {
    data: {
      unitData: [
        {
          instance: {
            id: "dbd440d6-7957-455a-9d98-2221f3925a7f",
            value: "Multitask",
            __typename: "Instance"
          },
          children: [
            {
              typeId: "1b0a1e97-32a8-41ed-946a-d33c6560f4d2",
              instances: [
                {
                  instance: {
                    id: "b1887da8-9358-41e9-9232-c364687ad6e2",
                    value: "User Type",
                    __typename: "Instance"
                  },
                  children: [
                    {
                      typeId: "6ee096cc-1d66-42e1-ae8e-be0cbdcb2bf5",
                      instances: [
                        {
                          instance: {
                            id: "35d79b11-27f5-4730-9a60-445d67ad7db1",
                            value: "Screen",
                            __typename: "Instance"
                          },
                          children: [
                            {
                              typeId: "49200929-013e-4196-b13b-bbfec87c3efb",
                              instances: [
                                {
                                  instance: {
                                    id: "1dad101a-3e87-46b3-b50d-6f252b697a6d",
                                    value: "SUb Info Type",
                                    __typename: "Instance"
                                  },
                                  children: [
                                    {
                                      typeId:
                                        "49200929-013e-4196-b13b-bbfec87c3efb",
                                      instances: [
                                        {
                                          instance: {
                                            id:
                                              "1b7e6b4b-0fc7-4254-a9e5-a5cab3f6cd7e",
                                            value: "Info Type",
                                            __typename: "Instance"
                                          },
                                          __typename: "InstanceWithTypedChildren"
                                        }
                                      ],
                                      __typename: "TypeWithInstances"
                                    }
                                  ],
                                  __typename: "InstanceWithTypedChildren"
                                },
                                {
                                  instance: {
                                    id: "1b7e6b4b-0fc7-4254-a9e5-a5cab3f6cd7e",
                                    value: "Info Type",
                                    __typename: "Instance"
                                  },
                                  children: [
                                    {
                                      typeId:
                                        "49200929-013e-4196-b13b-bbfec87c3efb",
                                      instances: [null],
                                      __typename: "TypeWithInstances"
                                    }
                                  ],
                                  __typename: "InstanceWithTypedChildren"
                                }
                              ],
                              __typename: "TypeWithInstances"
                            }
                          ],
                          __typename: "InstanceWithTypedChildren"
                        }
                      ],
                      __typename: "TypeWithInstances"
                    }
                  ],
                  __typename: "InstanceWithTypedChildren"
                }
              ],
              __typename: "TypeWithInstances"
            },
            {
              typeId: "1f2a35d2-0757-424b-b610-1eabec184fca",
              instances: [
                {
                  instance: {
                    id: "d44cf900-5be0-4a53-8248-9efaf73acc1b",
                    value:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    __typename: "Instance"
                  },
                  children: null,
                  __typename: "InstanceWithTypedChildren"
                }
              ],
              __typename: "TypeWithInstances"
            }
          ],
          __typename: "InstanceWithTypedChildren"
        }
      ]
    }
  };
  
  let {
    data: { unitData }
  } = rawData;
  
  let helper = buildChildren(unitData[0]);
  export default helper;
  