import React, { useState } from "react";
import styled from "styled-components";
import { EXECUTE } from "@nostack/no-stack";
import compose from "@shopify/react-compose";
import { graphql } from "@apollo/react-hoc";

import {
  UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  ADD_HAS_PARENT_FOR_PARENT_ACTION_ID,
  CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
} from "../../../config";

import InfoTypeChild from "../InfoTypeChildren";
import EditInstanceForm from "../../EditInstanceForm";
import DeleteInstanceMenu from "../../DeleteInstanceMenu";

// add styling here
const InfoTypeStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
  margin: 2em 1em;
  padding: 1.5em;
  border: ${selected ? "1px solid aquamarine" : "1px solid white"};
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888888;
  background-color: ${isDeleting && "tomato"};
  cursor: ${selected ? "auto" : "pointer"};

  &:hover {
    border: 1px solid aquamarine;
  }
`
);

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1em;
  padding: 0;
  color: #bbbbbb;
  transition: color 0.5s ease;
  &:hover {
    color: ${(props) => props.hoverColor || "#000000"};
  }
`;

function InfoType({
  infoType,
  parentId,
  createInfoType,
  hasParentId,
  selected,
  updateInstance,
  deleteInstance,
  saveInstance,
  refetchQueries,
  onSelect,
}) {
  const infoTypeId = useState(infoType.id);

  const [infoTypeValue, updateInfoTypeValue] = useState(infoType.value);
  const [infoTypeValue1, updateInfoTypeValue1] = useState("");

  const infoTypeChildren = useState(infoType._children) || [];

  const [isEditMode, updateIsEditMode] = useState(false);
  const [isSaving, updateIsSaving] = useState(false);
  const [isDeleteMode, updateIsDeleteMode] = useState(false);
  const [isDeleting, updateIsDeleting] = useState(false);

  // if (!selected) {
  //   return (
  //     <InfoTypeStyleWrapper onClick={() => onSelect(infoType.id)}>
  //       { infoTypeValue }
  //     </InfoTypeStyleWrapper>
  //   );k
  // }

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
          label="InfoType Value:"
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

  async function handleSubmit(e) {
    e.preventDefault();
    if (!infoTypeValue1) {
      return;
    }

    try {
      const createInfoTypeResponse = await createInfoType({
        variables: {
          actionId: CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            value: infoTypeValue1,
          }),
          unrestricted: false,
        },
        refetchQueries,
      });

      const newInfoTypeData = JSON.parse(createInfoTypeResponse.data.Execute);
      const createChildInfoTypeResponse = await saveInstance({
        variables: {
          actionId: ADD_HAS_PARENT_FOR_PARENT_ACTION_ID,
          executionParameters: JSON.stringify({
            childInstanceId: infoType.id, // Experience
            parentInstanceId: newInfoTypeData.instanceId, // Year
          }),
          unrestricted: false,
        },
        refetchQueries,
      });
    } catch (e) {
      console.log(e);
      updateIsDeleting(false);
    }
  }

  function handleCancelDelete() {
    updateIsDeleteMode(false);
  }
  function handleChange(e) {
    updateInfoTypeValue1(e.target.value);
  }
  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e);
    }
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
    !hasParentId && (
      <div className=" " selected={selected}>
        <div class="box">
          <input
            type="checkbox"
            name="checkbox"
            className="checkBoxActive"
            id={infoType.id}
            value="value"
          />
          <label for={infoType.id}>
            {" "}
            <small class="grey--text"> Info Type: </small> {infoTypeValue}
          </label>
          <span>
            <Button type="button" onClick={() => updateIsEditMode(true)}>
              &#9998;
            </Button>
            <Button type="button" onClick={() => updateIsDeleteMode(true)}>
              &#128465;
            </Button>
          </span>
        </div>
        <form>
          <ul style={{ marginLeft: "1em", marginTop: "1em" }}>
            {infoTypeChildren[0].map((value, index) => {
              return (
                <li key={index} className="box">
                  <div>
                    <InfoTypeChild
                      infoType={infoType}
                      parentId={parentId}
                      createInfoType={createInfoType}
                      hasParentId={hasParentId}
                      selected={selected}
                      updateInstance={updateInstance}
                      deleteInstance={deleteInstance}
                      saveInstance={saveInstance}
                      refetchQueries={refetchQueries}
                      value={value}
                    ></InfoTypeChild>
                  </div>
                </li>
              );
            })}
            <li>
              <input
                className="input"
                placeholder="More Info"
                id="infoType-value"
                type="text"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={infoTypeValue1}
              />
            </li>
          </ul>
          <button type="button" onClick={() => handleSubmit()}>
            Create Sub-Info Type
          </button>
          <br></br>
        </form>
      </div>
    )
  );
}

export default compose(
  graphql(EXECUTE, { name: "createInfoType" }),
  graphql(EXECUTE, { name: "updateInstance" }),
  graphql(EXECUTE, { name: "deleteInstance" }),
  graphql(EXECUTE, { name: "saveInstance" })
)(InfoType);
