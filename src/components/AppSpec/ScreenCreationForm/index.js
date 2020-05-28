import React, { useState } from "react";
import { graphql } from "@apollo/react-hoc";
import styled from "styled-components";
import { withNoStack, EXECUTE } from "@nostack/no-stack";
import compose from "@shopify/react-compose";

import { CREATE_SCREEN_FOR_APP_SPEC_ACTION_ID } from "../../../config";

// change styling here
const Form = styled.div`
  margin: 2em;
  padding: 1.5em;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const Button = styled.button`
  margin-left: 1em;
`;

function ScreenCreationForm({ parentId, createScreen, refetchQueries }) {
  const [screenValue, updateScreenValue] = useState("");
  const [loading, updateLoading] = useState(false);

  function handleChange(e) {
    updateScreenValue(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(parentId);

    if (!screenValue) {
      return;
    }

    updateLoading(true);

    const createScreenResponse = await createScreen({
      variables: {
        actionId: CREATE_SCREEN_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: parentId,
          value: screenValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    });

    const newScreenData = JSON.parse(createScreenResponse.data.Execute);

    updateScreenValue("");
    updateLoading(false);
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
  }

  return (
    <form>
      <label htmlFor="screen-value">
        <input
          placeholder="New Screen"
          className="input"
          id="screen-value"
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={screenValue}
          disabled={loading}
        />
      </label>
      <Button type="submit" disabled={loading} onClick={handleSubmit}>
        {loading ? "Creating Screen..." : "Create Screen"}
      </Button>
    </form>
  );
}

export default compose(graphql(EXECUTE, { name: "createScreen" }))(
  ScreenCreationForm
);
