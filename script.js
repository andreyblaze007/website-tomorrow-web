var map = L.map('map').setView([51.505, -0.09], 13);

var topographyAndPlaces = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
    layers: 'TOPO-WMS,OSM-Overlay-WMS'
}).addTo(map);


//London
var ChelseaFc = L.icon({
    iconUrl: 'ChelseaFC.png',

    iconSize:     [55, 55], // size of the icon
});



var ArsenalFC = L.icon({
    iconUrl: 'ArsenalFC.png',

    iconSize:   [45, 55], // size of the icon
});

var Dinamo = L.icon({
    iconUrl: 'Dinamo.png',

    iconSize:   [45, 55], // size of the icon
});


var BrentfordFC = L.icon({
    iconUrl: 'Brentford.png',

    iconSize:   [55, 55], // size of the icon
});


var CrystalPalace = L.icon({
    iconUrl: 'CrystalPalace.png',

    iconSize:   [45, 55], // size of the icon
});


var Fulham = L.icon({
    iconUrl: 'Fulham.png',

    iconSize:   [45, 55], // size of the icon
});


var Tottenham = L.icon({
    iconUrl: 'Tottenham.png',

    iconSize:   [45, 55], // size of the icon
});


var WestHam = L.icon({
    iconUrl: 'WestHam.png',

    iconSize:   [45, 55], // size of the icon
});


//


var LutonFC = L.icon({
    iconUrl: 'LutonTown.png',

    iconSize:   [55, 55], // size of the icon
});


var AstonVilla = L.icon({
    iconUrl: 'AstonVilla.png',

    iconSize:   [55, 55], // size of the icon
});


var Bournemouth = L.icon({
    iconUrl: 'Bournemouth.png',

    iconSize:   [45, 55], // size of the icon
});


var Brighton = L.icon({
    iconUrl: 'Brighton.png',

    iconSize:   [55, 55], // size of the icon
});


var Burnley = L.icon({
    iconUrl: 'Burnley.png',

    iconSize:   [45, 45], // size of the icon
});


var Everton = L.icon({
    iconUrl: 'EvertonFC.png',

    iconSize:   [55, 55], // size of the icon
});


var Liverpool = L.icon({
    iconUrl: 'LiverpoolFC.png',

    iconSize:   [55, 55], // size of the icon
});


var ManCity = L.icon({
    iconUrl: 'ManCity.png',

    iconSize:   [55, 55], // size of the icon
});


var ManUtd = L.icon({
    iconUrl: 'ManUnited.png',

    iconSize:   [55, 55], // size of the icon
});


var Newcastle = L.icon({
    iconUrl: 'Newcastle.png',

    iconSize:   [55, 55], // size of the icon
});


var NottinghamForest = L.icon({
    iconUrl: 'NottinghamForest.png',

    iconSize:   [45, 55], // size of the icon
});


var SheffieldUnited = L.icon({
    iconUrl: 'SheffieldUnited.png',

    iconSize:   [55, 55], // size of the icon
});


var Wolves = L.icon({
    iconUrl: 'Wolves.png',

    iconSize:   [55, 55], // size of the icon
});

//Markers
L.marker([52.590382, -2.130924], {icon: Wolves}).addTo(map).bindPopup('<b>Molineux Stadium</b><br>Wolverhampton Wanderers FC');

L.marker([53.3704338224,-1.47098856607], {icon: SheffieldUnited}).addTo(map).bindPopup("<b>Bramall Lane</b><br>Sheffield United FC");

L.marker([52.939938, 1.13287], {icon: NottinghamForest}).addTo(map).bindPopup("<b>City Ground</b><br>Nottingham Forest FC");

L.marker([54.975170, -1.622539], {icon: Newcastle}).addTo(map).bindPopup("<b>St. James' Park</b><br>Newcastle United FC");

L.marker([53.4631, -2.29139], {icon: ManUtd}).addTo(map).bindPopup("<b>Old Trafford</b><br>Manchester United FC");

L.marker([53.483135, -2.200941], {icon: ManCity}).addTo(map).bindPopup("<b>Etihad Stadium</b><br>Manchester City FC");

L.marker([53.430759, -2.961425], {icon: Liverpool}).addTo(map).bindPopup('<b>Anfield</b><br>Liverpool FC<br><iframe width="260" height="315" src="https://www.youtube.com/embed/cqYiw3R5f8c?si=LQ7yQkj9pctFX6FG&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');

L.marker([53.438751, -2.966681], {icon: Everton}).addTo(map).bindPopup("<b>Goodison Park</b><br>Everton FC");

L.marker([53.789108, -2.230575], {icon: Burnley}).addTo(map).bindPopup("<b>Burnley Football Club</b><br>Burnley FC");

L.marker([50.861782, -0.084357], {icon: Brighton}).addTo(map).bindPopup("<b>American Express Stadium</b><br>Brighton & Hove Albion FC");

L.marker([50.737175, -1.867873], {icon: Bournemouth}).addTo(map).bindPopup("<b>Vitality Stadium</b><br>AFC Bournemouth");

L.marker([52.509090, -1.885249], {icon: AstonVilla}).addTo(map).bindPopup("<b>Villa Park</b><br>Aston Villa FC");

L.marker([51.8841347, -0.4319567], {icon: LutonFC}).addTo(map).bindPopup("<b>Kenilworth Road</b><br>Luton Town FC");

L.marker([51.538811, -0.017136], {icon: WestHam}).addTo(map).bindPopup("<b>London Stadium</b><br>West Ham United FC");

L.marker([51.604252, -0.067007], {icon: Tottenham}).addTo(map).bindPopup("<b>Tottenham Hotspur Stadium</b><br>Tottenham Hotspur FC");

L.marker([51.478710, -0.201702], {icon: Fulham}).addTo(map).bindPopup("<b>Craven Cottage</b><br>Fulham FC");

L.marker([51.422142, -0.071493], {icon: CrystalPalace}).addTo(map).bindPopup("<b>Selhurst Park Stadium</b><br>Crystal Palace FC");

L.marker([51.490715, -0.289048], {icon: BrentfordFC}).addTo(map).bindPopup("<b>Gtech Community Stadium</b><br>Brentford FC");

L.marker([51.554867, -0.109112], {icon: ArsenalFC}).addTo(map).bindPopup("<b>Emirates Stadium</b><br>Arsenal FC");

L.marker([51.481834, -0.191390], {icon: ChelseaFc}).addTo(map).bindPopup("<b>Stamford Bridge</b><br>Chelsea FC");

L.marker([44.48023047178949, 26.062463559749265], {icon: Dinamo}).addTo(map).bindPopup("<b>Stadionul Arcul de Triumf</b><br>FC Dinamo Bucuresti");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("There are no stadiums in the area you have clicked.")
        .openOn(map);
}

map.on('click', onMapClick);

//All the coding I've followed on was the one in the leaflet API, mainly focused on how to add the map and an icon