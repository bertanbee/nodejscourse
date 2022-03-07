/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);

mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXNzYmVydGFuIiwiYSI6ImNsMGN0enZ0dzAyb3IzaG11eDduenU0OGkifQ.KEcHLxeWLLK9ibHj11P-PQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: {
        "version": 8,
        "name": "Basic",
        "metadata": {
            "mapbox:type": "default",
            "mapbox:origin": "basic-v1",
            "mapbox:sdk-support": {
                "android": "10.0.0",
                "ios": "10.0.0",
                "js": "2.6.0"
            },
            "mapbox:autocomposite": true,
            "mapbox:groups": {
                "Land, water, & sky, land": {
                    "name": "Land, water, & sky, land",
                    "collapsed": true
                },
                "Land, water, & sky, water": {
                    "name": "Land, water, & sky, water",
                    "collapsed": true
                },
                "Land, water, & sky, built": {
                    "name": "Land, water, & sky, built",
                    "collapsed": true
                },
                "Transit, built": {"name": "Transit, built", "collapsed": true},
                "Buildings, built": {"name": "Buildings, built", "collapsed": true},
                "Walking, cycling, etc., tunnels": {
                    "name": "Walking, cycling, etc., tunnels",
                    "collapsed": true
                },
                "Road network, tunnels": {
                    "name": "Road network, tunnels",
                    "collapsed": true
                },
                "Walking, cycling, etc., surface": {
                    "name": "Walking, cycling, etc., surface",
                    "collapsed": true
                },
                "Road network, surface": {
                    "name": "Road network, surface",
                    "collapsed": true
                },
                "Walking, cycling, etc., barriers-bridges": {
                    "name": "Walking, cycling, etc., barriers-bridges",
                    "collapsed": true
                },
                "Road network, bridges": {
                    "name": "Road network, bridges",
                    "collapsed": true
                },
                "Administrative boundaries, admin": {
                    "name": "Administrative boundaries, admin",
                    "collapsed": true
                },
                "Road network, road-labels": {
                    "name": "Road network, road-labels",
                    "collapsed": true
                },
                "Walking, cycling, etc., walking-cycling-labels": {
                    "name": "Walking, cycling, etc., walking-cycling-labels",
                    "collapsed": true
                },
                "Natural features, natural-labels": {
                    "name": "Natural features, natural-labels",
                    "collapsed": true
                },
                "Point of interest labels, poi-labels": {
                    "name": "Point of interest labels, poi-labels",
                    "collapsed": true
                },
                "Transit, transit-labels": {
                    "name": "Transit, transit-labels",
                    "collapsed": true
                },
                "Place labels, place-labels": {
                    "name": "Place labels, place-labels",
                    "collapsed": true
                }
            },
            "mapbox:decompiler": {
                "id": "basic-galaxy-v1",
                "componentVersion": "11.2.0",
                "strata": [
                    {
                        "id": "basic-v1",
                        "order": [
                            ["land-and-water", "land"],
                            ["land-and-water", "water"],
                            ["land-and-water", "built"],
                            ["transit", "built"],
                            ["buildings", "built"],
                            ["road-network", "tunnels-case"],
                            ["walking-cycling", "tunnels"],
                            ["road-network", "tunnels"],
                            ["transit", "ferries"],
                            ["walking-cycling", "surface"],
                            ["road-network", "surface"],
                            ["transit", "surface"],
                            ["road-network", "surface-icons"],
                            ["walking-cycling", "barriers-bridges"],
                            ["road-network", "bridges"],
                            ["transit", "bridges"],
                            ["road-network", "traffic-and-closures"],
                            ["buildings", "extruded"],
                            ["transit", "elevated"],
                            ["admin-boundaries", "admin"],
                            ["buildings", "building-labels"],
                            ["road-network", "road-labels"],
                            ["walking-cycling", "walking-cycling-labels"],
                            ["transit", "ferry-aerialway-labels"],
                            ["natural-features", "natural-labels"],
                            ["point-of-interest-labels", "poi-labels"],
                            ["transit", "transit-labels"],
                            ["place-labels", "place-labels"],
                            ["land-and-water", "sky"]
                        ]
                    }
                ],
                "components": {
                    "road-network": "11.2.0",
                    "natural-features": "11.1.1",
                    "place-labels": "11.1.1",
                    "admin-boundaries": "11.1.1",
                    "point-of-interest-labels": "11.1.1",
                    "walking-cycling": "11.1.1",
                    "transit": "11.1.1",
                    "land-and-water": "11.2.0",
                    "buildings": "11.1.1"
                },
                "propConfig": {
                    "road-network": {
                        "colorBase": "hsl(216, 38%, 14%)",
                        "colorRoad": "hsl(211, 17%, 40%)",
                        "roadNetwork": "Simple"
                    },
                    "natural-features": {
                        "colorBase": "hsl(216, 38%, 14%)",
                        "colorWater": "hsl(197, 48%, 6%)",
                        "colorPoi": "hsl(184, 7%, 81%)"
                    },
                    "place-labels": {
                        "colorBase": "hsl(216, 38%, 14%)",
                        "colorPlaceLabel": "hsl(212, 8%, 89%)",
                        "settlementSubdivisionsDensity": 3,
                        "settlementLabelStyle": "Text only"
                    },
                    "admin-boundaries": {
                        "colorBase": "hsl(216, 38%, 14%)",
                        "colorPlaceLabel": "hsl(212, 8%, 89%)"
                    },
                    "point-of-interest-labels": {
                        "colorBase": "hsl(216, 38%, 14%)",
                        "colorGreenspace": "hsl(170, 37%, 11%)",
                        "colorGreenspaceLabel": "hsl(107, 0%, 74%)",
                        "colorHospital": "hsl(204, 14%, 100%)",
                        "colorSchool": "hsl(213, 27%, 100%)",
                        "colorPoi": "hsl(184, 7%, 81%)",
                        "density": 2
                    },
                    "walking-cycling": {
                        "colorBase": "hsl(216, 38%, 14%)",
                        "colorRoad": "hsl(211, 17%, 40%)",
                        "colorGreenspace": "hsl(170, 37%, 11%)",
                        "colorGreenspaceLabel": "hsl(107, 0%, 74%)",
                        "walkingCyclingPisteBackground": false,
                        "golfHoleLabelLine": false,
                        "pedestrianPolygonFeatures": false
                    },
                    "transit": {
                        "colorRoad": "hsl(211, 17%, 40%)",
                        "colorAirport": "hsl(213, 9%, 100%)",
                        "aerialways": false,
                        "colorTransit": "hsl(219, 9%, 80%)",
                        "transitLabels": false,
                        "colorBase": "hsl(216, 38%, 14%)",
                        "colorWater": "hsl(197, 48%, 6%)",
                        "railways": false,
                        "ferries": false
                    },
                    "land-and-water": {
                        "landType": "Landuse only",
                        "colorGreenspace": "hsl(170, 37%, 11%)",
                        "colorAirport": "hsl(213, 9%, 100%)",
                        "transitionLandOnZoom": false,
                        "colorBase": "hsl(216, 38%, 14%)",
                        "colorWater": "hsl(197, 48%, 6%)",
                        "colorSchool": "hsl(213, 27%, 100%)",
                        "waterStyle": "Simple",
                        "colorHospital": "hsl(204, 14%, 100%)"
                    },
                    "buildings": {
                        "colorBase": "hsl(216, 38%, 14%)",
                        "houseNumbers": false
                    }
                }
            }
        },
        "center": [2.3176, 48.8665],
        "zoom": 12,
        "sources": {
            "mapbox://mapbox.mapbox-traffic-v1": {
                "url": "mapbox://mapbox.mapbox-traffic-v1",
                "type": "vector"
            },
            "composite": {
                "url": "mapbox://mapbox.mapbox-streets-v8,mapbox.mapbox-terrain-v2",
                "type": "vector"
            }
        },
        "sprite": "mapbox://sprites/lucassbertan/cl0cuj0po000514nt5morcf4l/1m8wv72aow75xq4rgvxxspunf",
        "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
        "layers": [
            {
                "id": "land",
                "type": "background",
                "metadata": {
                    "mapbox:featureComponent": "land-and-water",
                    "mapbox:group": "Land, water, & sky, land"
                },
                "layout": {},
                "paint": {"background-color": "hsl(216, 36%, 16%)"}
            },
            {
                "id": "national-park",
                "type": "fill",
                "metadata": {
                    "mapbox:featureComponent": "land-and-water",
                    "mapbox:group": "Land, water, & sky, land"
                },
                "source": "composite",
                "source-layer": "landuse_overlay",
                "minzoom": 5,
                "filter": ["==", ["get", "class"], "national_park"],
                "layout": {},
                "paint": {
                    "fill-color": "hsl(170, 37%, 11%)",
                    "fill-opacity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        5,
                        0,
                        6,
                        0.5,
                        10,
                        0.5
                    ]
                }
            },
            {
                "id": "landuse",
                "type": "fill",
                "metadata": {
                    "mapbox:featureComponent": "land-and-water",
                    "mapbox:group": "Land, water, & sky, land"
                },
                "source": "composite",
                "source-layer": "landuse",
                "minzoom": 5,
                "filter": [
                    "match",
                    ["get", "class"],
                    ["park", "airport", "glacier", "pitch", "sand", "facility"],
                    true,
                    "cemetery",
                    true,
                    "school",
                    true,
                    "hospital",
                    true,
                    false
                ],
                "layout": {},
                "paint": {
                    "fill-color": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        15,
                        [
                            "match",
                            ["get", "class"],
                            "park",
                            "hsl(170, 37%, 11%)",
                            "airport",
                            "hsl(213, 39%, 22%)",
                            "cemetery",
                            "hsl(152, 38%, 17%)",
                            "glacier",
                            "hsl(197, 28%, 24%)",
                            "hospital",
                            "hsl(204, 29%, 18%)",
                            "pitch",
                            "hsl(170, 38%, 6%)",
                            "sand",
                            "hsl(215, 37%, 2%)",
                            "school",
                            "hsl(213, 34%, 12%)",
                            "hsl(216, 39%, 15%)"
                        ],
                        16,
                        [
                            "match",
                            ["get", "class"],
                            "park",
                            "hsl(170, 37%, 11%)",
                            "airport",
                            "hsl(213, 53%, 20%)",
                            "cemetery",
                            "hsl(152, 38%, 17%)",
                            "glacier",
                            "hsl(197, 28%, 24%)",
                            "hospital",
                            "hsl(204, 19%, 20%)",
                            "pitch",
                            "hsl(170, 38%, 6%)",
                            "sand",
                            "hsl(215, 37%, 2%)",
                            "school",
                            "hsl(213, 34%, 12%)",
                            "hsl(216, 39%, 15%)"
                        ]
                    ],
                    "fill-opacity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        5,
                        0,
                        6,
                        ["match", ["get", "class"], "glacier", 0.5, 1]
                    ]
                }
            },
            {
                "id": "pitch-outline",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "land-and-water",
                    "mapbox:group": "Land, water, & sky, land"
                },
                "source": "composite",
                "source-layer": "landuse",
                "minzoom": 15,
                "filter": ["==", ["get", "class"], "pitch"],
                "layout": {},
                "paint": {"line-color": "hsl(152, 21%, 2%)"}
            },
            {
                "id": "waterway",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "land-and-water",
                    "mapbox:group": "Land, water, & sky, water"
                },
                "source": "composite",
                "source-layer": "waterway",
                "minzoom": 8,
                "layout": {
                    "line-cap": ["step", ["zoom"], "butt", 11, "round"],
                    "line-join": "round"
                },
                "paint": {
                    "line-color": "hsl(197, 48%, 6%)",
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.3],
                        ["zoom"],
                        9,
                        ["match", ["get", "class"], ["canal", "river"], 0.1, 0],
                        20,
                        ["match", ["get", "class"], ["canal", "river"], 8, 3]
                    ],
                    "line-opacity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        8,
                        0,
                        8.5,
                        1
                    ]
                }
            },
            {
                "id": "water",
                "type": "fill",
                "metadata": {
                    "mapbox:featureComponent": "land-and-water",
                    "mapbox:group": "Land, water, & sky, water"
                },
                "source": "composite",
                "source-layer": "water",
                "layout": {},
                "paint": {"fill-color": "hsl(197, 48%, 6%)"}
            },
            {
                "id": "land-structure-polygon",
                "type": "fill",
                "metadata": {
                    "mapbox:featureComponent": "land-and-water",
                    "mapbox:group": "Land, water, & sky, built"
                },
                "source": "composite",
                "source-layer": "structure",
                "minzoom": 13,
                "filter": [
                    "all",
                    ["==", ["geometry-type"], "Polygon"],
                    ["==", ["get", "class"], "land"]
                ],
                "layout": {},
                "paint": {"fill-color": "hsl(216, 36%, 16%)"}
            },
            {
                "id": "land-structure-line",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "land-and-water",
                    "mapbox:group": "Land, water, & sky, built"
                },
                "source": "composite",
                "source-layer": "structure",
                "minzoom": 13,
                "filter": [
                    "all",
                    ["==", ["geometry-type"], "LineString"],
                    ["==", ["get", "class"], "land"]
                ],
                "layout": {"line-cap": "round"},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.99],
                        ["zoom"],
                        14,
                        0.75,
                        20,
                        40
                    ],
                    "line-color": "hsl(216, 36%, 16%)"
                }
            },
            {
                "id": "aeroway-polygon",
                "type": "fill",
                "metadata": {
                    "mapbox:featureComponent": "transit",
                    "mapbox:group": "Transit, built"
                },
                "source": "composite",
                "source-layer": "aeroway",
                "minzoom": 11,
                "filter": [
                    "all",
                    ["==", ["geometry-type"], "Polygon"],
                    [
                        "match",
                        ["get", "type"],
                        ["runway", "taxiway", "helipad"],
                        true,
                        false
                    ]
                ],
                "layout": {},
                "paint": {
                    "fill-color": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        15,
                        "hsl(213, 31%, 13%)",
                        16,
                        "hsl(213, 19%, 15%)"
                    ],
                    "fill-opacity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        11,
                        0,
                        11.5,
                        1
                    ]
                }
            },
            {
                "id": "aeroway-line",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "transit",
                    "mapbox:group": "Transit, built"
                },
                "source": "composite",
                "source-layer": "aeroway",
                "minzoom": 9,
                "filter": ["==", ["geometry-type"], "LineString"],
                "layout": {},
                "paint": {
                    "line-color": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        15,
                        "hsl(213, 31%, 13%)",
                        16,
                        "hsl(213, 19%, 15%)"
                    ],
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        9,
                        ["match", ["get", "type"], "runway", 1, 0.5],
                        18,
                        ["match", ["get", "type"], "runway", 80, 20]
                    ]
                }
            },
            {
                "id": "building-outline",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "buildings",
                    "mapbox:group": "Buildings, built"
                },
                "source": "composite",
                "source-layer": "building",
                "minzoom": 15,
                "filter": [
                    "all",
                    ["!=", ["get", "type"], "building:part"],
                    ["==", ["get", "underground"], "false"]
                ],
                "layout": {},
                "paint": {
                    "line-color": "hsl(216, 32%, 12%)",
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        15,
                        0.75,
                        20,
                        3
                    ],
                    "line-opacity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        15,
                        0,
                        16,
                        1
                    ]
                }
            },
            {
                "id": "building",
                "type": "fill",
                "metadata": {
                    "mapbox:featureComponent": "buildings",
                    "mapbox:group": "Buildings, built"
                },
                "source": "composite",
                "source-layer": "building",
                "minzoom": 15,
                "filter": [
                    "all",
                    ["!=", ["get", "type"], "building:part"],
                    ["==", ["get", "underground"], "false"]
                ],
                "layout": {},
                "paint": {
                    "fill-color": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        15,
                        "hsl(216, 35%, 17%)",
                        16,
                        "hsl(216, 31%, 14%)"
                    ],
                    "fill-opacity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        15,
                        0,
                        16,
                        1
                    ],
                    "fill-outline-color": "hsl(216, 32%, 12%)"
                }
            },
            {
                "id": "tunnel-path",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "walking-cycling",
                    "mapbox:group": "Walking, cycling, etc., tunnels"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 14,
                "filter": [
                    "all",
                    ["==", ["get", "structure"], "tunnel"],
                    ["==", ["get", "class"], "path"],
                    ["!=", ["get", "type"], "steps"],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        15,
                        1,
                        18,
                        4
                    ],
                    "line-color": "hsl(216, 32%, 12%)",
                    "line-dasharray": [
                        "step",
                        ["zoom"],
                        ["literal", [1, 0]],
                        15,
                        ["literal", [1.75, 1]],
                        16,
                        ["literal", [1, 0.75]],
                        17,
                        ["literal", [1, 0.5]]
                    ]
                }
            },
            {
                "id": "tunnel-steps",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "walking-cycling",
                    "mapbox:group": "Walking, cycling, etc., tunnels"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 14,
                "filter": [
                    "all",
                    ["==", ["get", "structure"], "tunnel"],
                    ["==", ["get", "type"], "steps"],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        15,
                        1,
                        16,
                        1.6,
                        18,
                        6
                    ],
                    "line-color": "hsl(216, 32%, 12%)",
                    "line-dasharray": [
                        "step",
                        ["zoom"],
                        ["literal", [1, 0]],
                        15,
                        ["literal", [1.75, 1]],
                        16,
                        ["literal", [1, 0.75]],
                        17,
                        ["literal", [0.3, 0.3]]
                    ]
                }
            },
            {
                "id": "tunnel-pedestrian",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "walking-cycling",
                    "mapbox:group": "Walking, cycling, etc., tunnels"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 13,
                "filter": [
                    "all",
                    ["==", ["get", "structure"], "tunnel"],
                    ["==", ["get", "class"], "pedestrian"],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        14,
                        0.5,
                        18,
                        12
                    ],
                    "line-color": "hsl(216, 32%, 12%)",
                    "line-dasharray": [
                        "step",
                        ["zoom"],
                        ["literal", [1, 0]],
                        15,
                        ["literal", [1.5, 0.4]],
                        16,
                        ["literal", [1, 0.2]]
                    ]
                }
            },
            {
                "id": "tunnel-simple",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "road-network",
                    "mapbox:group": "Road network, tunnels"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 13,
                "filter": [
                    "all",
                    ["==", ["get", "structure"], "tunnel"],
                    [
                        "step",
                        ["zoom"],
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "motorway_link",
                                "trunk",
                                "trunk_link",
                                "primary",
                                "secondary",
                                "tertiary",
                                "street",
                                "street_limited",
                                "primary_link",
                                "track"
                            ],
                            true,
                            false
                        ],
                        14,
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "motorway_link",
                                "trunk",
                                "trunk_link",
                                "primary",
                                "primary_link",
                                "secondary",
                                "secondary_link",
                                "tertiary",
                                "tertiary_link",
                                "street",
                                "street_limited",
                                "service",
                                "track"
                            ],
                            true,
                            false
                        ]
                    ],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        13,
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk", "primary"],
                            4,
                            ["secondary", "tertiary"],
                            2.5,
                            [
                                "motorway_link",
                                "trunk_link",
                                "street",
                                "street_limited",
                                "primary_link"
                            ],
                            1,
                            0.5
                        ],
                        18,
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk", "primary"],
                            32,
                            ["secondary", "tertiary"],
                            26,
                            [
                                "motorway_link",
                                "trunk_link",
                                "street",
                                "street_limited",
                                "primary_link"
                            ],
                            18,
                            12
                        ]
                    ],
                    "line-color": "hsl(211, 17%, 50%)"
                }
            },
            {
                "id": "road-path",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "walking-cycling",
                    "mapbox:group": "Walking, cycling, etc., surface"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 12,
                "filter": [
                    "all",
                    ["==", ["get", "class"], "path"],
                    [
                        "step",
                        ["zoom"],
                        [
                            "!",
                            [
                                "match",
                                ["get", "type"],
                                ["steps", "sidewalk", "crossing"],
                                true,
                                false
                            ]
                        ],
                        16,
                        ["!=", ["get", "type"], "steps"]
                    ],
                    ["match", ["get", "structure"], ["none", "ford"], true, false],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {"line-join": ["step", ["zoom"], "miter", 14, "round"]},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        13,
                        0.5,
                        14,
                        1,
                        15,
                        1,
                        18,
                        4
                    ],
                    "line-color": "hsl(216, 37%, 24%)",
                    "line-dasharray": [
                        "step",
                        ["zoom"],
                        ["literal", [4, 0.3]],
                        15,
                        ["literal", [1.75, 0.3]],
                        16,
                        ["literal", [1, 0.3]],
                        17,
                        ["literal", [1, 0.25]]
                    ]
                }
            },
            {
                "id": "road-steps",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "walking-cycling",
                    "mapbox:group": "Walking, cycling, etc., surface"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 14,
                "filter": [
                    "all",
                    ["==", ["get", "type"], "steps"],
                    ["match", ["get", "structure"], ["none", "ford"], true, false],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {"line-join": "round"},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        15,
                        1,
                        16,
                        1.6,
                        18,
                        6
                    ],
                    "line-color": "hsl(216, 37%, 24%)",
                    "line-dasharray": [
                        "step",
                        ["zoom"],
                        ["literal", [1, 0]],
                        15,
                        ["literal", [1.75, 1]],
                        16,
                        ["literal", [1, 0.75]],
                        17,
                        ["literal", [0.3, 0.3]]
                    ]
                }
            },
            {
                "id": "road-pedestrian",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "walking-cycling",
                    "mapbox:group": "Walking, cycling, etc., surface"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 12,
                "filter": [
                    "all",
                    ["==", ["get", "class"], "pedestrian"],
                    ["match", ["get", "structure"], ["none", "ford"], true, false],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {"line-join": ["step", ["zoom"], "miter", 14, "round"]},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        14,
                        0.5,
                        18,
                        12
                    ],
                    "line-color": "hsl(216, 37%, 24%)",
                    "line-dasharray": [
                        "step",
                        ["zoom"],
                        ["literal", [1, 0]],
                        15,
                        ["literal", [1.5, 0.4]],
                        16,
                        ["literal", [1, 0.2]]
                    ]
                }
            },
            {
                "id": "road-simple",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "road-network",
                    "mapbox:group": "Road network, surface"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 5,
                "filter": [
                    "all",
                    [
                        "step",
                        ["zoom"],
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk"],
                            true,
                            false
                        ],
                        6,
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk", "primary"],
                            true,
                            false
                        ],
                        8,
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk", "primary", "secondary"],
                            true,
                            false
                        ],
                        10,
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "trunk",
                                "primary",
                                "secondary",
                                "tertiary",
                                "motorway_link",
                                "trunk_link"
                            ],
                            true,
                            false
                        ],
                        11,
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "motorway_link",
                                "trunk",
                                "trunk_link",
                                "primary",
                                "secondary",
                                "tertiary",
                                "street"
                            ],
                            true,
                            false
                        ],
                        12,
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "motorway_link",
                                "trunk",
                                "trunk_link",
                                "primary",
                                "secondary",
                                "tertiary",
                                "street",
                                "street_limited",
                                "primary_link"
                            ],
                            true,
                            false
                        ],
                        13,
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "motorway_link",
                                "trunk",
                                "trunk_link",
                                "primary",
                                "secondary",
                                "tertiary",
                                "street",
                                "street_limited",
                                "primary_link",
                                "track"
                            ],
                            true,
                            false
                        ],
                        14,
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "motorway_link",
                                "trunk",
                                "trunk_link",
                                "primary",
                                "primary_link",
                                "secondary",
                                "secondary_link",
                                "tertiary",
                                "tertiary_link",
                                "street",
                                "street_limited",
                                "service",
                                "track"
                            ],
                            true,
                            false
                        ]
                    ],
                    ["match", ["get", "structure"], ["none", "ford"], true, false],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {
                    "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                    "line-join": ["step", ["zoom"], "miter", 14, "round"]
                },
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        5,
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk", "primary"],
                            0.75,
                            ["secondary", "tertiary"],
                            0.1,
                            0
                        ],
                        13,
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk", "primary"],
                            4,
                            ["secondary", "tertiary"],
                            2.5,
                            [
                                "motorway_link",
                                "trunk_link",
                                "primary_link",
                                "street",
                                "street_limited"
                            ],
                            1,
                            0.5
                        ],
                        18,
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk", "primary"],
                            32,
                            ["secondary", "tertiary"],
                            26,
                            [
                                "motorway_link",
                                "trunk_link",
                                "primary_link",
                                "street",
                                "street_limited"
                            ],
                            18,
                            10
                        ]
                    ],
                    "line-color": [
                        "match",
                        ["get", "class"],
                        [
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "street",
                            "street_limited",
                            "service",
                            "track"
                        ],
                        "hsl(211, 17%, 37%)",
                        "hsl(211, 17%, 40%)"
                    ]
                }
            },
            {
                "id": "bridge-path",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "walking-cycling",
                    "mapbox:group": "Walking, cycling, etc., barriers-bridges"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 14,
                "filter": [
                    "all",
                    ["==", ["get", "structure"], "bridge"],
                    ["==", ["get", "class"], "path"],
                    ["==", ["geometry-type"], "LineString"],
                    ["!=", ["get", "type"], "steps"]
                ],
                "layout": {"line-join": "round"},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        15,
                        1,
                        18,
                        4
                    ],
                    "line-color": "hsl(216, 37%, 24%)",
                    "line-dasharray": [
                        "step",
                        ["zoom"],
                        ["literal", [4, 0.3]],
                        15,
                        ["literal", [1.75, 0.3]],
                        16,
                        ["literal", [1, 0.3]],
                        17,
                        ["literal", [1, 0.25]]
                    ]
                }
            },
            {
                "id": "bridge-steps",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "walking-cycling",
                    "mapbox:group": "Walking, cycling, etc., barriers-bridges"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 14,
                "filter": [
                    "all",
                    ["==", ["get", "type"], "steps"],
                    ["==", ["get", "structure"], "bridge"],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {"line-join": "round"},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        15,
                        1,
                        16,
                        1.6,
                        18,
                        6
                    ],
                    "line-color": "hsl(216, 37%, 24%)",
                    "line-dasharray": [
                        "step",
                        ["zoom"],
                        ["literal", [1, 0]],
                        15,
                        ["literal", [1.75, 1]],
                        16,
                        ["literal", [1, 0.75]],
                        17,
                        ["literal", [0.3, 0.3]]
                    ]
                }
            },
            {
                "id": "bridge-pedestrian",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "walking-cycling",
                    "mapbox:group": "Walking, cycling, etc., barriers-bridges"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 13,
                "filter": [
                    "all",
                    ["==", ["get", "structure"], "bridge"],
                    ["==", ["get", "class"], "pedestrian"],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {"line-join": "round"},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        14,
                        0.5,
                        18,
                        12
                    ],
                    "line-color": "hsl(216, 37%, 24%)",
                    "line-dasharray": [
                        "step",
                        ["zoom"],
                        ["literal", [1, 0]],
                        15,
                        ["literal", [1.5, 0.4]],
                        16,
                        ["literal", [1, 0.2]]
                    ]
                }
            },
            {
                "id": "bridge-case-simple",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "road-network",
                    "mapbox:group": "Road network, bridges"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 13,
                "filter": [
                    "all",
                    ["==", ["get", "structure"], "bridge"],
                    [
                        "step",
                        ["zoom"],
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "motorway_link",
                                "trunk",
                                "trunk_link",
                                "primary",
                                "secondary",
                                "tertiary",
                                "street",
                                "street_limited",
                                "primary_link",
                                "track"
                            ],
                            true,
                            false
                        ],
                        14,
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "motorway_link",
                                "trunk",
                                "trunk_link",
                                "primary",
                                "primary_link",
                                "secondary",
                                "secondary_link",
                                "tertiary",
                                "tertiary_link",
                                "street",
                                "street_limited",
                                "service",
                                "track"
                            ],
                            true,
                            false
                        ]
                    ],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {"line-join": ["step", ["zoom"], "miter", 14, "round"]},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        13,
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk", "primary"],
                            6,
                            ["secondary", "tertiary"],
                            4,
                            [
                                "motorway_link",
                                "trunk_link",
                                "street",
                                "street_limited",
                                "primary_link"
                            ],
                            2.5,
                            1.25
                        ],
                        18,
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk", "primary"],
                            36,
                            ["secondary", "tertiary"],
                            30,
                            [
                                "motorway_link",
                                "trunk_link",
                                "street",
                                "street_limited",
                                "primary_link"
                            ],
                            22,
                            16
                        ]
                    ],
                    "line-color": "hsl(216, 36%, 16%)"
                }
            },
            {
                "id": "bridge-simple",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "road-network",
                    "mapbox:group": "Road network, bridges"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 13,
                "filter": [
                    "all",
                    ["==", ["get", "structure"], "bridge"],
                    [
                        "step",
                        ["zoom"],
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk"],
                            true,
                            false
                        ],
                        13,
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "motorway_link",
                                "trunk",
                                "trunk_link",
                                "primary",
                                "secondary",
                                "tertiary",
                                "street",
                                "street_limited",
                                "primary_link",
                                "track"
                            ],
                            true,
                            false
                        ],
                        14,
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "motorway_link",
                                "trunk",
                                "trunk_link",
                                "primary",
                                "primary_link",
                                "secondary",
                                "secondary_link",
                                "tertiary",
                                "tertiary_link",
                                "street",
                                "street_limited",
                                "service",
                                "track"
                            ],
                            true,
                            false
                        ]
                    ],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {
                    "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                    "line-join": ["step", ["zoom"], "miter", 14, "round"]
                },
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["exponential", 1.5],
                        ["zoom"],
                        13,
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk", "primary"],
                            4,
                            ["secondary", "tertiary"],
                            2.5,
                            [
                                "motorway_link",
                                "trunk_link",
                                "street",
                                "street_limited",
                                "primary_link"
                            ],
                            1,
                            0.5
                        ],
                        18,
                        [
                            "match",
                            ["get", "class"],
                            ["motorway", "trunk", "primary"],
                            32,
                            ["secondary", "tertiary"],
                            26,
                            [
                                "motorway_link",
                                "trunk_link",
                                "street",
                                "street_limited",
                                "primary_link"
                            ],
                            18,
                            12
                        ]
                    ],
                    "line-color": [
                        "match",
                        ["get", "class"],
                        [
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "street",
                            "street_limited",
                            "service",
                            "track"
                        ],
                        "hsl(211, 17%, 37%)",
                        "hsl(211, 17%, 40%)"
                    ]
                }
            },
            {
                "id": "admin-1-boundary-bg",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "admin-boundaries",
                    "mapbox:group": "Administrative boundaries, admin"
                },
                "source": "composite",
                "source-layer": "admin",
                "minzoom": 7,
                "filter": [
                    "all",
                    ["==", ["get", "admin_level"], 1],
                    ["==", ["get", "maritime"], "false"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false]
                ],
                "layout": {"line-join": "bevel"},
                "paint": {
                    "line-color": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        8,
                        "hsl(216, 36%, 16%)",
                        16,
                        "hsl(212, 14%, 0%)"
                    ],
                    "line-width": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        7,
                        3.75,
                        12,
                        5.5
                    ],
                    "line-opacity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        7,
                        0,
                        8,
                        0.75
                    ],
                    "line-dasharray": [1, 0],
                    "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 8, 3]
                }
            },
            {
                "id": "admin-0-boundary-bg",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "admin-boundaries",
                    "mapbox:group": "Administrative boundaries, admin"
                },
                "source": "composite",
                "source-layer": "admin",
                "minzoom": 1,
                "filter": [
                    "all",
                    ["==", ["get", "admin_level"], 0],
                    ["==", ["get", "maritime"], "false"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false]
                ],
                "layout": {},
                "paint": {
                    "line-width": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        3,
                        3.5,
                        10,
                        8
                    ],
                    "line-color": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        6,
                        "hsl(216, 36%, 16%)",
                        8,
                        "hsl(212, 14%, 0%)"
                    ],
                    "line-opacity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        3,
                        0,
                        4,
                        0.5
                    ],
                    "line-blur": ["interpolate", ["linear"], ["zoom"], 3, 0, 10, 2]
                }
            },
            {
                "id": "admin-1-boundary",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "admin-boundaries",
                    "mapbox:group": "Administrative boundaries, admin"
                },
                "source": "composite",
                "source-layer": "admin",
                "minzoom": 2,
                "filter": [
                    "all",
                    ["==", ["get", "admin_level"], 1],
                    ["==", ["get", "maritime"], "false"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false]
                ],
                "layout": {"line-join": "round", "line-cap": "round"},
                "paint": {
                    "line-dasharray": [
                        "step",
                        ["zoom"],
                        ["literal", [2, 0]],
                        7,
                        ["literal", [2, 2, 6, 2]]
                    ],
                    "line-width": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        7,
                        0.75,
                        12,
                        1.5
                    ],
                    "line-opacity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        2,
                        0,
                        3,
                        1
                    ],
                    "line-color": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        3,
                        "hsl(212, 4%, 84%)",
                        7,
                        "hsl(212, 2%, 84%)"
                    ]
                }
            },
            {
                "id": "admin-0-boundary",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "admin-boundaries",
                    "mapbox:group": "Administrative boundaries, admin"
                },
                "source": "composite",
                "source-layer": "admin",
                "minzoom": 1,
                "filter": [
                    "all",
                    ["==", ["get", "admin_level"], 0],
                    ["==", ["get", "disputed"], "false"],
                    ["==", ["get", "maritime"], "false"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false]
                ],
                "layout": {"line-join": "round", "line-cap": "round"},
                "paint": {
                    "line-color": "hsl(212, 2%, 89%)",
                    "line-width": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        3,
                        0.5,
                        10,
                        2
                    ],
                    "line-dasharray": [10, 0]
                }
            },
            {
                "id": "admin-0-boundary-disputed",
                "type": "line",
                "metadata": {
                    "mapbox:featureComponent": "admin-boundaries",
                    "mapbox:group": "Administrative boundaries, admin"
                },
                "source": "composite",
                "source-layer": "admin",
                "minzoom": 1,
                "filter": [
                    "all",
                    ["==", ["get", "disputed"], "true"],
                    ["==", ["get", "admin_level"], 0],
                    ["==", ["get", "maritime"], "false"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false]
                ],
                "layout": {"line-join": "round"},
                "paint": {
                    "line-color": "hsl(212, 2%, 89%)",
                    "line-width": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        3,
                        0.5,
                        10,
                        2
                    ],
                    "line-dasharray": [
                        "step",
                        ["zoom"],
                        ["literal", [3.25, 3.25]],
                        6,
                        ["literal", [2.5, 2.5]],
                        7,
                        ["literal", [2, 2.25]],
                        8,
                        ["literal", [1.75, 2]]
                    ]
                }
            },
            {
                "id": "road-label-simple",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "road-network",
                    "mapbox:group": "Road network, road-labels"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 12,
                "filter": [
                    "match",
                    ["get", "class"],
                    [
                        "motorway",
                        "trunk",
                        "primary",
                        "secondary",
                        "tertiary",
                        "street",
                        "street_limited"
                    ],
                    true,
                    false
                ],
                "layout": {
                    "text-size": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        10,
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "trunk",
                                "primary",
                                "secondary",
                                "tertiary"
                            ],
                            10,
                            9
                        ],
                        18,
                        [
                            "match",
                            ["get", "class"],
                            [
                                "motorway",
                                "trunk",
                                "primary",
                                "secondary",
                                "tertiary"
                            ],
                            16,
                            14
                        ]
                    ],
                    "text-max-angle": 30,
                    "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
                    "symbol-placement": "line",
                    "text-padding": 1,
                    "text-rotation-alignment": "map",
                    "text-pitch-alignment": "viewport",
                    "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                    "text-letter-spacing": 0.01
                },
                "paint": {
                    "text-color": "hsl(216, 37%, 66%)",
                    "text-halo-color": "hsl(211, 17%, 40%)",
                    "text-halo-width": 1
                }
            },
            {
                "id": "path-pedestrian-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "walking-cycling",
                    "mapbox:group": "Walking, cycling, etc., walking-cycling-labels"
                },
                "source": "composite",
                "source-layer": "road",
                "minzoom": 12,
                "filter": [
                    "step",
                    ["zoom"],
                    ["match", ["get", "class"], ["pedestrian"], true, false],
                    15,
                    ["match", ["get", "class"], ["path", "pedestrian"], true, false]
                ],
                "layout": {
                    "text-size": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        10,
                        ["match", ["get", "class"], "pedestrian", 9, 6.5],
                        18,
                        ["match", ["get", "class"], "pedestrian", 14, 13]
                    ],
                    "text-max-angle": 30,
                    "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
                    "symbol-placement": "line",
                    "text-padding": 1,
                    "text-rotation-alignment": "map",
                    "text-pitch-alignment": "viewport",
                    "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                    "text-letter-spacing": 0.01
                },
                "paint": {
                    "text-color": "hsl(216, 37%, 66%)",
                    "text-halo-color": "hsl(216, 36%, 2%)",
                    "text-halo-width": 1,
                    "text-halo-blur": 1
                }
            },
            {
                "id": "waterway-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "natural-features",
                    "mapbox:group": "Natural features, natural-labels"
                },
                "source": "composite",
                "source-layer": "natural_label",
                "minzoom": 13,
                "filter": [
                    "all",
                    [
                        "match",
                        ["get", "class"],
                        ["canal", "river", "stream"],
                        ["match", ["get", "worldview"], ["all", "US"], true, false],
                        ["disputed_canal", "disputed_river", "disputed_stream"],
                        [
                            "all",
                            ["==", ["get", "disputed"], "true"],
                            [
                                "match",
                                ["get", "worldview"],
                                ["all", "US"],
                                true,
                                false
                            ]
                        ],
                        false
                    ],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {
                    "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
                    "text-max-angle": 30,
                    "symbol-spacing": [
                        "interpolate",
                        ["linear", 1],
                        ["zoom"],
                        15,
                        250,
                        17,
                        400
                    ],
                    "text-size": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        13,
                        12,
                        18,
                        16
                    ],
                    "symbol-placement": "line",
                    "text-pitch-alignment": "viewport",
                    "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
                },
                "paint": {"text-color": "hsl(197, 16%, 90%)"}
            },
            {
                "id": "natural-line-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "natural-features",
                    "mapbox:group": "Natural features, natural-labels"
                },
                "source": "composite",
                "source-layer": "natural_label",
                "minzoom": 4,
                "filter": [
                    "all",
                    [
                        "match",
                        ["get", "class"],
                        ["glacier", "landform"],
                        ["match", ["get", "worldview"], ["all", "US"], true, false],
                        ["disputed_glacier", "disputed_landform"],
                        [
                            "all",
                            ["==", ["get", "disputed"], "true"],
                            [
                                "match",
                                ["get", "worldview"],
                                ["all", "US"],
                                true,
                                false
                            ]
                        ],
                        false
                    ],
                    ["==", ["geometry-type"], "LineString"],
                    ["<=", ["get", "filterrank"], 2]
                ],
                "layout": {
                    "text-size": [
                        "step",
                        ["zoom"],
                        ["step", ["get", "sizerank"], 18, 5, 12],
                        17,
                        ["step", ["get", "sizerank"], 18, 13, 12]
                    ],
                    "text-max-angle": 30,
                    "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                    "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                    "symbol-placement": "line-center",
                    "text-pitch-alignment": "viewport"
                },
                "paint": {
                    "text-halo-width": 0.5,
                    "text-halo-color": "hsl(216, 43%, 0%)",
                    "text-halo-blur": 0.5,
                    "text-color": [
                        "step",
                        ["zoom"],
                        [
                            "step",
                            ["get", "sizerank"],
                            "hsl(184, 2%, 91%)",
                            5,
                            "hsl(184, 7%, 81%)"
                        ],
                        17,
                        [
                            "step",
                            ["get", "sizerank"],
                            "hsl(184, 2%, 91%)",
                            13,
                            "hsl(184, 7%, 81%)"
                        ]
                    ]
                }
            },
            {
                "id": "natural-point-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "natural-features",
                    "mapbox:group": "Natural features, natural-labels"
                },
                "source": "composite",
                "source-layer": "natural_label",
                "minzoom": 4,
                "filter": [
                    "all",
                    [
                        "match",
                        ["get", "class"],
                        ["dock", "glacier", "landform", "water_feature", "wetland"],
                        ["match", ["get", "worldview"], ["all", "US"], true, false],
                        [
                            "disputed_dock",
                            "disputed_glacier",
                            "disputed_landform",
                            "disputed_water_feature",
                            "disputed_wetland"
                        ],
                        [
                            "all",
                            ["==", ["get", "disputed"], "true"],
                            [
                                "match",
                                ["get", "worldview"],
                                ["all", "US"],
                                true,
                                false
                            ]
                        ],
                        false
                    ],
                    ["==", ["geometry-type"], "Point"],
                    ["<=", ["get", "filterrank"], 2]
                ],
                "layout": {
                    "text-size": [
                        "step",
                        ["zoom"],
                        ["step", ["get", "sizerank"], 18, 5, 12],
                        17,
                        ["step", ["get", "sizerank"], 18, 13, 12]
                    ],
                    "icon-image": ["get", "maki"],
                    "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                    "text-offset": [
                        "step",
                        ["zoom"],
                        [
                            "step",
                            ["get", "sizerank"],
                            ["literal", [0, 0]],
                            5,
                            ["literal", [0, 0.75]]
                        ],
                        17,
                        [
                            "step",
                            ["get", "sizerank"],
                            ["literal", [0, 0]],
                            13,
                            ["literal", [0, 0.75]]
                        ]
                    ],
                    "text-anchor": [
                        "step",
                        ["zoom"],
                        ["step", ["get", "sizerank"], "center", 5, "top"],
                        17,
                        ["step", ["get", "sizerank"], "center", 13, "top"]
                    ],
                    "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
                },
                "paint": {
                    "icon-opacity": [
                        "step",
                        ["zoom"],
                        ["step", ["get", "sizerank"], 0, 5, 1],
                        17,
                        ["step", ["get", "sizerank"], 0, 13, 1]
                    ],
                    "text-halo-color": "hsl(216, 43%, 0%)",
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                    "text-color": [
                        "step",
                        ["zoom"],
                        [
                            "step",
                            ["get", "sizerank"],
                            "hsl(184, 2%, 91%)",
                            5,
                            "hsl(184, 7%, 81%)"
                        ],
                        17,
                        [
                            "step",
                            ["get", "sizerank"],
                            "hsl(184, 2%, 91%)",
                            13,
                            "hsl(184, 7%, 81%)"
                        ]
                    ]
                }
            },
            {
                "id": "water-line-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "natural-features",
                    "mapbox:group": "Natural features, natural-labels"
                },
                "source": "composite",
                "source-layer": "natural_label",
                "filter": [
                    "all",
                    [
                        "match",
                        ["get", "class"],
                        ["bay", "ocean", "reservoir", "sea", "water"],
                        ["match", ["get", "worldview"], ["all", "US"], true, false],
                        [
                            "disputed_bay",
                            "disputed_ocean",
                            "disputed_reservoir",
                            "disputed_sea",
                            "disputed_water"
                        ],
                        [
                            "all",
                            ["==", ["get", "disputed"], "true"],
                            [
                                "match",
                                ["get", "worldview"],
                                ["all", "US"],
                                true,
                                false
                            ]
                        ],
                        false
                    ],
                    ["==", ["geometry-type"], "LineString"]
                ],
                "layout": {
                    "text-size": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        7,
                        ["step", ["get", "sizerank"], 20, 6, 18, 12, 12],
                        10,
                        ["step", ["get", "sizerank"], 15, 9, 12],
                        18,
                        ["step", ["get", "sizerank"], 15, 9, 14]
                    ],
                    "text-max-angle": 30,
                    "text-letter-spacing": [
                        "match",
                        ["get", "class"],
                        "ocean",
                        0.25,
                        ["sea", "bay"],
                        0.15,
                        0
                    ],
                    "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
                    "symbol-placement": "line-center",
                    "text-pitch-alignment": "viewport",
                    "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
                },
                "paint": {
                    "text-color": [
                        "match",
                        ["get", "class"],
                        ["bay", "ocean", "sea"],
                        "hsl(197, 44%, 26%)",
                        "hsl(197, 16%, 90%)"
                    ]
                }
            },
            {
                "id": "water-point-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "natural-features",
                    "mapbox:group": "Natural features, natural-labels"
                },
                "source": "composite",
                "source-layer": "natural_label",
                "filter": [
                    "all",
                    [
                        "match",
                        ["get", "class"],
                        ["bay", "ocean", "reservoir", "sea", "water"],
                        ["match", ["get", "worldview"], ["all", "US"], true, false],
                        [
                            "disputed_bay",
                            "disputed_ocean",
                            "disputed_reservoir",
                            "disputed_sea",
                            "disputed_water"
                        ],
                        [
                            "all",
                            ["==", ["get", "disputed"], "true"],
                            [
                                "match",
                                ["get", "worldview"],
                                ["all", "US"],
                                true,
                                false
                            ]
                        ],
                        false
                    ],
                    ["==", ["geometry-type"], "Point"]
                ],
                "layout": {
                    "text-line-height": 1.3,
                    "text-size": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        7,
                        ["step", ["get", "sizerank"], 20, 6, 15, 12, 12],
                        10,
                        ["step", ["get", "sizerank"], 15, 9, 12]
                    ],
                    "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
                    "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                    "text-letter-spacing": [
                        "match",
                        ["get", "class"],
                        "ocean",
                        0.25,
                        ["bay", "sea"],
                        0.15,
                        0.01
                    ],
                    "text-max-width": [
                        "match",
                        ["get", "class"],
                        "ocean",
                        4,
                        "sea",
                        5,
                        ["bay", "water"],
                        7,
                        10
                    ]
                },
                "paint": {
                    "text-color": [
                        "match",
                        ["get", "class"],
                        ["bay", "ocean", "sea"],
                        "hsl(197, 44%, 26%)",
                        "hsl(197, 16%, 90%)"
                    ]
                }
            },
            {
                "id": "poi-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "point-of-interest-labels",
                    "mapbox:group": "Point of interest labels, poi-labels"
                },
                "source": "composite",
                "source-layer": "poi_label",
                "minzoom": 6,
                "filter": [
                    "<=",
                    ["get", "filterrank"],
                    ["+", ["step", ["zoom"], 0, 16, 1, 17, 2], 2]
                ],
                "layout": {
                    "text-size": [
                        "step",
                        ["zoom"],
                        ["step", ["get", "sizerank"], 18, 5, 12],
                        17,
                        ["step", ["get", "sizerank"], 18, 13, 12]
                    ],
                    "icon-image": [
                        "case",
                        ["has", "maki_beta"],
                        [
                            "coalesce",
                            ["image", ["get", "maki_beta"]],
                            ["image", ["get", "maki"]]
                        ],
                        ["image", ["get", "maki"]]
                    ],
                    "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                    "text-offset": [
                        "step",
                        ["zoom"],
                        [
                            "step",
                            ["get", "sizerank"],
                            ["literal", [0, 0]],
                            5,
                            ["literal", [0, 0.75]]
                        ],
                        17,
                        [
                            "step",
                            ["get", "sizerank"],
                            ["literal", [0, 0]],
                            13,
                            ["literal", [0, 0.75]]
                        ]
                    ],
                    "text-anchor": [
                        "step",
                        ["zoom"],
                        ["step", ["get", "sizerank"], "center", 5, "top"],
                        17,
                        ["step", ["get", "sizerank"], "center", 13, "top"]
                    ],
                    "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]]
                },
                "paint": {
                    "icon-opacity": [
                        "step",
                        ["zoom"],
                        ["step", ["get", "sizerank"], 0, 5, 1],
                        17,
                        ["step", ["get", "sizerank"], 0, 13, 1]
                    ],
                    "text-halo-color": [
                        "match",
                        ["get", "class"],
                        "park_like",
                        "hsl(170, 42%, 0%)",
                        "education",
                        "hsl(213, 38%, 0%)",
                        "medical",
                        "hsl(204, 24%, 5%)",
                        "hsl(216, 43%, 0%)"
                    ],
                    "text-halo-width": 0.5,
                    "text-halo-blur": 0.5,
                    "text-color": [
                        "step",
                        ["zoom"],
                        [
                            "step",
                            ["get", "sizerank"],
                            [
                                "match",
                                ["get", "class"],
                                "food_and_drink",
                                "hsl(178, 8%, 100%)",
                                "park_like",
                                "hsl(107, 1%, 84%)",
                                "education",
                                "hsl(213, 11%, 100%)",
                                "medical",
                                "hsl(204, 6%, 100%)",
                                "hsl(184, 2%, 91%)"
                            ],
                            5,
                            [
                                "match",
                                ["get", "class"],
                                "food_and_drink",
                                "hsl(178, 15%, 87%)",
                                "park_like",
                                "hsl(107, 0%, 73%)",
                                "education",
                                "hsl(213, 27%, 100%)",
                                "medical",
                                "hsl(204, 7%, 100%)",
                                "hsl(184, 7%, 81%)"
                            ]
                        ],
                        17,
                        [
                            "step",
                            ["get", "sizerank"],
                            [
                                "match",
                                ["get", "class"],
                                "food_and_drink",
                                "hsl(178, 8%, 100%)",
                                "park_like",
                                "hsl(107, 1%, 84%)",
                                "education",
                                "hsl(213, 11%, 100%)",
                                "medical",
                                "hsl(204, 6%, 100%)",
                                "hsl(184, 2%, 91%)"
                            ],
                            13,
                            [
                                "match",
                                ["get", "class"],
                                "food_and_drink",
                                "hsl(178, 15%, 87%)",
                                "park_like",
                                "hsl(107, 0%, 73%)",
                                "education",
                                "hsl(213, 27%, 100%)",
                                "medical",
                                "hsl(204, 7%, 100%)",
                                "hsl(184, 7%, 81%)"
                            ]
                        ]
                    ]
                }
            },
            {
                "id": "airport-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "transit",
                    "mapbox:group": "Transit, transit-labels"
                },
                "source": "composite",
                "source-layer": "airport_label",
                "minzoom": 8,
                "filter": [
                    "match",
                    ["get", "class"],
                    ["military", "civil"],
                    ["match", ["get", "worldview"], ["all", "US"], true, false],
                    ["disputed_military", "disputed_civil"],
                    [
                        "all",
                        ["==", ["get", "disputed"], "true"],
                        ["match", ["get", "worldview"], ["all", "US"], true, false]
                    ],
                    false
                ],
                "layout": {
                    "text-line-height": 1.1,
                    "text-size": ["step", ["get", "sizerank"], 18, 9, 12],
                    "icon-image": ["get", "maki"],
                    "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                    "text-offset": [0, 0.75],
                    "text-rotation-alignment": "viewport",
                    "text-anchor": "top",
                    "text-field": [
                        "step",
                        ["get", "sizerank"],
                        ["coalesce", ["get", "name_en"], ["get", "name"]],
                        15,
                        ["get", "ref"]
                    ],
                    "text-letter-spacing": 0.01,
                    "text-max-width": 9
                },
                "paint": {
                    "text-color": "hsl(213, 9%, 100%)",
                    "text-halo-color": "hsl(213, 58%, 5%)",
                    "text-halo-width": 1
                }
            },
            {
                "id": "settlement-subdivision-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "place-labels",
                    "mapbox:group": "Place labels, place-labels"
                },
                "source": "composite",
                "source-layer": "place_label",
                "minzoom": 10,
                "maxzoom": 15,
                "filter": [
                    "all",
                    [
                        "match",
                        ["get", "class"],
                        "settlement_subdivision",
                        ["match", ["get", "worldview"], ["all", "US"], true, false],
                        "disputed_settlement_subdivision",
                        [
                            "all",
                            ["==", ["get", "disputed"], "true"],
                            [
                                "match",
                                ["get", "worldview"],
                                ["all", "US"],
                                true,
                                false
                            ]
                        ],
                        false
                    ],
                    ["<=", ["get", "filterrank"], 3]
                ],
                "layout": {
                    "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                    "text-transform": "uppercase",
                    "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
                    "text-letter-spacing": [
                        "match",
                        ["get", "type"],
                        "suburb",
                        0.15,
                        0.1
                    ],
                    "text-max-width": 7,
                    "text-padding": 3,
                    "text-size": [
                        "interpolate",
                        ["cubic-bezier", 0.5, 0, 1, 1],
                        ["zoom"],
                        11,
                        ["match", ["get", "type"], "suburb", 11, 10.5],
                        15,
                        ["match", ["get", "type"], "suburb", 15, 14]
                    ]
                },
                "paint": {
                    "text-halo-color": "hsla(216, 43%, 0%, 0.75)",
                    "text-halo-width": 1,
                    "text-color": "hsl(212, 8%, 94%)",
                    "text-halo-blur": 0.5
                }
            },
            {
                "id": "settlement-minor-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "place-labels",
                    "mapbox:group": "Place labels, place-labels"
                },
                "source": "composite",
                "source-layer": "place_label",
                "minzoom": 3,
                "maxzoom": 13,
                "filter": [
                    "all",
                    ["<=", ["get", "filterrank"], 3],
                    [
                        "match",
                        ["get", "class"],
                        "settlement",
                        ["match", ["get", "worldview"], ["all", "US"], true, false],
                        "disputed_settlement",
                        [
                            "all",
                            ["==", ["get", "disputed"], "true"],
                            [
                                "match",
                                ["get", "worldview"],
                                ["all", "US"],
                                true,
                                false
                            ]
                        ],
                        false
                    ],
                    [
                        "step",
                        ["zoom"],
                        [">", ["get", "symbolrank"], 6],
                        4,
                        [">=", ["get", "symbolrank"], 7],
                        6,
                        [">=", ["get", "symbolrank"], 8],
                        7,
                        [">=", ["get", "symbolrank"], 10],
                        10,
                        [">=", ["get", "symbolrank"], 11],
                        11,
                        [">=", ["get", "symbolrank"], 13],
                        12,
                        [">=", ["get", "symbolrank"], 15]
                    ]
                ],
                "layout": {
                    "text-line-height": 1.1,
                    "text-size": [
                        "interpolate",
                        ["cubic-bezier", 0.2, 0, 0.9, 1],
                        ["zoom"],
                        3,
                        [
                            "step",
                            ["get", "symbolrank"],
                            12,
                            9,
                            11,
                            10,
                            10.5,
                            12,
                            9.5,
                            14,
                            8.5,
                            16,
                            6.5,
                            17,
                            4
                        ],
                        13,
                        [
                            "step",
                            ["get", "symbolrank"],
                            23,
                            9,
                            21,
                            10,
                            19,
                            11,
                            17,
                            12,
                            16,
                            13,
                            15,
                            15,
                            13
                        ]
                    ],
                    "text-radial-offset": [
                        "step",
                        ["zoom"],
                        ["match", ["get", "capital"], 2, 0.6, 0.55],
                        8,
                        0
                    ],
                    "icon-image": "",
                    "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
                    "text-anchor": ["step", ["zoom"], "center", 8, "center"],
                    "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                    "text-max-width": 7
                },
                "paint": {
                    "text-color": "hsl(212, 8%, 84%)",
                    "text-halo-color": "hsl(216, 43%, 0%)",
                    "text-halo-width": 1,
                    "icon-opacity": ["step", ["zoom"], 1, 8, 0],
                    "text-halo-blur": 1
                }
            },
            {
                "id": "settlement-major-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "place-labels",
                    "mapbox:group": "Place labels, place-labels"
                },
                "source": "composite",
                "source-layer": "place_label",
                "minzoom": 3,
                "maxzoom": 15,
                "filter": [
                    "all",
                    ["<=", ["get", "filterrank"], 3],
                    [
                        "match",
                        ["get", "class"],
                        "settlement",
                        ["match", ["get", "worldview"], ["all", "US"], true, false],
                        "disputed_settlement",
                        [
                            "all",
                            ["==", ["get", "disputed"], "true"],
                            [
                                "match",
                                ["get", "worldview"],
                                ["all", "US"],
                                true,
                                false
                            ]
                        ],
                        false
                    ],
                    [
                        "step",
                        ["zoom"],
                        false,
                        3,
                        ["<=", ["get", "symbolrank"], 6],
                        4,
                        ["<", ["get", "symbolrank"], 7],
                        6,
                        ["<", ["get", "symbolrank"], 8],
                        7,
                        ["<", ["get", "symbolrank"], 10],
                        10,
                        ["<", ["get", "symbolrank"], 11],
                        11,
                        ["<", ["get", "symbolrank"], 13],
                        12,
                        ["<", ["get", "symbolrank"], 15],
                        13,
                        [">=", ["get", "symbolrank"], 11],
                        14,
                        [">=", ["get", "symbolrank"], 15]
                    ]
                ],
                "layout": {
                    "text-line-height": 1.1,
                    "text-size": [
                        "interpolate",
                        ["cubic-bezier", 0.2, 0, 0.9, 1],
                        ["zoom"],
                        3,
                        ["step", ["get", "symbolrank"], 13, 6, 12],
                        6,
                        ["step", ["get", "symbolrank"], 16, 6, 15, 7, 14],
                        8,
                        ["step", ["get", "symbolrank"], 18, 9, 17, 10, 15],
                        15,
                        [
                            "step",
                            ["get", "symbolrank"],
                            23,
                            9,
                            22,
                            10,
                            20,
                            11,
                            18,
                            12,
                            16,
                            13,
                            15,
                            15,
                            13
                        ]
                    ],
                    "text-radial-offset": [
                        "step",
                        ["zoom"],
                        ["match", ["get", "capital"], 2, 0.6, 0.55],
                        8,
                        0
                    ],
                    "icon-image": "",
                    "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                    "text-anchor": ["step", ["zoom"], "center", 8, "center"],
                    "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                    "text-max-width": 7
                },
                "paint": {
                    "text-color": "hsl(212, 8%, 84%)",
                    "text-halo-color": "hsl(216, 43%, 0%)",
                    "text-halo-width": 1,
                    "icon-opacity": ["step", ["zoom"], 1, 8, 0],
                    "text-halo-blur": 1
                }
            },
            {
                "id": "state-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "place-labels",
                    "mapbox:group": "Place labels, place-labels"
                },
                "source": "composite",
                "source-layer": "place_label",
                "minzoom": 3,
                "maxzoom": 9,
                "filter": [
                    "match",
                    ["get", "class"],
                    "state",
                    ["match", ["get", "worldview"], ["all", "US"], true, false],
                    "disputed_state",
                    [
                        "all",
                        ["==", ["get", "disputed"], "true"],
                        ["match", ["get", "worldview"], ["all", "US"], true, false]
                    ],
                    false
                ],
                "layout": {
                    "text-size": [
                        "interpolate",
                        ["cubic-bezier", 0.85, 0.7, 0.65, 1],
                        ["zoom"],
                        4,
                        ["step", ["get", "symbolrank"], 10, 6, 9.5, 7, 9],
                        9,
                        ["step", ["get", "symbolrank"], 21, 6, 16, 7, 13]
                    ],
                    "text-transform": "uppercase",
                    "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"],
                    "text-field": [
                        "step",
                        ["zoom"],
                        [
                            "step",
                            ["get", "symbolrank"],
                            ["coalesce", ["get", "name_en"], ["get", "name"]],
                            5,
                            [
                                "coalesce",
                                ["get", "abbr"],
                                ["get", "name_en"],
                                ["get", "name"]
                            ]
                        ],
                        5,
                        ["coalesce", ["get", "name_en"], ["get", "name"]]
                    ],
                    "text-letter-spacing": 0.15,
                    "text-max-width": 6
                },
                "paint": {
                    "text-color": "hsl(212, 8%, 84%)",
                    "text-halo-color": "hsl(216, 43%, 0%)",
                    "text-halo-width": 1
                }
            },
            {
                "id": "country-label",
                "type": "symbol",
                "metadata": {
                    "mapbox:featureComponent": "place-labels",
                    "mapbox:group": "Place labels, place-labels"
                },
                "source": "composite",
                "source-layer": "place_label",
                "minzoom": 1,
                "maxzoom": 10,
                "filter": [
                    "match",
                    ["get", "class"],
                    "country",
                    ["match", ["get", "worldview"], ["all", "US"], true, false],
                    "disputed_country",
                    [
                        "all",
                        ["==", ["get", "disputed"], "true"],
                        ["match", ["get", "worldview"], ["all", "US"], true, false]
                    ],
                    false
                ],
                "layout": {
                    "text-line-height": 1.1,
                    "text-size": [
                        "interpolate",
                        ["cubic-bezier", 0.2, 0, 0.7, 1],
                        ["zoom"],
                        1,
                        ["step", ["get", "symbolrank"], 11, 4, 9, 5, 8],
                        9,
                        ["step", ["get", "symbolrank"], 22, 4, 19, 5, 17]
                    ],
                    "text-radial-offset": ["step", ["zoom"], 0.6, 8, 0],
                    "icon-image": "",
                    "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                    "text-field": ["coalesce", ["get", "name_en"], ["get", "name"]],
                    "text-max-width": 6
                },
                "paint": {
                    "icon-opacity": [
                        "step",
                        ["zoom"],
                        ["case", ["has", "text_anchor"], 1, 0],
                        7,
                        0
                    ],
                    "text-color": "hsl(212, 8%, 84%)",
                    "text-halo-color": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        2,
                        "hsla(216, 43%, 0%, 0.75)",
                        3,
                        "hsl(216, 43%, 0%)"
                    ],
                    "text-halo-width": 1.25
                }
            }
        ],
        "created": "2022-03-04T20:05:16.018Z",
        "modified": "2022-03-04T20:05:21.171Z",
        "id": "cl0cuj0po000514nt5morcf4l",
        "owner": "lucassbertan",
        "visibility": "private",
        "protected": false,
        "draft": false
    },
    scrollZoom: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker'
    new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map);

    new mapboxgl.Popup({
        offset: 30
    })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);

    bounds.extend(loc.coordinates);

map.fitBounds(bounds, {
    padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100
    }
})
})
