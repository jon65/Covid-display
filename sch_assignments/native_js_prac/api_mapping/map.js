mapboxgl.accessToken = "pk.eyJ1IjoidGVhbTEyNiIsImEiOiJja2ZwNXZ4cnQwN3diMnhyNWV4ejJpNWFwIn0.tR6rWRqLKTIXWxPaXCO5rQ";
let map = new  mapboxgl.Map({
	 container: 'map',
	center: [144.9648731,-37.8182711],
	zoom: 16,
	style: 'mapbox://styles/mapbox/streets-v9'
});
function panToClayton(){	
    let monashClayton = [145.1343136, -37.9110467];
    map.panTo(monashClayton);
}
function showPath(){}
function showPolygon(){}
function showCircle(){}

let locations = [
	{
		coordinates: [145.133934, -37.910572],
		description: 'Faculty of Information Technology'
	},
	{
		coordinates: [145.1338553, -37.9092552],
		description: 'Faculty of Engineering'
	},
	{
		coordinates: [145.132676, -37.913843],
		description: 'Learning and Teaching Building'
	},
	{
		coordinates: [145.137224, -37.914594],
		description: 'Multi-level Car Parking'
	}
];