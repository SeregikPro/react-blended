import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventsById } from 'services/eventsApi';

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    fetchEventsById(eventId).then(setEvent);
  }, [eventId]);

  return event;
};
