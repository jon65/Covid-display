

"use strict";

mapboxgl.accessToken = "pk.eyJ1IjoidGVhbTEyNiIsImEiOiJja2ZwNXZ4cnQwN3diMnhyNWV4ejJpNWFwIn0.tR6rWRqLKTIXWxPaXCO5rQ";
let map = new  mapboxgl.Map({
	container: 'map',
	center: [151.488,-32.7033],  
	zoom: 16,
	style: 'mapbox://styles/mapbox/streets-v9'
});


map.on("load",function panToLocation()
{   
    let panLocation = [145.135507,-37.896817];
	map.panTo(panLocation);
});


map.on("load", function showPath() {
	let object = 
    {
        type: "geojson",
        data: {
        type: "Feature",
        properties: {},
        geometry: {
        type: "LineString",
        coordinates: []
        }
        }
        };
        
        for(let i = 0; i < locations.length; i++)
        {
        object.data.geometry.coordinates.push(locations[i].coordinates);
        }
        
        map.addLayer({
        id: "routes",
        type: "line",
        source: object,
        layout: { "line-join": "round", "line-cap": "round" },
        paint: { "line-color": "#888", "line-width": 6 }
        });
	});

let locations = 
[
	{
		coordinates: [145.131971,-37.906071],
		description: 'Name: Prof. Jon <br> location:CSIRO Clayton <br> Order#: 314587585 <br> Signature req: Yes'
	},
	{
		coordinates: [145.123612,-37.920469],
		description: 'Name: Dr. Tan <br> location: Monash Medical Centre <br> Order#: 314587585 <br> Signature req: Yes'
	},
	{
		coordinates: [145.13203,-37.915669],
		description: ' Name: Mr. Nisallocation: Mannix College <br> Order#: 314587585 <br> Signature req: Yes'
	},
	{
		coordinates: [145.142785,-37.905812],
		description: 'Name: Ms. White <br> location: Rusden House <br>  Order#: 698547158 <br> Signature req: No'
	},
	{
		coordinates: [145.135507,-37.896817],
		description: ' location: Australia Post Mount Waverley'
	},
];


for (let i = 0; i < locations.length; i++)
{
	let location = locations[i];
	let marker = new mapboxgl.Marker({ "color": "#FF8C00" }); 
	marker.setLngLat(location.coordinates);

	let popup = new mapboxgl.Popup({ offset: 45});
	popup.setHTML(location.description); 

	marker.setPopup(popup)

	marker.addTo(map);

	popup.addTo(map);
}


