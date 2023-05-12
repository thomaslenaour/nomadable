import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";

import * as cons from "../../constants";
import { MapArea, Place } from "../../redux/slices/placeSlice";
import { useRouter } from "next/router";
import { convertPlacesToPins, makeIcon } from "./MapSearchModules";
import { useAppSelector } from "../../redux/hooks";
import {
  selectMapboxAccessToken,
  selectMapboxStyleUrl,
} from "../../redux/slices/envSlice";

interface Props {
  mapId: string;
  lat?: number;
  lng?: number;
  zoom?: number;
  places: Place[];
  onChange: (
    latStart: number,
    lngStart: number,
    latEnd: number,
    lngEnd: number
  ) => void;
  onClickMarker: (placeId: string) => void;
  selectedPlace: string;
  viewHeight: number;
  hoveredPlace: string;
  mapAreaOfCity?: MapArea;
}

interface Pin {
  id: string;
  lat: number;
  lng: number;
  color: string;
  placeType: string;
  name: string;
  reviewStars: number | null;
}

let geoControl: any = null;

export const MapSearch: React.FC<Props> = (props) => {
  const router = useRouter();
  const mapId = `mapbox-${props.mapId}`;
  const mapRef = useRef<mapboxgl.Map>();
  const markersRef = useRef<{ pin: Pin; marker: any }[]>([]);
  const [pins, setPins] = useState<Pin[]>([]);
  // const [zoomLevel, setZoomLevel] = useState(0);
  const [isIconVisible, setIsIconVisible] = useState(false);
  const [isNameVisible, setIsNameVisible] = useState(false);
  // const [queryLoaded, setQueryLoaded] = useState(false);
  // const geoControlRef = useRef();
  const mapboxAccessToken = useAppSelector(selectMapboxAccessToken);
  const mapboxStyleUrl = useAppSelector(selectMapboxStyleUrl);

  /**
   * Modules
   */

  const onViewportUpdate = () => {
    if (!mapRef.current) return;

    const currentBound = mapRef.current.getBounds();

    const ne = currentBound.getNorthEast();
    const sw = currentBound.getSouthWest();

    props.onChange(sw.lat, sw.lng, ne.lat, ne.lng);
  };

  /**
   * Load Map Box
   */
  const loadMapBox = (_mapboxAccessToken: string) => {
    mapboxgl.accessToken = _mapboxAccessToken;

    mapRef.current = new mapboxgl.Map({
      container: mapId,
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: mapboxStyleUrl,
      center: [0, 0],
      zoom: 0.1,
      interactive: true,
    });

    // on change map
    mapRef.current.on("dragend", () => {
      onViewportUpdate();
    });

    mapRef.current.on("zoomend", () => {
      onViewportUpdate();
      if (mapRef.current) {
        const zoom = mapRef.current.getZoom();

        const _iconVisible = zoom >= 10;
        const _nameVisible = zoom >= 14;
        setIsIconVisible(_iconVisible);
        setIsNameVisible(_nameVisible);
      }
    });

    geoControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true,
    });

    mapRef.current.addControl(geoControl);
  };

  /**
   * Update Pins
   */

  const updatePins = (pins: Pin[]) => {
    // Create a default Marker and add it to the mapbox.

    markersRef.current.map((m) => {
      m.marker.remove();
    });

    pins.forEach((pin) => {
      if (!mapRef.current) return;
      const marker = new mapboxgl.Marker({ color: pin.color })
        .setLngLat([pin.lng, pin.lat])
        .addTo(mapRef.current);
      markersRef.current.push({ pin, marker });

      marker.getElement().addEventListener("click", () => {
        props.onClickMarker(pin.id);
      });

      if (isIconVisible && props.hoveredPlace !== pin.id) {
        marker.getElement().innerHTML = makeIcon({
          placeType: pin.placeType,
          name: pin.name,
          color: pin.color,
          fontSize: isIconVisible ? 0.8 : 0.7,
          withName: isNameVisible,
          reviewStars: pin.reviewStars,
        });
      }

      marker.getElement().style.fontSize = "0.8rem";

      marker.getElement().style.cursor = "pointer";
      marker.getElement().style.opacity =
        pin.id === props.selectedPlace ? "0.8" : "1";
    });
  };

  const updateMapArea = (query: any) => {
    try {
      const latStart = parseFloat(query.latStart);
      const lngStart = parseFloat(query.lngStart);
      const latEnd = parseFloat(query.latEnd);
      const lngEnd = parseFloat(query.lngEnd);

      const map = mapRef.current;
      map?.fitBounds(
        [
          [lngEnd, latEnd],
          [lngStart, latStart],
        ],
        { duration: 0 }
      );
    } catch (err) {
      return;
    }
  };

  /**
   * Effect
   */

  useEffect(() => {
    markersRef.current.forEach((marker) => {
      marker.marker.getElement().style.opacity =
        marker.pin.id === props.selectedPlace ? 0.5 : 1;
    });
  }, [props.selectedPlace]);

  useEffect(() => {
    updatePins(pins);
  }, [pins, isIconVisible, isNameVisible, props.hoveredPlace]);

  useEffect(() => {
    updatePins(pins);
  }, [pins]);

  useEffect(() => {
    // if (queryLoaded) return;

    if (router.query.latStart && router.query.lngStart) {
      updateMapArea(router.query);
      // setQueryLoaded(true);
    } else if (props.mapAreaOfCity) {
      updateMapArea(props.mapAreaOfCity);
    } else {
      onViewportUpdate();
    }
  }, [mapRef.current, props.mapAreaOfCity]);

  useEffect(() => {
    setPins(convertPlacesToPins(props.places));
  }, [props.places]);

  useEffect(() => {
    if (props.viewHeight < 1) return;
    if (mapboxAccessToken === "") return;

    loadMapBox(mapboxAccessToken);
  }, [props.viewHeight, mapboxAccessToken]);

  /**
   * Render
   */

  return (
    <MapWrapper>
      <Map id={mapId} viewHeight={props.viewHeight}></Map>
    </MapWrapper>
  );
};

const Map = styled.div<{ viewHeight: number }>`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: ${cons.WIDTH_TABLET}px) {
    height: calc(${(props) => props.viewHeight}px - 15rem);
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
