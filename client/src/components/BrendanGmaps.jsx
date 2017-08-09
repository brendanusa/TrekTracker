import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';
import axios from 'axios';

class Gmaps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 0,
        lng: 0
      },
      selectedPost: {},
      displayPost: false
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  // fetch location helper
  fetchLocation(locationPoint) {
    axios.get('/location')
      .then((response) => {
      	console.log('fetching location!')
        let { lat, lng } = response.data;
        this.setState({
          currentLocation: {
            lat,
            lng
          }
        });
      })
      .catch((error) => {
        console.log('fetch location error!', error);
    	});
  }

  // Display the info for the post (in an iframe?)
  // displayPost(post) {

  // }

  // Marker click handler
  onMarkerClick(marker, e) {
    // change current post and display
    axios.get('/posts', {
	    params: {
	    	// INSERT LOCATION PROPERTY FOR POSTS AND COORDS FROM MAPS API

	    }
	  })
	  .then((response) => {
	    console.log('marker click success!');
	    // EXTRACT POST ID FROM RESPONSE
	    this.setState({
	    	// INSERT POST ID
	      selectedPost: ,
	      displayPost: true
	    });
	  })
	  .catch((error) => {
	    console.log('marker click error!');
	  });
  }

  // Map click handler
  onMapClick(e) {
  	// change current location to selected coords
  	// INSERT MAP LOCATION
  	this.fetchLocation(e.???)
  }


  render() {
    return (
      <div>
        <Map

          <Marker
            position={this.state.currentLocation}
            icon={{
              url: "http://i.imgur.com/xCnYgCV.png",
              anchor: new google.maps.Point(0,45),
              scaledSize: new google.maps.Size(45,45)
            }}/>

          </Map>
      </div>
    )
  }
}

MapContainer.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number
}

export default GoogleApiWrapper({
  apiKey: (TOKEN)
})(MapContainer)