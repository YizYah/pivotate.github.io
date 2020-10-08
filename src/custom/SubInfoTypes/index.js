import React, { useState, createRef } from 'react';

import { v4 } from 'uuid';
import SubInfoTypeCreationForm from '../SubInfoTypeCreationForm';
import SubInfoType from '../SubInfoType';
import styled from 'styled-components';

const ScreensStyleWrapper = styled.div`
  // ns__custom_start unit: appSpec, comp: Screens, loc: styling
  margin: 0 0 0 7%;
  // ns__custom_end unit: appSpec, comp: Screens, loc: styling
`;

const SubInfoTypes = ({
  subInfoTypes,
  infoTypeId,
  refetchQueries,
  label,
  hasParentId,
  parentId,
  childState,
}) => {
  debugger;
  const [subInfoTypeID, setSubInfoTypeID] = useState(null);
  const wrapperRef = createRef();
  const [subInfoTypeData, setInfoTypeData] = useState(subInfoTypes);
  // const validateSubInfoTypes = subInfoTypeData.length;

  const handleClick = (e) => {
    const node = wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      setSubInfoTypeID(null);
    }
  };

  const handleSelect = (id) => {
    setSubInfoTypeID(id);
  };

  const checkSubInfo =
    subInfoTypeData.length === 0 ||
    !(subInfoTypeData[0].value && subInfoTypeData[0].value !== '');

  return (
    <ScreensStyleWrapper>
      {checkSubInfo ? (
        <SubInfoTypeCreationForm
          parentId={parentId}
          refetchQueries={refetchQueries}
          /* // ns__custom_start unit: appSpec, comp: SubInfo_Types, loc: addedPropsForCreationForm */
          childId={infoTypeId}
          /* // ns__custom_end unit: appSpec, comp: SubInfo_Types, loc: addedPropsForCreationForm */
        />
      ) : (
        <>
          {subInfoTypeData &&
            subInfoTypeData.map((infoType) => (
              <SubInfoType
                key={v4()}
                infoType={infoType}
                infoTypeId={infoType}
                selected={infoType.id === subInfoTypeID}
                refetchQueries={refetchQueries}
                label={label}
                hasParentId={hasParentId}
                onSelect={handleSelect}
                parentId={parentId}
                childState={childState}
              />
            ))}
        </>
      )}
    </ScreensStyleWrapper>
  );
};

export default SubInfoTypes;
