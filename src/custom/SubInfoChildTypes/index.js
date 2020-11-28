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
  console.log('subicild id',childState, parentId,hasParentId, subInfoId,subInfoTypes);
  console.log('2!!2', subInfoTypes);
  console.log('pppp', childState)
  const [subInfoTypeID, setSubInfoTypeID] = useState(null);
  const wrapperRef = createRef();
  const [subInfoTypeData, setInfoTypeData] = useState(subInfoTypes);
  const [validateCount, setvalidateCount] = useState(0);

  const handleClick = (e) => {
    const node = wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      setSubInfoTypeID(null);
    }
  };

  console.log('subInfoTypeDatasubInfoTypeData',subInfoTypeData)

  const handleSelect = (id) => {
    console.log('handleclick',id)
    setSubInfoTypeID(id);
  };



  return (
    <div>
      
<div ref={wrapperRef} onClick={handleClick} >
{
            subInfoTypeData && subInfoTypeData.map((subInfoTypesChild) =>   {
              console.log('subchild.idisplay', subInfoTypesChild.parentId); 
              console.log('childinfotypes!!!!', subInfoTypesChild);

              // if (infoType.parentId ===  ) return true
              return (

                <SubChildInfoType
                key={v4()}
                subChildInfoType={subInfoTypesChild}
                infoTypeId={subInfoId}
                selected={subInfoTypesChild.id === subInfoTypeID}
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
