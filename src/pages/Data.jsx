import React, { useState, useEffect } from "react";
import {
  Page,
  Navbar,
  NavbarBackLink,
  List,
  ListItem,
  Button,
  ListInput,
} from "konsta/react";
import { DataIcon, ObjectIcon } from "../components/Icons.jsx";

export default function DataPage() {
  const [data, setData] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);
  const [editKeyInput, setEditKeyInput] = useState('');
  const [editValueInput, setEditValueInput] = useState('');

  useEffect(() => {
    async function initializeSharedObject() {
      const { default: SharedObject } = await import("https://ws.storybrain.io/shared-object");

      const sharedObject = new SharedObject({
        object: "obj1",
        onUpdate: ({ object }) => {
          console.log("Received update:", object);
          setData(object);
        },
      });
    }

    initializeSharedObject();
  }, [setData]);

  const handleEditClick = (key, value, index) => {
    setEditKeyInput(key); 
    setEditValueInput(value);
    setEditingIndex(index);
  };

  const handleUpdateClick = async () => {
    const newData = { ...data };
  
    if (editKeyInput !== Object.keys(data)[editingIndex]) {
      delete newData[Object.keys(data)[editingIndex]];
    }
  
    newData[editKeyInput] = editValueInput;
  
    const { default: SharedObject } = await import("https://ws.storybrain.io/shared-object");
    const sharedObject = new SharedObject({ object: "obj1" });
    await sharedObject.update(newData);
  
    setData(newData);
  
    setEditKeyInput('');
    setEditValueInput('');
  
    setEditingIndex(null);
  };
  

  return (
    <Page>
      <Navbar
        title="Data"
        left={<NavbarBackLink onClick={() => history.back()} />}
      />
      <List strongIos outlineIos>
        {Object.keys(data).length > 0 ? (
          Object.entries(data).map(([key, value], index) => (
            <div key={key} className="mt-10 mx-2">
              {editingIndex === index ? (
                <div>
                  <ListInput
                    outline
                    label="Key"
                    floatingLabel
                    type="text"
                    placeholder="Edit key"
                    value={editKeyInput}
                    onChange={(e) => setEditKeyInput(e.target.value)}
                  />
                  <ListInput
                    outline
                    label="Value"
                    floatingLabel
                    type="text"
                    placeholder="Edit value"
                    value={editValueInput}
                    onChange={(e) => setEditValueInput(e.target.value)}
                  />
                  <Button rounded 
                   
                  strong="true"
                    className="mt-4"
                    onClick={handleUpdateClick}
                  >
                    Update
                  </Button>
                </div>
              ) : (
                <ListItem
                  className="mt-10"
                  media={ObjectIcon}
                  title={"Obj1"}
                  after="Edit"
                  link
                  onClick={() => handleEditClick(key, value, index)}
                />
              )}
            </div>
          ))
        ) : (
          <ListItem
            title="Loading..."
            after="Please wait"
          />
        )}
      </List>
    </Page>
  );
}

DataPage.displayName = "DataPage";
DataPage.icon = DataIcon;
