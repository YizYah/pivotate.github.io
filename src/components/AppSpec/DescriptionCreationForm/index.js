import React, { useState } from 'react';
import { graphql } from '@apollo/react-hoc';
import styled from 'styled-components';
import { withNoStack, EXECUTE_ACTION } from '@nostack/no-stack';
import compose from '@shopify/react-compose';

import { CREATE_DESCRIPTION_FOR_APP_SPEC_ACTION_ID
 } from '../../../config';

// change styling here
const Form = styled.div`
  margin: 2em;
  padding: 1.5em;
  border: none;
  border-radius: 5px;
  background-color: #F5F5F5;
`;

const Button = styled.button`
  margin-left: 1em;
`;

function DescriptionCreationForm({ parentId, createDescription, refetchQueries }) {
  const [ descriptionValue, updateDescriptionValue ] = useState('');
  const [ loading, updateLoading ] = useState(false);

  function handleChange(e) {
    updateDescriptionValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!descriptionValue) {
      return;
    }

    updateLoading(true);

    const createDescriptionResponse = await createDescription({
      variables: {
        actionId: CREATE_DESCRIPTION_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: parentId,
          value: descriptionValue,
        }),
        unrestricted: false,
      },
      refetchQueries
    });

    const newDescriptionData = JSON.parse(createDescriptionResponse.data.ExecuteAction);

    


    updateDescriptionValue('');
    updateLoading(false);
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }

  return (
    <Form>
      <label htmlFor="description-value">
        Description:
        <input
          id="description-value"
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={ descriptionValue }
          disabled={loading}
        />
      </label>
      <Button type="submit"  disabled={loading}  onClick={handleSubmit}>
        {
          loading
            ? 'Creating Description...'
            : 'Create Description'
        }
      </Button>
    </Form>
  );
}

export default compose(
  graphql(EXECUTE_ACTION, { name: 'createDescription' }),
  
)(DescriptionCreationForm);
