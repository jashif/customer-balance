const axios = require('axios');
const events = require('../docs/task-a.sample.json');

const baseURL = 'http://localhost:3001/api/events'; // Adjust this URL to your API's actual URL

async function sendEvent(event) {
  console.log('Sending event:', event);
  const url = `${baseURL}/${event.market}/${event.customerId}`;
  try {
    const response = await axios.post(url, {
      id: event.id,
      time: event.time,
      type: event.type,
      reasonTime: event.reasonTime,
      reason: event.reason,
      businessUnit: event.businessUnit,
      value: event.value,
    });
    console.log('Event sent successfully:', response.data);
  } catch (error) {
    console.error('Failed to send event:', error.response ? error.response.data : error.message);
  }
}

async function sendAllEvents() {
  console.log('Sending all events...');
  for (let event of events) {
    await sendEvent(event);
  }
}

sendAllEvents();
