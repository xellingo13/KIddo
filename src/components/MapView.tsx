import { APIProvider, Map, AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';
import { Place } from '../types';
import { useEffect } from 'react';
import { Map as MapIcon } from 'lucide-react';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

interface MapViewProps {
  places: Place[];
  selectedPlace: Place | null;
  onSelectPlace: (place: Place) => void;
}

function MapUpdater({ selectedPlace }: { selectedPlace: Place | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (map && selectedPlace) {
      map.panTo(selectedPlace.location);
      map.setZoom(14);
    }
  }, [map, selectedPlace]);

  return null;
}

const MAP_STYLES = [
  {
    "elementType": "geometry",
    "stylers": [{ "color": "#f5f5f5" }]
  },
  {
    "elementType": "labels.icon",
    "stylers": [{ "visibility": "off" }]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#616161" }]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [{ "color": "#f5f5f5" }]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{ "color": "#eeeeee" }]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{ "color": "#757575" }]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{ "color": "#ffffff" }]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{ "color": "#e9e9e9" }]
  }
];

export default function MapView({ places, selectedPlace, onSelectPlace }: MapViewProps) {
  if (!hasValidKey) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-[#fcfcfc] p-8 text-center border-l border-black/[0.03]">
        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 border border-black/5 shadow-xl">
          <MapIcon className="w-10 h-10 text-brand" />
        </div>
        <h2 className="text-3xl font-serif mb-4 text-slate-900">Xarita faol emas</h2>
        <p className="max-w-xs text-slate-400 mb-8 font-light leading-relaxed">
          Interaktiv xaritani ko'rish uchun Google Maps API kaliti talab qilinadi.
        </p>
        <div className="bg-white border border-black/5 rounded-[2rem] p-8 text-left w-full max-w-sm mb-8 shadow-sm">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand mb-6 text-center">O'rnatish bosqichlari</h4>
          <ol className="text-xs space-y-5 text-slate-500 font-medium">
            <li className="flex gap-4">
              <span className="flex shrink-0 w-6 h-6 rounded-full bg-slate-50 border border-black/5 items-center justify-center text-[10px] text-slate-400">01</span>
              <span><a href="https://console.cloud.google.com/google/maps-apis/start" className="text-slate-900 underline decoration-brand/30 underline-offset-4">Cloud Console</a> orqali kalit oling.</span>
            </li>
            <li className="flex gap-4">
              <span className="flex shrink-0 w-6 h-6 rounded-full bg-slate-50 border border-black/5 items-center justify-center text-[10px] text-slate-400">02</span>
              <span>Sozlamalar (Secrets) bo'limiga kiring.</span>
            </li>
            <li className="flex gap-4">
              <span className="flex shrink-0 w-6 h-6 rounded-full bg-slate-50 border border-black/5 items-center justify-center text-[10px] text-slate-400">03</span>
              <span><code>GOOGLE_MAPS_PLATFORM_KEY</code> maxfiy so'zini qo'shing.</span>
            </li>
          </ol>
        </div>
        <p className="text-[10px] text-slate-300 uppercase tracking-widest font-black animate-pulse">Avtomatik yangilanadi</p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={API_KEY} version="weekly">
      <Map
        defaultCenter={{ lat: 41.3111, lng: 69.2797 }}
        defaultZoom={12}
        mapId="DEMO_MAP_ID"
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        className="w-full h-full"
        disableDefaultUI={true}
        clickableIcons={false}
        styles={MAP_STYLES}
      >
        <MapUpdater selectedPlace={selectedPlace} />
        {places.map((place) => (
          <AdvancedMarker
            key={place.id}
            position={place.location}
            onClick={() => onSelectPlace(place)}
          >
            <div className="relative group">
              {selectedPlace?.id === place.id && (
                <div className="absolute -inset-4 bg-emerald-500/30 rounded-full blur-xl animate-pulse"></div>
              )}
              <Pin 
                background={selectedPlace?.id === place.id ? "#10b981" : "#ffffff"} 
                borderColor={selectedPlace?.id === place.id ? "#ffffff" : "#10b981"} 
                glyphColor={selectedPlace?.id === place.id ? "#ffffff" : "#10b981"} 
                scale={selectedPlace?.id === place.id ? 1.1 : 0.8}
              />
            </div>
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
}
