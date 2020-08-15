/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */

// ns__file unit: appInfo, comp: App

// ns__custom_start unit: appInfo, comp: App, loc: beforeImports

// ns__custom_end unit: appInfo, comp: App, loc: beforeImports
import React, { useState } from 'react';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import PropTypes from 'prop-types';
import {
  UPDATE_APP_FOR_APP_SPEC_ACTION_ID,
  DELETE_APP_FOR_APP_SPEC_ACTION_ID,
  TYPE_USER_TYPE_ID,
  TYPE_DESCRIPTION_ID,
} from '../../../config';

import EditInstanceForm from '../../EditInstanceForm';
import DeleteInstanceMenu from '../../DeleteInstanceMenu';

import UserTypes from '../UserTypes';
import Descriptions from '../Descriptions';
import AppTitleAccordion from '../../../custom/AppTitleAccordion';

// ns__custom_start unit: appInfo, comp: App, loc: addedImports
// ns__custom_end unit: appInfo, comp: App, loc: addedImports

// ns__custom_start unit: appInfo, comp: App, loc: styling
// add styling here
const AppStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
  margin: 2em 1em;
  padding: 1.5em;
  
  border-radius: 10px;
  
  background-color: ${
    (isDeleting && 'tomato') || (selected && 'white') || '#D2ECEF'
  };
  cursor: ${selected ? 'auto' : 'pointer'};
  width: 50%;

 
`
);
// ns__custom_end unit: appInfo, comp: App, loc: styling

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

AppStyleWrapper.defaultProps = {
  'data-id': 'App__wrapper',
};

Button.defaultProps = {
  'data-id': 'App__button',
};


function App({
  app,
  parentId,
  selected,
  updateInstance,
  deleteInstance,
  refetchQueries,
  onSelect,
}) {
  const [appValue, updateAppValue] = useState(app.value);
  const [isEditMode, updateIsEditMode] = useState(false);
  const [isSaving, updateIsSaving] = useState(false);
  const [isDeleteMode, updateIsDeleteMode] = useState(false);
  const [isDeleting, updateIsDeleting] = useState(false);
  // ns__custom_start unit: appInfo, comp: App, loc: beginning
  // ns__custom_end unit: appInfo, comp: App, loc: beginning

  const userTypeData =
    app.children &&
    app.children.find((child) => child.typeId === TYPE_USER_TYPE_ID);
  const userTypes = userTypeData ? userTypeData.instances : [];
  const descriptionData =
    app.children &&
    app.children.find((child) => child.typeId === TYPE_DESCRIPTION_ID);
  const descriptions = descriptionData ? descriptionData.instances : [];

  if (!selected) {
    return (
      <AppStyleWrapper onClick={() => onSelect(app.id)}>
        {appValue}
      </AppStyleWrapper>
    );
  }

  function handleAppValueChange(e) {
    updateAppValue(e.target.value);
  }

  async function handleAppValueSave() {
    updateIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_APP_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          value: appValue,
          instanceId: app.id,
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
      <AppStyleWrapper>
        <EditInstanceForm
          id={app.id}
          label={`What's the preferred title ${
            appValue ? `for ${appValue}?` : 'off you App?'
          }`}
          value={appValue}
          onChange={handleAppValueChange}
          onSave={handleAppValueSave}
          onCancel={handleCancelEdit}
          disabled={isSaving}
        />
      </AppStyleWrapper>
    );
  }

  async function handleDelete() {
    updateIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_APP_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: app.id,
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
      <AppStyleWrapper selected={selected} isDeleting={isDeleting}>
        {appValue}
        <DeleteInstanceMenu
          onDelete={handleDelete}
          onCancel={handleCancelDelete}
          disabled={isDeleting}
        />
      </AppStyleWrapper>
    );
  }

  return (
    <AppStyleWrapper selected={selected}>
      <AppTitleAccordion
        title={appValue}
        description={descriptions[0] && descriptions[0].value}
      />
      <Button type='button' onClick={() => updateIsEditMode(true)}>
        &#9998;
      </Button>
      <Button type='button' onClick={() => updateIsDeleteMode(true)}>
        &#128465;
      </Button>

      <UserTypes
        userTypes={userTypes}
        appId={app.id}
        label={appValue}
        refetchQueries={refetchQueries}
      />
      {!descriptions.length ? (
        <Descriptions
          descriptions={descriptions}
          appId={app.id}
          label={appValue}
          refetchQueries={refetchQueries}
        />
      ) : null}
    </AppStyleWrapper>
  );
}

export default compose(
  graphql(EXECUTE, { name: 'updateInstance' }),
  graphql(EXECUTE, { name: 'deleteInstance' })
)(App);

App.propTypes = {
  app: PropTypes.object,
  parentId: PropTypes.string,
  selected: PropTypes.bool,
  updateInstance: PropTypes.func,
  deleteInstance: PropTypes.func,
  refetchQueries: PropTypes.array,
  app: PropTypes.shape({
    children: PropTypes.array,
    id: PropTypes.string,
  }),
  // ns__custom_start unit: appInfo, comp: App, loc: addedPropTypes
  // ns__custom_end unit: appInfo, comp: App, loc: addedPropTypes
};
