//API key and API URL
const apiKey = 'API KEY GOES HERE';
const apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json';


//This function finds the first event from a string keyword
function searchEvents(keyword) {
  const url = `${apiUrl}?keyword=${keyword}&apikey=${apiKey}`;

  // Fetch 
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Response Error.');
      }
      return response.json();
    })
    .then(data => {
      // Filtering data section
      // (can experiment with)
      if (data._embedded && data._embedded.events && data._embedded.events.length > 0) {
        const firstEvent = data._embedded.events[0];
        console.log('First Event:', firstEvent);

      } else {
        console.log('No events found.')
      }

    })
    .catch(error => {
      console.error('There was a problem with fetch:', error);
    });
}

//This function finds the first event from a string zipcode
function zcSearchEvents(zipcode) {
  const url = `${apiUrl}?postalCode=${zipcode}&apikey=${apiKey}`;

  // Fetch 
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Response Error.');
      }
      return response.json();
    })
    .then(data => {
      // Filtering data section
      // (can experiment with)
      if (data._embedded && data._embedded.events && data._embedded.events.length > 0) {
        const firstEvent = data._embedded.events[0];
        console.log('First Event:', firstEvent);

      } else {
        console.log('No events found.')
      }

    })
    .catch(error => {
      console.error('There was a problem with fetch:', error);
    });

}

//This function finds the first event from a string keyword AND zipcode
function proximitySearchEvents(keyword, zipcode) {
  const url = `${apiUrl}?keyword=${keyword}&postalCode=${zipcode}&apikey=${apiKey}`;

  // Fetch 
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Response Error.');
      }
      return response.json();
    })
    .then(data => {
      // Filtering data section
      // (can experiment with)
      if (data._embedded && data._embedded.events && data._embedded.events.length > 0) {
        const firstEvent = data._embedded.events[0];
        console.log('First Event:', firstEvent);

      } else {
        console.log('No events found.')
      }

    })
    .catch(error => {
      console.error('There was a problem with fetch:', error);
    });

}

//Testing Section
searchEvents('bruno mars')

