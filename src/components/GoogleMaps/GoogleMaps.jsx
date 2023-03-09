import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './GoogleMaps.css'

const libraries = ['places'];

const defaultCenter = {
    lat: 40.4131401, lng: -3.706334
}

const options = [
    { value: { lat: 40.4131401, lng: -3.706334 }, label: "Centro de Protección Animal de Madrid Salud" },
    { value: { lat: 40.4080885, lng: -3.6993516 }, label: "La Gatoteca" },
    { value: { lat: 40.4152524, lng: -3.7038304 }, label: "SOS Felinos Madrid" },
    { value: { lat: 40.52528, lng: -3.816030 }, label: "La Madrileña Asociación Protectora de Animales" }
];

const GoogleMaps = () => {

    const [address, setAddress] = useState("");
    const [center, setCenter] = useState(defaultCenter);
    const [markerPosition, setMarkerPosition] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);


    const mapStyles = {
        height: "100vh",
        width: "100%",
        border: '15px solid #ffbadb'
    };


    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        console.log(latLng);
        setAddress(value);
        setCenter(latLng);
        setMarkerPosition(latLng);
    };

    const handleChange = (event) => {
        const value = event.target.value;
        const option = options.find((o) => o.label === value);
        setSelectedOption(option);
        setCenter(option.value);
        setMarkerPosition(option.value);
    };

    return (
        <div style={{ margin: '120px 0', display: 'block', alignItems: 'center', textAlign: 'center' }}>
            <h3 style={{ color: '#ffbadb', fontWeight: '900,', padding: '50px 0 30px 0', fontSize: '50px' }}>Encuentra casas de acogida o centros cercanos</h3>

            <LoadScript googleMapsApiKey='AIzaSyDiT0oMbPlcoyQWL8eCXMiE71TmL1QYdOE' libraries={libraries} >
                <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input {...getInputProps({ placeholder: "Gatoteca..." })} style={{ border: '1px solid #ffbadb', width: '500px', borderRadius: '500px', backgroundColor: 'rgb(243, 243, 243)', padding: '6px 5px 6px 10px', margin: '10px 0 30px 0' }} />
                            <select value={selectedOption?.label} onChange={handleChange} style={{ border: '1px solid #ffbadb', width: '500px', borderRadius: '500px', backgroundColor: 'rgb(243, 243, 243)', padding: '6px 5px 6px 10px', margin: '10px 0 30px 10px', color: 'gray' }}>
                                <option value="">Selecciona un centro cercano</option>
                                {options.map((option) => (
                                    <option key={option.label} value={option.label}>{option.label}</option>
                                ))}
                            </select>
                            <div className="autocomplete-items">


                                {suggestions.map((suggestion) => {
                                    const style = {
                                        backgroundColor: suggestion.active ? "#ffbadb" : "transparent",
                                        padding: '10px'
                                    };
                                    return (
                                        <div key={suggestion.placeId} {...getSuggestionItemProps(suggestion, { style })}>
                                            {suggestion.description}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>


                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={center}
                >
                    {markerPosition !== null && <Marker position={markerPosition} />}
                </GoogleMap>


            </LoadScript>

            <h4 id='tit-list-shelters'>QUIZÁ TE INTERESE CONOCER TAMBIÉN</h4>

            <ul className='list-shelters'>
                <li>
                    <a href="https://sosfelinos.org/" target="t_blank">SOS Felinos Madrid</a>
                </li>
                <li>
                    <a href="https://adopcionanimal.es/" target="t_blank">Centro de Protección Animal de Madrid Salud</a>
                </li>
                <li>
                    <a href="https://www.lagatoteca.es/" target="t_blank">La Gatoteca</a>
                </li>
                <li>
                    <a href="https://www.lukotes.es/?gclid=CjwKCAiAmJGgBhAZEiwA1JZolr1jfQM5svaMajqZeLp525Z4k4dhm08I1in4e4NBRhzhBzPKP8iG1hoCWgkQAvD_BwE" target="t_blank">LUKOTES</a>
                </li>
                <li>
                    <a href="https://adopcioneslamadrilena.org/" target="t_blank">Asociación Protectora de Animales La Madrileña</a>
                </li>
                <li>
                    <a href="https://rivanimal.org/" target="t_blank">Rivanimal</a>
                </li>
                <li>
                    <a href="http://www.spap.net/" target="t_blank">Sociedad Protectora de Animales y Plantas (SPAP)</a>
                </li>
                <li>
                    <a href="https://www.wallamascotas.com/web3/" target="t_blank">Wallamascotas</a>
                </li>
                <li>
                    <a href="https://amigoscipamadrid.org/" target="t_blank">Amigos CIPA Madrid</a>
                </li>
                <li>
                    <a href="https://animalrescuespain.es/" target="t_blank">Animal Rescue España</a>
                </li>
            </ul>
        </div>
    )
}

export default GoogleMaps