import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
  
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note && note.name) { // Check if 'note' is not null and has the 'name' property
          if (note.image) {
            const url = await Storage.get(note.name);
            note.image = url;
          }
        }
        return note;
      })
    );
  
    setNotes(notesFromAPI);
  }
  

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get("name");
    const description = form.get("description");
    const image = form.get("image");
  
    // Check if 'name' and 'description' are not empty
    if (!name || !description) {
      // Handle the case where 'name' or 'description' is missing
      console.error("Name and description are required.");
      return;
    }
  
    const data = {
      name,
      description,
    };
  
    if (image) {
      // Check if 'image' is not null and has a 'name'
      data.image = image.name;
    }
  
    if (!!data.image) {
      await Storage.put(data.name, image);
    }
  
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
  
    fetchNotes();
    event.target.reset();
  }
  

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Flex justifyContent="space-between" alignItems="center">
        <Button onClick={() => window.location.reload()} style={{ marginLeft: '2rem', width: '15%' }}>Home</Button>
        <Heading level={1} style={{ marginLeft:'auto', marginRight: 'auto', width: '70%' }}>My Notes App</Heading>
        <Button onClick={signOut} style={{ marginLeft: 'auto', width: '15%'}} marginRight="2rem">Sign Out</Button>
      </Flex>
      <div style={{borderBottom: '1px solid black', marginTop:"1rem"}} />
      <br />
      <Heading level={3}>Create a new note</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={3}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            {note.image && (
              <Image
                src={note.image}
                alt={`visual aid for ${notes.name}`}
                style={{ width: 400 }}
              />
            )}
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      <View
          name="image"
          as="input"
          type="file"
          style={{ alignSelf: "end" }}
        />
    </View>
  );
};

export default withAuthenticator(App);