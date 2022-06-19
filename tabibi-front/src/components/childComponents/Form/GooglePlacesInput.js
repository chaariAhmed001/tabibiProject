import React, { useState } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

function GooglePlacesInput({placeholder,name,getCoordinates}) {
    const [address, setAddress] = useState("");
    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        getCoordinates(latLng);
      };
  return (
    <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className='col-6 col-md-12 mb-4'>
                <input className='form-control border bg-light px-4'{...getInputProps({ placeholder:  placeholder })} name={name} required/>
                    <div>
                        {loading ? <div>...loading</div> : null}
                        {suggestions.map((suggestion,index) => {
                            return (
                                <div className='form-control border bg-light px-4' key={index} {...getSuggestionItemProps(suggestion)}>
                                          {suggestion.description}
                                </div>
                            );
                        })}
                    </div>
            </div>
        )}
    </PlacesAutocomplete>
  )
}

export default GooglePlacesInput