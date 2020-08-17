/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://docs.google.com/document/d/1vYGEyX2Gnvd_VwAcWGv6Ie37oa2vXNL7wtl7oUyyJcw/edit?usp=sharing
 */
// ns__file unit: appSpec, comp: InfoType

// ns__custom_start unit: appSpec, comp: InfoType, loc: beforeImports

// ns__custom_end unit: appSpec, comp: InfoType, loc: beforeImports

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import PropTypes from 'prop-types';
import { InputLabel, makeStyles } from '@material-ui/core';
import {
  UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
} from '../../../config';

import EditInstanceForm from '../../EditInstanceForm';
import DeleteInstanceMenu from '../../DeleteInstanceMenu';

// ns__custom_start unit: appSpec, comp: InfoType, loc: addedImports

import getChildData from '../../../custom/getChildData';
import SubInfoComponent from '../../../custom/SubInfoTypesRecursive';

// ns__custom_end unit: appSpec, comp: InfoType, loc: addedImports

// ns__custom_start unit: appSpec, comp: InfoType, loc: styling
// add styling here
const InfoTypeStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
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
    height: ${(selected && '116%') || '140%'}; 
  }

 
  &:after {
    content: "";
    position: absolute;
    border-top: 2px dashed #a2a5b5;
    top: ${(selected && '62px') || '37px'};
    left: -30px;
    width: ${(selected && '30px') || '29px'}; 
  }

  &:last-child:before {
    top: -32px ;
    height: ${(selected && '94px') || '71px'}; 
  }
  
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
  background: #d2ecef;
  padding: 25px;
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

// ns__custom_end unit: appSpec, comp: InfoType, loc: styling

function InfoType({
  infoType,
  parentId,
  selected,
  updateInstance,
  deleteInstance,
  refetchQueries,
  onSelect,
  // ns__custom_start unit: appSpec, comp: InfoType, loc: addedProps
  childState,
  // ns__custom_end unit: appSpec, comp: InfoType, loc: addedProps
}) {
  const [infoTypeValue, updateInfoTypeValue] = useState(infoType.value);
  const [isEditMode, updateIsEditMode] = useState(false);
  const [isSaving, updateIsSaving] = useState(false);
  const [isDeleteMode, updateIsDeleteMode] = useState(false);
  const [isDeleting, updateIsDeleting] = useState(false);

  // ns__custom_start unit: appSpec, comp: InfoType, loc: beginning
  const [parentState, setParentState] = useState([]);
  const [selectSubInfoId, setSubInfoId] = useState(null);

  useEffect(() => {
    const [parentData] = getChildData(childState);
    setParentState(parentData);
  }, [infoType]);
  const handleSelect = (id) => setSubInfoId(id);
  const styles = useStyles();
  // ns__custom_end unit: appSpec, comp: InfoType, loc: beginning

  // ns__custom_start unit: appSpec, comp: InfoType, loc: beforeReturn
  // ns__custom_end unit: appSpec, comp: InfoType, loc: beforeReturn

  if (!selected) {
    return (
      <InfoTypeStyleWrapper onClick={() => onSelect(infoType.id)}>
        {infoTypeValue}
      </InfoTypeStyleWrapper>
    );
  }

  function handleInfoTypeValueChange(e) {
    updateInfoTypeValue(e.target.value);
  }

  async function handleInfoTypeValueSave() {
    updateIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          value: infoTypeValue,
          instanceId: infoType.id,
        }),
      },
      refetchQueries,
    });

    updateIsEditMode(false);
    updateIsSaving(false);
  }

  function handleCancelEdit() {
    updateIsEditMode(false);
  }

  if (isEditMode) {
    return (
      <InfoTypeStyleWrapper>
        <EditInstanceForm
          id={infoType.id}
          label='InfoType Value:'
          value={infoTypeValue}
          onChange={handleInfoTypeValueChange}
          onSave={handleInfoTypeValueSave}
          onCancel={handleCancelEdit}
          disabled={isSaving}
        />
      </InfoTypeStyleWrapper>
    );
  }

  async function handleDelete() {
    updateIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: infoType.id,
          }),
        },
        refetchQueries,
      });
    } catch (e) {
      updateIsDeleting(false);
    }
  }

  function handleCancelDelete() {
    updateIsDeleteMode(false);
  }

  if (isDeleteMode) {
    return (
      <InfoTypeStyleWrapper selected={selected} isDeleting={isDeleting}>
        {infoTypeValue}
        <DeleteInstanceMenu
          onDelete={handleDelete}
          onCancel={handleCancelDelete}
          disabled={isDeleting}
        />
      </InfoTypeStyleWrapper>
    );
  }

  return (
    <InfoTypeStyleWrapper selected={selected}>
      {/* // ns__custom_start unit: appSpec, comp: InfoType, loc: insideReturn */}
      <InputLabel className={styles.titleLabel}>Info Type</InputLabel>
      <TitleWrapper>
        {infoTypeValue}
        <div>
          <Button type='button' onClick={() => updateIsEditMode(true)}>
            &#9998;
          </Button>
          <Button type='button' onClick={() => updateIsDeleteMode(true)}>
            &#128465;
          </Button>
        </div>
      </TitleWrapper>
      {/* // ns__custom_end unit: appSpec, comp: InfoType, loc: insideReturn */}

      {/* // ns__custom_start unit: appSpec, comp: InfoType, loc: renderEnding */}
      <SubInfoComponent
        infoType={parentState}
        instanceId={infoType.id}
        parentId={parentId}
        refetchQueries={refetchQueries}
        onSelect={handleSelect}
        selectSubInfoId={selectSubInfoId}
        label={infoTypeValue}
      />

      {/* <SubInfoTypes
        subInfoTypes={infoType._children}
        infoTypeId={infoType.id}
        refetchQueries={refetchQueries}
        label='Sub Info Type'
        hasParentId={hasParentId}
        parentId={parentId}
        childState={childState}
      /> */}

      {/* // ns__custom_end unit: appSpec, comp: InfoType, loc: renderEnding */}
    </InfoTypeStyleWrapper>
  );
}

export default compose(
  graphql(EXECUTE, { name: 'updateInstance' }),
  graphql(EXECUTE, { name: 'deleteInstance' })
)(InfoType);

InfoType.propTypes = {
  app: PropTypes.object,
  parentId: PropTypes.string,
  selected: PropTypes.bool,
  updateInstance: PropTypes.func,
  deleteInstance: PropTypes.func,
  refetchQueries: PropTypes.array,
  onSelect: PropTypes.func,
  app: PropTypes.shape({
    children: PropTypes.array,
    id: PropTypes.string,
  }),
  infoType: PropTypes.shape({
    value: PropTypes.string,
    id: PropTypes.string,
  }),
  // ns__custom_start unit: appSpec, comp: InfoType, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: InfoType, loc: addedPropTypes
};
