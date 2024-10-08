import React, { useState } from 'react';
import { createEvent } from '../api/eventApi';
import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './CreateEventForm.module.css'; // CSS 모듈 import

const CreateEventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEvent = {
        title,
        description,
        startTime,
        endTime,
        location,
        coverImageUrl,
      };
      await createEvent(newEvent);
      alert('Event created successfully!');
      // Reset form fields
      setTitle('');
      setDescription('');
      setStartTime('');
      setEndTime('');
      setLocation('');
      setCoverImageUrl('');
    } catch (error) {
      alert('Failed to create event.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className={styles.formContainer}>
      <Typography variant="h5" className={styles.formTitle}>Create New Event</Typography>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} multiline rows={4} required />
      <TextField type="datetime-local" label="Start Time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required InputLabelProps={{ shrink: true }} />
      <TextField type="datetime-local" label="End Time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required InputLabelProps={{ shrink: true }} />
      <TextField label="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <TextField label="Cover Image URL" value={coverImageUrl} onChange={(e) => setCoverImageUrl(e.target.value)} />
      <Button type="submit" variant="contained" className={styles.submitButton}>Create Event</Button>
    </Box>
  );
};

export default CreateEventForm;