const openLayersData = {
    "OpenLayers": {
        "description": "OpenLayers is a high-performance JavaScript library for rendering maps and working with geographic data.",
        "link": "https://openlayers.org/en/latest/apidoc/module-ol_View-View.html",
        "subtopics": {
            "Observable": {
                "description": "Provides event handling capabilities for OpenLayers objects.",
                "link": "https://openlayers.org/en/latest/apidoc/module-ol_Observable-Observable.html",
                "subtopics": {
                    "BaseObject": {
                        "description": "A base class for creating observable objects with properties.",
                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_Object-BaseObject.html",
                        "subtopics": {
                            "Collection": {
                                "description": "An observable list of objects, such as layers or features.",
                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_Collection-Collection.html",
                            },
                            "Feature": {
                                "description": "Represents a geographic feature with associated geometry and attributes.",
                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_Feature-Feature.html",
                            },
                            "Geolocation": {
                                "description": "Tracks the user's geographic position in real-time.",
                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_Geolocation-Geolocation.html",
                            },
                            "Map": {
                                "description": "The core map object for rendering layers, interactions, and controls.",
                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html",
                            },
                            "Overlay": {
                                "description": "A container for floating elements, such as popups, over the map.",
                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_Overlay-Overlay.html",
                            },
                            "View": {
                                "description": "Defines the view settings for the map, including center, zoom, and rotation.",
                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_View-View.html",
                            },
                            "Control": {
                                "description": "Adds user interface elements to the map.",
                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_control_Control-Control.html",
                                "subtopics": {
                                    "Attribution": {
                                        "description": "Displays attribution information for map layers.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution-Attribution.html",
                                    },
                                    "FullScreen": {
                                        "description": "Allows toggling full-screen mode for the map.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_control_FullScreen-FullScreen.html",
                                    },
                                    "MousePosition": {
                                        "description": "Displays the cursor's geographic coordinates on the map.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_control_MousePosition-MousePosition.html",
                                    },
                                    "OverviewMap": {
                                        "description": "Adds a miniature map showing an overview of the current view.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_control_OverviewMap-OverviewMap.html",
                                    },
                                    "Rotate": {
                                        "description": "Provides a control for rotating the map.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_control_Rotate-Rotate.html",
                                    },
                                    "ScaleLine": {
                                        "description": "Displays a scale bar on the map.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_control_ScaleLine-ScaleLine.html",
                                    },
                                    "ZoomSlider": {
                                        "description": "Adds a slider control for zooming the map.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_control_ZoomSlider-ZoomSlider.html",
                                    },
                                    "ZoomToExtent": {
                                        "description": "Provides a button to zoom to a predefined extent.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_control_ZoomToExtent-ZoomToExtent.html",
                                    },
                                    "Zoom": {
                                        "description": "Adds buttons for zooming in and out of the map.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_control_Zoom-Zoom.html",
                                    },
                                }
                            },
                            "Geometry": {
                                "description": "Handles geometries used in vector layers.",
                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_geom_Geometry-Geometry.html",
                                "subtopics": {
                                    "GeometryCollection": {
                                        "description": "Holds a collection of geometries.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_geom_GeometryCollection-GeometryCollection.html",
                                    },
                                    "SimpleGeometry": {
                                        "description": "Base class for simple geometries such as points and lines.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_geom_SimpleGeometry-SimpleGeometry.html",
                                        "subtopics": {
                                            "Circle": {
                                                "description": "Represents a circular geometry.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_geom_Circle-Circle.html",
                                            },
                                            "LineString": {
                                                "description": " Represents a series of connected line segments.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_geom_LineString-LineString.html",
                                            },
                                            "LinearRing": {
                                                "description": "Represents a closed linear ring geometry.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_geom_LinearRing-LinearRing.html",
                                            },
                                            "MultiLineString": {
                                                "description": "Represents multiple line strings as a single geometry.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_geom_MultiLineString-MultiLineString.html",
                                            },
                                            "MultiPoint": {
                                                "description": "Represents multiple points as a single geometry.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_geom_MultiPoint-MultiPoint.html",
                                            },
                                            "MultiPolygon": {
                                                "description": "Represents multiple polygons as a single geometry.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_geom_MultiPolygon-MultiPolygon.html",
                                            },
                                            "Point": {
                                                "description": "Represents a single geographic point.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_geom_Point-Point.html",
                                            },
                                            "Polygon": {
                                                "description": "Defines a closed polygon geometry.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_geom_Polygon-Polygon.html",
                                            },
                                        }
                                    },

                                }
                            },
                            "Interaction": {
                                "description": "Manages user interactions with the map, such as dragging or zooming.",
                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_Interaction-Interaction.html",
                                "subtopics": {
                                    "DblClickDragZoom": {
                                        "description": "Zooms the map by double-clicking and dragging.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_DblClickDragZoom-DblClickDragZoom.html",
                                    },
                                    "DoubleClickZoom": {
                                        "description": "Enables zooming on the map by double-clicking a location.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_DoubleClickZoom-DoubleClickZoom.html",
                                    },
                                    "DragAndDrop": {
                                        "description": "Enables dragging and dropping files to add new layers.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragAndDrop-DragAndDrop.html",
                                    },
                                    "KeyboardPan": {
                                        "description": "Allows panning the map using keyboard arrow keys.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_KeyboardPan-KeyboardPan.html",
                                    },
                                    "KeyboardZoom": {
                                        "description": "Enables zooming in and out of the map using keyboard shortcuts.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_KeyboardZoom-KeyboardZoom.html",
                                    },
                                    "Link": {
                                        "description": "Synchronizes map states between multiple views.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_Link-Link.html",
                                    },
                                    "MouseWheelZoom": {
                                        "description": "Allows zooming in and out of the map using the mouse wheel.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_MouseWheelZoom-MouseWheelZoom.html",
                                    },
                                    "PointerInteraction": {
                                        "description": "Base class for interactions that involve pointer events.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_Pointer-PointerInteraction.html",
                                        "subtopics": {
                                            "DragBox": {
                                                "description": "Enables drawing a rectangular box on the map by dragging the pointer.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragBox-DragBox.html",
                                            },
                                            "DragPan": {
                                                "description": "Allows panning the map by dragging the pointer.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragPan-DragPan.html",
                                            },
                                            "DragRotateAndZoom": {
                                                "description": "Enables rotating and zooming the map simultaneously using a combination of drag gestures.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragRotateAndZoom-DragRotateAndZoom.html",
                                            },
                                            "DragRotate": {
                                                "description": "Allows rotating the map by dragging the pointer.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_DragRotate-DragRotate.html",
                                            },
                                            "Draw": {
                                                "description": "Facilitates drawing geometries like points, lines, and polygons on the map.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-Draw.html",
                                            },
                                            "Extent": {
                                                "description": "Enables modifying a rectangular extent on the map interactively.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_Extent-Extent.html",
                                            },
                                            "Modify": {
                                                "description": "Allows modifying existing geometries on the map.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify-Modify.html",
                                            },
                                            "PinchRotate": {
                                                "description": "Enables rotating the map using a pinch gesture.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_PinchRotate-PinchRotate.html",
                                            },
                                            "PinchZoom": {
                                                "description": "Allows zooming the map using a pinch gesture.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_PinchZoom-PinchZoom.html",
                                            },
                                            "Snap": {
                                                "description": "Provides snapping support for drawing and modifying geometries.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_Snap-Snap.html",
                                            },
                                            "Translate": {
                                                "description": "Enables translating (moving) geometries on the map.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_Translate-Translate.html",
                                            },
                                        }
                                    },
                                    "Select": {
                                        "description": "Allows selecting features on the map through various interactions like click or hover.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-Select.html",
                                    },

                                }
                            },
                            "BaseLayer": {
                                "description": "Represents the foundational layer class for all layers.",
                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html",
                                "subtopics": {
                                    "LayerGroup": {
                                        "description": "Groups multiple layers together for easier management and collective operations.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_Group-LayerGroup.html",
                                    },
                                    "Layer": {
                                        "description": "Base class for handling individual map layers.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_Layer-Layer.html",
                                        "subtopics": {
                                            "BaseImageLayer": {
                                                "description": "Base class for layers that display single images.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseImage-BaseImageLayer.html",
                                                "subtopics": {
                                                    "ImageLayer": {
                                                        "description": "Displays a single image over a specified extent.",
                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_Image-ImageLayer.html",
                                                    },
                                                }
                                            },
                                            "BaseTileLayer": {
                                                "description": "Base class for layers that provide tiled data.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseTile-BaseTileLayer.html",
                                                "subtopics": {
                                                    "TileLayer": {
                                                        "description": "Displays data organized in tiles, such as raster map tiles.",
                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html",
                                                    },
                                                    "WebGLTileLayer": {
                                                        "description": "Displays tiled data using WebGL for enhanced performance.",
                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_WebGLTile-WebGLTileLayer.html",
                                                    },
                                                }
                                            },
                                            "BaseVectorLayer": {
                                                "description": "Base class for layers that display vector data.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_BaseVector-BaseVectorLayer.html",
                                                "subtopics": {
                                                    "Heatmap": {
                                                        "description": "Visualizes data density as a heatmap.",
                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_Heatmap-Heatmap.html",
                                                    },
                                                    "VectorImageLayer": {
                                                        "description": "Displays vector data rendered as images.",
                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorImage-VectorImageLayer.html",
                                                    },
                                                    "VectorTileLayer": {
                                                        "description": "Handles rendering of vector tiles.",
                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_VectorTile-VectorTileLayer.html",
                                                    },
                                                    "VectorLayer": {
                                                        "description": "Displays vector features on the map.",
                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_Vector-VectorLayer.html",
                                                        "subtopics": {
                                                            "Graticule": {
                                                                "description": "Displays a grid of latitude and longitude lines on the map.",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_layer_Graticule-Graticule.html",
                                                            },
                                                        }
                                                    },
                                                }
                                            },
                                        }
                                    },
                                }
                            },
                            "Source": {
                                "description": "Defines the data source for layers, such as images, tiles, or vectors.",
                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_Source-Source.html",
                                "subtopics": {
                                    "ImageSource": {
                                        "description": "Provides sources for image-based data layers.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_Image-ImageSource.html",
                                        "subtopics": {
                                            "ImageArcGISRest": {
                                                "description": "Retrieves images from an ArcGIS REST service.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_ImageArcGISRest-ImageArcGISRest.html",
                                            },
                                            "ImageCanvasSource": {
                                                "description": "Uses a canvas element to display dynamically generated images.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_ImageCanvas-ImageCanvasSource.html",
                                            },
                                            "ImageMapGuide": {
                                                "description": " Fetches images from a MapGuide server.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_ImageMapGuide-ImageMapGuide.html",
                                            },
                                            "Static": {
                                                "description": "Displays a single static image over a specified extent.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_ImageStatic-Static.html",
                                            },
                                            "ImageWMS": {
                                                "description": "Retrieves images from a Web Map Service (WMS) source.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_ImageWMS-ImageWMS.html",
                                            },
                                            "RasterSource": {
                                                "description": "Processes input image layers and renders the result as a new image.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_Raster-RasterSource.html",
                                            },
                                        }
                                    },
                                    "TileSource": {
                                        "description": "Provides data as tiles for efficient rendering of large datasets.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_Tile-TileSource.html",
                                        "subtopics": {
                                            "DataTileSource": {
                                                "description": "Generates tiles from raw data arrays.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_DataTile-DataTileSource.html",
                                                "subtopics": {
                                                    "GeoTIFFSource": {
                                                        "description": "Retrieves geospatial data from GeoTIFF files",
                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_GeoTIFF-GeoTIFFSource.html",
                                                    },
                                                    "ImageTileSource": {
                                                        "description": "Handles image-based tile data.",
                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_ImageTile-ImageTileSource.html",
                                                        "subtopics": {
                                                            "TileDebug": {
                                                                "description": "Displays debugging information for tiles.",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_TileDebug-TileDebug.html",
                                                            },
                                                        }
                                                    },
                                                    "SentinelHub": {
                                                        "description": "Provides data from Sentinel Hub services.",
                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_SentinelHub-SentinelHub.html",
                                                    },
                                                }
                                            },
                                            "UTFGrid": {
                                                "description": "Displays UTFGrid-based interaction data for tiles.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_UTFGrid-UTFGrid.html",
                                            },
                                            "UrlTile": {
                                                "description": "Uses a URL template to fetch tile images.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_UrlTile-UrlTile.html",
                                                "subtopics": {
                                                    "TileImage": {
                                                        "description": "Handles image tiles using a URL template.",
                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_TileImage-TileImage.html",
                                                        "subtopics": {
                                                            "BingMaps": {
                                                                "description": "Provides tiled data from Bing Maps services.",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_BingMaps-BingMaps.html",
                                                            },
                                                            "Google": {
                                                                "description": "Fetches map tiles from Google Maps (if configured).",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_Google-Google.html",
                                                            },
                                                            "IIIF": {
                                                                "description": "Retrieves images from International Image Interoperability Framework (IIIF) services.",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_IIIF-IIIF.html",
                                                            },
                                                            "OGCMapTile": {
                                                                "description": "Fetches tiles from OGC-compliant map tile services.",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_OGCMapTile-OGCMapTile.html",
                                                            },
                                                            "TileArcGISRest": {
                                                                "description": "Retrieves tiles from ArcGIS REST services.",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_TileArcGISRest-TileArcGISRest.html",
                                                            },
                                                            "TileJSON": {
                                                                "description": "Loads tiles from a TileJSON configuration.",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_TileJSON-TileJSON.html",
                                                            },
                                                            "TileWMS": {
                                                                "description": "Fetches tiles from a WMS source.",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_TileWMS-TileWMS.html",
                                                            },
                                                            "WMTS": {
                                                                "description": "Retrieves tiles from a Web Map Tile Service (WMTS).",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_WMTS-WMTS.html",
                                                            },
                                                            "XYZ": {
                                                                "description": "Loads tiles using an XYZ URL template.",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_XYZ-XYZ.html",
                                                                "subtopics": {
                                                                    "CartoDB": {
                                                                        "description": "Provides tiled data from CartoDB services.",
                                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_CartoDB-CartoDB.html",
                                                                    },
                                                                    "OSM": {
                                                                        "description": "Fetches OpenStreetMap tiles.",
                                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_OSM-OSM.html",
                                                                    },
                                                                    "StadiaMaps": {
                                                                        "description": "Retrieves map tiles from Stadia Maps.",
                                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_StadiaMaps-StadiaMaps.html",
                                                                    },
                                                                },
                                                            },
                                                            "Zoomify": {
                                                                "description": "Displays tiles for large images using the Zoomify format.",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_Zoomify-Zoomify.html",
                                                            },
                                                        },
                                                    },
                                                    "VectorTile": {
                                                        "description": "Handles vector tile data.",
                                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_VectorTile-VectorTile.html",
                                                        "subtopics": {
                                                            "OGCVectorTile": {
                                                                "description": "Provides vector tile data using OGC standards.",
                                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_OGCVectorTile-OGCVectorTile.html",
                                                            },
                                                        }
                                                    },
                                                },
                                            },

                                        },

                                    },

                                    "VectorSource": {
                                        "description": "Manages vector data for layers.",
                                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_Vector-VectorSource.html",
                                        "subtopics": {
                                            "Cluster": {
                                                "description": "Groups point features into clusters for better visualization.",
                                                "link": "https://openlayers.org/en/latest/apidoc/module-ol_source_Cluster-Cluster.html",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            "Tile": {
                "description": "Handles tiled map data for efficient rendering.",
                "link": "https://openlayers.org/en/latest/apidoc/module-ol_Tile-Tile.html",
                "subtopics": {
                    "DataTile": {
                        "description": "Generates tile data dynamically for display on the map.",
                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_DataTile-DataTile.html",
                    },
                    "ImageTile": {
                        "description": "Represents individual image tiles for raster-based layers.",
                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_ImageTile-ImageTile.html",
                    },
                    "VectorTile": {
                        "description": "Manages vector tiles containing geospatial data.",
                        "link": "https://openlayers.org/en/latest/apidoc/module-ol_VectorTile-VectorTile.html",
                    },
                }
            }
        }
    }
}




// Function to create a tree structure
function createTree(data) {
    const ul = document.createElement('ul');
    for (const key in data) {
        const li = document.createElement('li');
        const link = data[key].link ? `<a href="${data[key].link}" target="_blank">${key}</a>` : key;
        li.innerHTML = `<strong>${link}</strong>: ${data[key].description || ''}`;

        if (data[key].subtopics && Object.keys(data[key].subtopics).length > 0) {
            li.appendChild(createTree(data[key].subtopics));
        }
        ul.appendChild(li);

        // Add toggle functionality
        li.addEventListener('click', (event) => {
            li.classList.toggle('open');
            event.stopPropagation();
        });
    }
    return ul;
}

// Attach the tree to the HTML container
const treeContainer = document.getElementById('tree');
treeContainer.appendChild(createTree(openLayersData));


// Flow Chart -------------------------------------------------------------------------------------------
