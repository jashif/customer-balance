const axios = require('axios');
const events = require('../docs/task-a.sample.json');

const baseURL = 'https://customer-balance-ynxku3oura-ey.a.run.app/api/events'; // Adjust this URL to your API's actual URL

async function sendEvent(event) {
  const url = `${baseURL}/${event.market}/${event.customerId}`;
  try {
    const response = await axios.post(url, {
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
  for (let event of events) {
    await sendEvent(event);
  }
}

sendAllEvents();

//{"id":"iKplH7z7BSvYvi_m-PDJM","time":1703941515099,"market":"FI","customerId":"fi.customer-03","reason":"ATTEND_EVENT","reasonTime":1702261479942,"businessUnit":"BU03","type":"INCREASED","value":19},
