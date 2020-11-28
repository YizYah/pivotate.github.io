/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: UserTypeCreationForm

// ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: beforeImports
// ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: beforeImports

// ns__start_section imports
import React, { useState } from 'react';
import { graphql } from '@apollo/react-hoc';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';

import PropTypes from 'prop-types';

import { CREATE_USER_TYPE_FOR_APP_SPEC_ACTION_ID } from '../../../config';
// ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: addedImports
// <!-- prettier-ignore-start -->
import { keyframes } from 'styled-components';
import { makeStyles } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloseIcon from '@material-ui/icons/Close';
import { TextField, InputAdornment, Container } from '@material-ui/core';
// <!-- prettier-ignore-end -->
// ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const Form = styled.div`
  // ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: styling
  // change styling here
  margin: 2em;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  // ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: styling
`;
// ns__end_section  stylingSection

// ns__start_replacement button
// ns__end_replacement button

// ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: beforeFunction
const Label = styled.label`
  // display: flex;
  // align-items: center;
  // flex-direction: row;
  // width: 100%;
  margin-top: 1rem;
`;

const fadeInDown = keyframes`
0% {
  opacity: 0;
  
}
100% {
  opacity: 1;
  
}
`;
const UserTypeStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
  // ns__custom_start unit: appSpec, comp: UserType, loc: styling
  // add styling here
  // margin: 2rem 0 2rem 1rem;
  padding: ${selected ? '12px' : '1.5em'};
  
  border-radius: 10px;
  border: 1px solid black;
  background-color: ${(isDeleting && 'tomato') || (selected && 'white') || ''};
  cursor: ${selected ? 'auto' : 'pointer'};
  position: relative;
  width: inherit; 

  // ns__custom_end unit: appSpec, comp: UserType, loc: styling
`
);

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
    width: 27px;
    height: 8px;
    border-top: 0px solid #F3E196;
    border-right: 2px solid #F3E196;
    border-left: 0px solid #F3E196;
    border-bottom: 2px solid #F3E196;
    left: 75px;
    
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
    fontSize: '1.2rem',
  },
  textField: {
    width: '100%',
  },
  customContainer: {
    marginTop: '1rem',
  },
});
// ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: beforeFunction

// ns__start_section function
function UserTypeCreationForm({
  parentId,
  createUserType,
  refetchQueries,
  // ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: addedProps
  validateUserTypes,
  onChange,
  label,
  userTypeCreationCount,
  disabled,
  textLabel,
  // ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: addedProps
}) {
  const [userTypeValue, updateUserTypeValue] = useState('');
  const [loading, updateLoading] = useState(false);
  // ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: beginning
  const styles = useStyles();
  const [callout, setCallout] = useState(true);
  let callOutText = '';
  if (userTypeCreationCount < 5) {
    callOutText = textLabel;
  } else {
    callOutText = `What is a User Type ${
      userTypeValue ? `for ${userTypeValue} ?` : ''
    }`;
  }
  // ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: beginning

  // ns__start_section handleChange
  function handleChange(e) {
    updateUserTypeValue(e.target.value);
  }
  // ns__end_section handleChange

  // ns__start_replacement handleSubmit

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userTypeValue) {
      return;
    }

    updateLoading(true);

    const createUserTypeResponse = await createUserType({
      variables: {
        actionId: CREATE_USER_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: parentId,
          value: userTypeValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    });

    // JSON.parse(createUserTypeResponse.data.Execute);

    updateUserTypeValue('');
    updateLoading(false);
  }

  // ns__end_replacement handleSubmit

  // ns__start_replacement handleKeyPress

  function handleKeyPress(e) {
    // ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: insideHandleKeyPress
    // if (e.charCode === 13) {
    //   handleSubmit(e);
    // }
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
    // ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: insideHandleKeyPress
  }

  function handleKeyMouse(e) {
    handleSubmit(e);
  }

  // ns__end_replacement handleKeyPress

  // ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: beforeReturn
  const showCallout = () => {
    setCallout(!callout);
  };
  // ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: beforeReturn

  // ns__start_replacement return

  const handleClickShow = () => setCallout(!callout);

  return (
    <Container className={styles.customContainer} maxWidth='sm'>
      {/* ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: insideReturn */}
      <UserTypeStyleWrapper htmlFor='userType-value'>
        <TextField
          className={styles.textField}
          label='User Type'
          value={userTypeValue}
          onChange={(e) => {
            handleChange(e);
            onChange(e.target.value);
          }}
          onMouseUp={handleKeyMouse}
          onKeyPress={handleKeyPress}
          // placeholder='User Type for Local Hands'
          disabled={loading || disabled}
          variant='outlined'
          noWrap
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <HelpOutlineIcon
                  className={styles.helpIcon}
                  onClick={handleClickShow}
                />
              </InputAdornment>
            ),
          }}
        />
      </UserTypeStyleWrapper>
      {callout ? (
        <CalloutBox>
          {callOutText}
          <CloseIcon className={styles.closeIcon} onClick={showCallout} />
        </CalloutBox>
      ) : null}
      {/* ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: insideReturn */}
    </Container>
  );

  // ns__end_replacement return
}

// ns__end_section function

// ns__start_section  compose
export default compose(graphql(EXECUTE, { name: 'createUserType' }))(
  UserTypeCreationForm
);
// ns__end_section  compose

// ns__start_section propTypes
UserTypeCreationForm.propTypes = {
  parentId: PropTypes.string,
  refetchQueries: PropTypes.array,
  createUserType: PropTypes.func,
  // ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: addedPropTypes
};
// ns__end_section propTypes
