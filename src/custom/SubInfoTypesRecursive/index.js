/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, createRef } from 'react';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';
import { v4 } from 'uuid';

import { InputLabel, makeStyles } from '@material-ui/core';
import EditInstanceForm from '../../components/EditInstanceForm';
import DeleteInstanceMenu from '../../components/DeleteInstanceMenu';

import {
  UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
} from '../../config';

import SubInfoTypeCreationForm from '../SubInfoTypeCreationForm';
import SubChildInfoTypeCreationForm from '../SubChildInfoTypeCreationForm';

const SubInfoTypeWrapper = styled.div(
  ({ selected, isDeleting }) => `
    margin: .5rem 0 .5rem 2.5rem;
    padding: .5em;
    position: relative;
    padding: ${selected ? '0' : '1.5rem'};

    
    border-radius: 10px;
    
    background-color: ${isDeleting && 'tomato'};
    cursor: ${selected ? 'auto' : 'pointer'};

    &:before {
      content: "•";
      position: absolute;
      top: 41px;
      left: -10px;
      
      width: 1px;
      height: ${(selected && '109%') || '141%'}; 
     
    }
  
  
    &:last-child:before {
      top: -11px ;
      height: ${(selected && '133px') || '55px'}; 
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

const InfoTypesStyleWrapper = styled.div(
  ({ selected }) => `

  margin: 10px 0 0 11%;
  position: relative;
  @media (max-width: 600px) {
    margin: 16px 0 0 18%;



  }

  &:before {
    content: "";
    position: absolute;
    top: -16px;
    left: -31px;
    border-left: 2px dashed #a2a5b5;
    width: 1px;
    height: ${(selected && '109%') || '115%'}; 
   
  }

 
  &:after {
    content: "";
    position: absolute;
    border-top: 2px dashed #a2a5b5;
    top: ${(selected && '57px') || '44px'};
    left: -30px;
    width: ${(selected && '30px') || '29px'}; 
  }

  &:last-child:before {
    top: -11px ;
    height: ${(selected && '133px') || '113%'}; 
  }
`
);

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
// ns__custom_end unit: appSpec, comp: SubInfoType, loc: styling

const SubInfoComponent = ({
  infoType,
  instanceId,
  childState,
  parentId,
  refetchQueries,
  updateInstance,
  deleteInstance,
  onClick,
  parentLabel,
  setParentLabel,
  label,
}) => {

  const [infoTypeValue, setSubInfoTypeValue] = useState('');
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [selectedInfoTypeId, setselectedInfoTypeId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const [isSaving, setIsSaving] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [labelParent, setLabel] = useState(label);
  const wrapperRef = createRef();

  console.log('child data',labelParent)


  const styles = useStyles();

  useEffect(() => {
    if (!currentId) {
      setCurrentId(instanceId);
    }
  }, [isEditMode]);

  async function handleInfoTypeValueSave() {
    setIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          value: infoTypeValue,
          instanceId: currentId,
        }),
      },
      refetchQueries,
    });

    setIsEditMode(false);

    setIsSaving(false);
  }

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: currentId,
          }),
        },
        refetchQueries,
      });
    } catch (e) {
      setIsDeleting(false);
    }
  };

  const handleSubInfoTypeValueChange = (e) => {
    setSubInfoTypeValue(e.target.value);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
  };

  const handleCanelDelete = () => {
    setIsDeleteMode(false);
  };

  if (isEditMode) {
    return (
      <SubInfoTypeWrapper>
        <EditInstanceForm
          id={currentId}
          label='SubInfoType Value:'
          value={infoTypeValue}
          onChange={handleSubInfoTypeValueChange}
          onSave={handleInfoTypeValueSave}
          onCancel={handleCancelEdit}
          disabled={isSaving}
        />
      </SubInfoTypeWrapper>
    );
  }

  if (isDeleteMode) {
    return (
      <SubInfoTypeWrapper isDeleting={isDeleting}>
        {infoTypeValue}
        <DeleteInstanceMenu
          onDelete={handleDelete}
          onCancel={handleCanelDelete}
          disabled={isDeleting}
        />
      </SubInfoTypeWrapper>
    );
  }

  //

  const checkID = (id, data) => {
    if (!data || !data.length) return null;
    if (id === data[0].parentId) {
      setShow(!show);
      return true;
    }
    return true;
  };

  if (!infoType) return null;

  return (
    <>
      <div ref={wrapperRef} key={v4()}>
        {childState && childState.map((instance) => {

          console.log('recursive', instance,instanceId);
          if (instanceId === instance.parentId) {
            return (
              <InfoTypesStyleWrapper key={v4()}>
                <div
                  role='presentation'
                  onClick={() => {
                    checkID(instance.id, instance._children);
                    setselectedInfoTypeId(instance.id);
                    setCurrentId(instance.id);
                  }}
                  onChange={() => handleSubInfoTypeValueChange}
                >
                  <InputLabel className={styles.titleLabel}>
                    Sub Info Type
                  </InputLabel>
                  <TitleWrapper>
                    {' '}
                    {instance.value}
                    <div onClick={instance.id} >
                      <Button
                        type='button'
                        onClick={() => {
                          setIsEditMode(true);
                          setCurrentId(instance.id);
                          setSubInfoTypeValue(instance.value);
                        }}
                      >
                        &#9998;
                      </Button>
                      <Button
                        type='button'
                        onClick={() => {
                          setIsDeleteMode(true);
                          setCurrentId(instance.id);
                          setSubInfoTypeValue(instance.value);
                        }}
                      >
                        &#128465;
                      </Button>
                    </div>
                  </TitleWrapper>
                </div>
                <Child
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...instance}
                  show={show}
                  parentId={parentId}
                  instanceId={instance.id}
                  selected={instance.id === currentId}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  instanceId={instanceId}
                  refetchQueries={refetchQueries}
                  updateInstance={updateInstance}
                  deleteInstance={deleteInstance}
                  onClick={onClick}
                  currentId={currentId}
                  setParentLabel={setParentLabel}
                  parentLabel={instance.value}
                />
                {instance._children.length ? (
                  <SubInfoComponent
                    data={instance._children}
                    key={v4()}
                    refetchQueries={refetchQueries}
                    updateInstance={updateInstance}
                    deleteInstance={deleteInstance}
                    onClick={(id) => setCurrentId(id)}
                    selected={currentId === selectedInfoTypeId}
                    setLabel={() => setLabel(instance.value)}
                  />
                ) : null}
              </InfoTypesStyleWrapper>
            );
          }
        })}
      </div>
      <SubInfoTypeCreationForm
        key={v4()}
        parentId={parentId}
        childId={currentId}
        refetchQueries={refetchQueries}
        label={labelParent}
      />
    </>
  );
};

const Child = ({
  _children,
  instanceId,
  show,
  parentId,
  refetchQueries,
  last,
  updateInstance,
  isEditMode,
  deleteInstance,
  onClick,
  currentId,
  selected,
  label,
  parentLabel,
  setParentLabel
}) => {
  const [currentChildId, setChildCurrentId] = useState(null);
  const [showChild, setshowChild] = useState(!show);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [infoTypeValue, setChildSubInfoTypeValue] = useState(null);
  const [childState, setChildState] = useState([]);
  const [isChildEditMode, setIsChildEditMode] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [labelValue, setLabelValue] = useState(parentLabel);
  const styles = useStyles();

  console.log('labelvalll',parentLabel)


  useEffect(() => {
    setChildState(_children);
    if (!currentId) {
      setChildCurrentId(instanceId);
    }
  }, [isEditMode, isChildEditMode, currentId]);

  // if (!selected) {
  //   return (
  //     <SubInfoTypeWrapper onClick={() => onSelect(infoType.id)}>
  //       {infoTypeValue}
  //     </SubInfoTypeWrapper>
  //   );
  // }

  async function handleInfoTypeValueSave() {
    setIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          value: infoTypeValue,
          instanceId: currentId,
        }),
      },
      refetchQueries,
    });

    setIsChildEditMode(false);
    setIsSaving(false);
  }

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: currentId,
          }),
        },
        refetchQueries,
      });
    } catch (e) {
      setIsDeleting(false);
    }
  };

  const handleSubInfoTypeValueChange = (e) => {
    setChildSubInfoTypeValue(e.target.value);
  };

  const handleCancelEdit = () => {
    setIsChildEditMode(false);
  };

  const handleCanelDelete = () => {
    setIsDeleteMode(false);
  };

  if (isChildEditMode) {
    return (
      <SubInfoTypeWrapper>
        <EditInstanceForm
          id={instanceId}
          label='SubInfoType Value:'
          value={infoTypeValue}
          onChange={handleSubInfoTypeValueChange}
          onSave={handleInfoTypeValueSave}
          onCancel={handleCancelEdit}
          disabled={isSaving}
        />
      </SubInfoTypeWrapper>
    );
  }

  if (isDeleteMode) {
    return (
      <SubInfoTypeWrapper isDeleting={isDeleting}>
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
    <>
     
      {childState && childState.map((instance) => {
        return (
          <React.Fragment key={v4()} >
            {selected && show ? (
              <InfoTypesStyleWrapper key={v4()}>
                <div
                  role='presentation'
                  onClick={() => {
                    setChildCurrentId(instance.id);
                    setLabelValue(instance.value);
                    // if (!last) {
                    //   return null;
                    // }
                    // onClick();
                  }}
                  onChange={handleSubInfoTypeValueChange}
                  key={v4()}
                >
                  <TitleWrapper>
                  <InputLabel className={styles.titleLabel}>
                    Sub Info Type for {parentLabel}
                  </InputLabel>                    
                  {instance.value}
                    <div>
                      <Button
                        type='button'
                        onClick={() => {
                          setIsChildEditMode(true);
                          setChildCurrentId(instance.id);
                          setChildSubInfoTypeValue(instance.value);
                        }}
                      >
                        &#9998;
                      </Button>
                      <Button
                        type='button'
                        onClick={() => {
                          setIsDeleteMode(true);
                          setChildCurrentId(instance.id);
                          setChildSubInfoTypeValue(instance.value);
                        }}
                      >
                        &#128465;
                      </Button>
                    </div>
                  </TitleWrapper>
                </div>

                <Child
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...instance}
                  show={showChild}
                  last
                  instanceId={instance.id}
                  refetchQueries={refetchQueries}
                  updateInstance={() => updateInstance}
                  deleteInstance={() => deleteInstance}
                  onClick={!last ? onClick : null}
                  currentId={currentId}
                  selected={selected}
                  label={label}
                />
              </InfoTypesStyleWrapper>
            ) : null}
          </React.Fragment>
        );
      })}

{/* <SubInfoTypeCreationForm
        key={v4()}
        parentId={parentId}
        childId={currentId}
        refetchQueries={refetchQueries}
        label={labelValue}
      /> */}
      {selected && !last ? (
     <SubInfoTypeCreationForm
     key={v4()}
     parentId={parentId}
     childId={currentId}
     refetchQueries={refetchQueries}
     label={labelValue}
   />
      ) : null}
    </>
  );
};

export default compose(
  graphql(EXECUTE, { name: 'updateInstance' }),
  graphql(EXECUTE, { name: 'deleteInstance' })
)(SubInfoComponent, Child);
