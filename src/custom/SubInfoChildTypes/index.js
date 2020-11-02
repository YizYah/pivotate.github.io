import React, { useState, createRef } from 'react';

import styled from 'styled-components';
import { v4 } from 'uuid';
import SubInfoTypeCreationForm from '../SubInfoTypeCreationForm';
import SubChildInfoType from '../SubChildInfoType';
import SubChild from '../SubChildInfoTypeCreationForm';
import SubChildInfoTypeCreationForm from '../SubChildInfoTypeCreationForm';

const SubInfoChildTypes = ({
  refetchQueries,
  label,
  hasParentId,
  parentId,
  childState,
  subInfoTypes,
  subInfoId,
}) => {
  console.log('subicild id', parentId, subInfoId);
  console.log('data for sub', subInfoTypes,childState);
  const [subInfoTypeID, setSubInfoTypeID] = useState(null);
  const wrapperRef = createRef();
  const [subInfoTypeData, setInfoTypeData] = useState(childState);
  const [validateCount, setvalidateCount] = useState(0);

  const handleClick = (e) => {
    const node = wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      setSubInfoTypeID(null);
    }
  };

  console.log('subInfoTypeDatasubInfoTypeData',subInfoTypeData)

  const handleSelect = (id) => {
    setSubInfoTypeID(id);
  };





  return (
    <div>
      
<div ref={wrapperRef} onClick={handleClick} >
{
            subInfoTypeData.map((infoType) =>   {
              // console.log('subchild.idisplay', infoType.parentId); 
              // if (infoType.parentId) return true;
              console.log('childinfotypes!!!!', infoType);
              return (

                <SubChildInfoType
                key={v4()}
                subChildInfoType={infoType}
                infoTypeId={infoType.id}
                selected={infoType.id === subInfoTypeID}
                refetchQueries={refetchQueries}
                label={label}
                hasParentId={hasParentId}
                onSelect={handleSelect}
                parentId={parentId}
                childState={childState}
              />
            

              )


             

       
        
})}

</div>
    

      <SubChildInfoTypeCreationForm
       parentId={parentId}
       refetchQueries={refetchQueries}
       /* // ns__custom_start unit: appSpec, comp: SubInfoChildTypes, loc: addedPropsForCreationForm */
       validateSubInfoTypes={validateCount}
       childId={subInfoId}


      
      
      />
    </div>
  );
};

export default SubInfoChildTypes;
