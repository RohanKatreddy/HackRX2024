import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';


function PharmacyMap () {
    return (
        <div className={"border rounded-4"} style={{width: '60vw', marginLeft: "auto", marginRight: "auto", overflow: "hidden"}}>
        <APIProvider apiKey={"AIzaSyAguTSvwNrK--S67kME0vjGCETsh251diw"}>
                
                <Map
                style={{width: '60vw', height: '60vh'}}
                defaultZoom={12.5}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                defaultCenter={{lat: 45.9636, lng: -66.6431}}
                >
                    <Marker position={{lat: 45.968150, lng: -66.630390}}/>
                    <Marker position={{lat: 45.976770, lng: -66.648310}}/>
                    <Marker position={{lat: 45.962430, lng: -66.645180}}/>
                    <Marker position={{lat: 45.958100, lng: -66.656930}}/>
                    <Marker position={{lat: 45.945141, lng: -66.641533}}/>
                </Map>
            </APIProvider>
        </div>
    );
}

export default PharmacyMap
