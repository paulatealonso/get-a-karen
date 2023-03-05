import { GoogleMap, LoadScript} from '@react-google-maps/api';



const GoogleMaps = () => {

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 40.4165000, lng: -3.7025600
    }

    return (
        <div>
            <h3>Encuentra centros de adopción cercanos</h3>
            <LoadScript
                googleMapsApiKey='AIzaSyDiT0oMbPlcoyQWL8eCXMiE71TmL1QYdOE'
                >


                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                />

            </LoadScript>
        </div>
    )
}

export default GoogleMaps