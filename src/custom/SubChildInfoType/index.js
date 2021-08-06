import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import PropTypes from 'prop-types';
import {
  UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  ADD_HAS_PARENT_FOR_PARENT_ACTION_ID,
  CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  TYPE_INFO_TYPE_ID,
} from '../../config';

import EditInstanceForm from '../../components/EditInstanceForm';
import DeleteInstanceMenu from '../../components/DeleteInstanceMenu';
import { InputLabel, makeStyles } from '@material-ui/core';

// ns__custom_start unit: appSpec, comp: SubInfoChildType, loc: addedImports
import SubInfoChildTypes from '../SubInfoChildTypes';
import SubChildInfoTypeCreationForm from '../SubChildInfoTypeCreationForm';
// ns__custom_end unit: appSpec, comp: SubInfoChildType, loc: addedImports

const SubInfoTypeWrapper = styled.div(
  ({ selected, isDeleting }) => `
  // ns__custom_start unit: appSpec, comp: InfoType, loc: styling
  // add styling here
  margin: 2rem 0 .5rem 1rem;
  padding: ${selected ? '0' : '1.5rem'};
  
  border-radius: 10px;
  
  background-color: ${
    (isDeleting && 'tomato') || (selected && 'white') || '#D2ECEF'
  };
  cursor: ${selected ? 'auto' : 'pointer'};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -2rem;
    left: -2rem;
    border-left: 2px dashed #a2a5b5;
    width: 1px;
    height: ${(selected && '300%') || '280%'}; 
  }

 
  &:after {
    content: "";
    position: absolute;
    border-top: 2px dashed #a2a5b5;
    top: ${(selected && '42px') || '37px'};
    left: -30px;
    width: ${(selected && '30px') || '29px'}; 
  }

  &:last-child:before {
    top: -32px ;
    height: ${(selected && '113%') || '150%'}; 
  }
  // ns__custom_end unit: appSpec, comp: InfoType, loc: styling
`
);
const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0;
  color: #bbbbbb;
  transition: color 0.5s ease;
  &:hover {
    color: ${(props) => props.hoverColor || '#000000'};
  }
`;

const TitleWrapper = styled.div`
  margin-top: 8px;
  background: #d2ecef;
  padding: 14px;
  border-radius: 10px;
  text-align: initial;
  text-transfor: capitalize;
  display: flex;
  justify-content: space-between;
`;
const useStyles = makeStyles(() => ({
  titleLabel: {
    fontSize: '.8rem',
    textAlign: 'initial',
  },
}));
const SubInfoType = ({
  subChildInfoType,
  infoTypeId,
  parentId,
  selected,
  label,
  hasParentId,
  updateInstance,
  deleteInstance,
  refetchQueries,
  onSelect,
  childState,
}) => {
  const [infoTypeValue, setSubInfoTypeValue] = useState(subChildInfoType.value);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const styles = useStyles();

  // let array = [...subChildInfoType];
  // cleanArray = array.filter(function () {
  //   return true
  // });
  // console.log('array',cleanArray);

  if (!selected) {
    return (
      <SubInfoTypeWrapper onClick={() => onSelect(infoTypeId)}>
        {infoTypeValue}
      </SubInfoTypeWrapper>
    );
  }

  const handleSubInfoTypeValueChange = (e) => {
    setSubInfoTypeValue(e.target.value);
  };

  const handleSubInfoInfoTypeValueSave = async () => {
    setIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          value: infoTypeValue,
          instanceId: subChildInfoType.id,
        }),
      },
      refetchQueries,
    });

    setIsEditMode(false);
    setIsSaving(false);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
  };

  if (isEditMode) {
    return (
      <SubInfoTypeWrapper>
        <EditInstanceForm
          id={infoTypeId}
          label='SubInfoType Value:'
          value={infoTypeValue}
          onChange={handleSubInfoTypeValueChange}
          onSave={handleSubInfoInfoTypeValueSave}
          onCancel={handleCancelEdit}
          disabled={isSaving}
        />
      </SubInfoTypeWrapper>
    );
  }

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: infoTypeId,
          }),
        },
        refetchQueries,
      });
    } catch (e) {
      setIsDeleting(false);
    }
  };

  const handleCanelDelete = () => {
    setIsDeleteMode(false);
  };

  if (isDeleteMode) {
    return (
      <SubInfoTypeWrapper selected={selected} isDeleting={isDeleting}>
        {infoTypeValue}
        <DeleteInstanceMenu
          onDelete={handleDelete}
          onCancel={handleCanelDelete}
          disabled={isDeleting}
        />
      </SubInfoTypeWrapper>
    );
  }

  return (
    <SubInfoTypeWrapper selected={selected}>
      <InputLabel className={styles.titleLabel}>
        Sub Info Child Type for ..
      </InputLabel>
      <TitleWrapper>
        {infoTypeValue}

        <div>
          <Button type='button' onClick={() => setIsEditMode(true)}>
            &#9998;
          </Button>
          <Button type='button' onClick={() => setIsDeleteMode(true)}>
            &#128465;
          </Button>
        </div>
      </TitleWrapper>
      {/* <SubChildInfoTypeCreationForm
       parentId={parentId}
       refetchQueries={refetchQueries}
       childId={infoTypeId}


      
      
      /> */}
    </SubInfoTypeWrapper>
  );
};

export default compose(
  graphql(EXECUTE, { name: 'updateInstance' }),
  graphql(EXECUTE, { name: 'deleteInstance' })
)(SubInfoType);
