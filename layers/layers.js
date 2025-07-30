var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UMKMSheet1_1 = new ol.format.GeoJSON();
var features_UMKMSheet1_1 = format_UMKMSheet1_1.readFeatures(json_UMKMSheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UMKMSheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UMKMSheet1_1.addFeatures(features_UMKMSheet1_1);
var lyr_UMKMSheet1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UMKMSheet1_1, 
                style: style_UMKMSheet1_1,
                popuplayertitle: "UMKM - Sheet1",
                interactive: true,
                    title: '<img src="styles/legend/UMKMSheet1_1.png" /> UMKM - Sheet1'
                });

lyr_OSMStandard_0.setVisible(true);lyr_UMKMSheet1_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_UMKMSheet1_1];
lyr_UMKMSheet1_1.set('fieldAliases', {'No': 'No', 'Kategori Usaha': 'Kategori Usaha', 'Nama Usaha': 'Nama Usaha', 'Lintang': 'Lintang', 'Bujur': 'Bujur', });
lyr_UMKMSheet1_1.set('fieldImages', {'No': 'Range', 'Kategori Usaha': 'TextEdit', 'Nama Usaha': 'TextEdit', 'Lintang': 'TextEdit', 'Bujur': 'TextEdit', });
lyr_UMKMSheet1_1.set('fieldLabels', {'No': 'hidden field', 'Kategori Usaha': 'inline label - always visible', 'Nama Usaha': 'inline label - always visible', 'Lintang': 'hidden field', 'Bujur': 'hidden field', });
lyr_UMKMSheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});