import React, { useState } from 'react';
import { graphql } from '@apollo/react-hoc';
import styled, { keyframes } from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';

// ns__custom_start unit: appSpec, comp: SubChild_creation, loc: addedImports
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, TextField, InputAdornment } from '@material-ui/core';
import IconButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {
  CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  ADD_HAS_PARENT_FOR_PARENT_ACTION_ID,
} from '../../config';

// ns__custom_end unit: appSpec, comp: SubChild_creation, loc: addedImports

// ns__custom_start unit: appSpec, comp: SubChild_creation, loc: styling
// change styling here

const SubInfoStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
    // ns__custom_start unit: appSpec, comp: Screen, loc: styling
    // add styling here
    margin: 2rem 0 .2rem 4.6rem;
    @media (max-width: 600px) {
      // margin:  2rem 0 .2rem 5rem;
      margin: 32px 0 0px 38%;  
      width: 100%;
  
    }
    // padding: ${selected ? '0' : '1.5rem'};
    
    border-radius: 10px;
    
    background-color: ${
      (isDeleting && 'tomato') || (selected && 'white') || ''
    };
    cursor: ${selected ? 'auto' : 'pointer'};
    position: relative;
  
    &:before {

      content: "";
      position: absolute;
      top: -31px;
      left: -29px;
      border-left: 2px dashed #a2a5b5;
      width: 1px;
      height: ${(selected && '109%') || '138%'}; 
     
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
      top: -33px ;
      height: ${(selected && '90px') || '77px'}; 
    }
    // ns__custom_end unit: appSpec, comp: Screen, loc: styling
  `
);
const CustomTextInput = styled(TextField)`
  @media (max-width: 600px) {
    .MuiInputLabel-outlined {
    }
  }
`;
const Form = styled.div`
  margin: 2em;
  padding: 1.5em;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Input = styled.input`
  :focus,
  textarea:focus,
  select:focus {
    outline: none;
    border: 0;
  }
  border: 0;
  -webkit-appearance: none;
  background-color: inherit;
  padding: 10px 0;
  border-radius: 10px;
`;

const InputContainer = styled.div`
  background-color: white;
  border-radius: 10px;
`;

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    
  }
  100% {
    opacity: 1;
    
  }
`;

const CalloutBox = styled.div`
  padding: 1rem;
  animation: ${fadeInDown} 1.5s;
  background-color: #F3E196;
  width: inherit;
  border-radius: 10px;  
  position: relative;
  margin: .5rem;
  display: flex;
  justify-content: space-between;

  

  :after{
    background-color: #F3E196;
    position: absolute;
    width: 30px;
    height: 10px;
    border-top: 0px solid #F3E196;
    border-right: 2px solid #F3E196;
    border-left: 0px solid #F3E196;
    border-bottom: 2px solid #F3E196;
    left: 93%;
    
    content: '';
    transform: rotate(45deg);
    margin-top: -13px;
    }
  }
`;

const useStyles = makeStyles({
  button: {
    minWidth: 0,
  },
  customWidth: {
    maxWidth: '500',
    minWidth: '300',
    backgroundColor: 'blue',
  },
  helpIcon: {
    fontSize: '1.5rem',
    color: '#FDCC00',
  },
  closeIcon: {
    color: 'white',
    fontSize: '1rem',
  },
});

const Button = styled.button`
  margin-left: 1em;
`;

const InputIcon = styled(InputAdornment)`
  @media (max-width: 600px) {
    && {
      display: none;
    }
  }
`;

// ns__custom_end unit: appSpec, comp: SubChild_creation, loc: styling

const SubChildInfoTypeCreationForm = ({
  childId,
  parentId,
  createSubInfoTypeChild,
  refetchQueries,
  saveInstance,
  // ns__custom_start unit: appSpec, comp: SubChild_creation, loc: addedPropsForCreationForm
  validateSubInfoTypes,
  // ns__custom_end unit: appSpec, comp: SubChild_creation, loc: addedPropsForCreationForm
}) => {
  console.log('child creation id', parentId, childId);
  const [subInfoValue, setSubInfoValue] = useState('');
  const [loading, updateLoading] = useState(false);
  const styles = useStyles();
  const [callout, setCallout] = useState(false);
  const showCalloutBox = callout || validateSubInfoTypes === 0;
  const callOutText = "What's the name of this Sub Info Type?";

  // ns__custom_start unit: appSpec, comp: SubChild_creation, loc: addedDeclaration
  console.log('ipp', childId, parentId);
  // ns__custom_end unit: appSpec, comp: SubChild_creation, loc: addedDeclaration
  function handleChange(e) {
    setSubInfoValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!subInfoValue) {
      return;
    }

    updateLoading(true);

    try {
      debugger;
      // const newInfoTypeData = JSON.parse(createSubInfoResponse.data.Execute);

      let createInfoTypeResponse = await createSubInfoTypeChild({
        variables: {
          actionId: CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            value: subInfoValue,
          }),
          unrestricted: false,
        },
        refetchQueries,
      });
      console.log('subinchikd', createInfoTypeResponse);

      let newInfoTypeData = JSON.parse(createInfoTypeResponse.data.execute);
      console.log('child-creattttt', newInfoTypeData);

      await saveInstance({
        variables: {
          actionId: ADD_HAS_PARENT_FOR_PARENT_ACTION_ID,
          executionParameters: JSON.stringify({
            childInstanceId: childId,
            parentInstanceId: newInfoTypeData.instanceId,
          }),
          unrestricted: false,
        },
        refetchQueries,
      });

      setSubInfoValue('');
      updateLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }

  // ns__custom_start unit: appSpec, comp: SubChild_creation, loc: beforeReturn*/
  const showCallout = () => {
    setCallout(!callout);
  };
  const handleClickShow = () => setCallout(!callout);

  // ns__custom_end unit: appSpec, comp: SubChild_creation, loc: beforeReturn*/

  return (
    <SubInfoStyleWrapper>
      {/* ns__custom_start unit: appSpec, comp: SubChild_creation, loc: insideReturn */}
      <Label htmlFor='screen-value'>
        <CustomTextInput
          label={`New Child Sub Info Type`}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={subInfoValue}
          disabled={loading}
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputIcon position='end'>
                <HelpOutlineIcon
                  className={styles.helpIcon}
                  onClick={handleClickShow}
                />
              </InputIcon>
            ),
          }}
        />
      </Label>
      {showCalloutBox ? (
        <CalloutBox>
          {callOutText}{' '}
          <CloseIcon className={styles.closeIcon} onClick={showCallout} />
        </CalloutBox>
      ) : null}
      {/* ns__custom_end unit: appSpec, comp: SubChild_creation, loc: insideReturn */}
    </SubInfoStyleWrapper>
  );
};

export default compose(
  graphql(EXECUTE, { name: 'createSubInfoTypeChild' }),
  graphql(EXECUTE, { name: 'saveInstance' })
)(SubChildInfoTypeCreationForm);
