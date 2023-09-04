import React, { useEffect, useState } from 'react';
import 'ol/ol.css'; // Import OpenLayers CSS
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import LineString from 'ol/geom/LineString';
import { Style, Stroke } from 'ol/style';
import RoutingInput from '../components/routing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import './map.css';

function OpenLayersMap() {
  const [showRoutingInput, setShowRoutingInput] = useState(false);
  const [map, setMap] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState(null);

  useEffect(() => {
    const newMap = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [83, 28], // Coordinates for Pokhara, Nepal
        zoom: 2,
      }),
    });

    setMap(newMap);

    return () => {
      newMap.setTarget(null);
    };
  }, []);

  const toggleRoutingInput = () => {
    setShowRoutingInput(!showRoutingInput);
  };

  const addRouteToMap = (routeCoordinates) => {
    setRouteCoordinates(routeCoordinates);

    // Log the route coordinates to the console
    console.log('Route Coordinates:', routeCoordinates);
  };

  useEffect(() => {
    if (routeCoordinates && map) {
      const routeSource = new VectorSource({
        features: [
          new Feature({
            geometry: new LineString(routeCoordinates),
          }),
        ],
      });

      const routeLayer = new VectorLayer({
        source: routeSource,
        style: new Style({
          stroke: new Stroke({
            color: 'blue',
            width: 4,
          }),
        }),
      });

      map.addLayer(routeLayer);
      map.getView().fit(routeSource.getExtent());
    }
  }, [routeCoordinates, map]);

  return (
    <div className="map-container">
      <div id="map" className="map" style={{ width: '100%', height: '100vh' }}></div>
      <div className={`routing-input-popup ${showRoutingInput ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleRoutingInput}>
          Close
        </button>
        <RoutingInput addRouteToMap={addRouteToMap} />
      </div>
      <div className="direction-button">
        <button onClick={toggleRoutingInput}>
          <FontAwesomeIcon icon={faDirections} /> Get Direction
        </button>
      </div>
    </div>
  );
}

export default OpenLayersMap;
