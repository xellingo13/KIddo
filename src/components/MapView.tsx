import { APIProvider, Map, AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';
import { Nanny as Place } from '../types';
import { useEffect } from 'react';
import { Map as MapIcon } from 'lucide-react';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

interface MapViewProps {
  places: Place[];
  selectedPlace: Place | null;
  onSelectPlace: (place: Place) => void;
  language?: 'UZ' | 'EN' | 'RU';
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

export default function MapView({ places, selectedPlace, onSelectPlace, language = 'UZ' }: MapViewProps) {
  const tMap = {
    UZ: {
      inactive: "Xarita faol emas",
      needsKey: "Interaktiv xaritani ko'rish uchun Google Maps API kaliti talab qilinadi.",
      stepsTitle: "O'rnatish bosqichlari",
      step1: "Cloud Console orqali kalit oling.",
      step2: "Sozlamalar (Secrets) bo'limiga kiring.",
      step3: "GOOGLE_MAPS_PLATFORM_KEY maxfiy so'zini qo'shing.",
      autoUpdate: "Avtomatik yangilanadi"
    },
    EN: {
      inactive: "Map is inactive",
      needsKey: "A Google Maps API key is required to view the interactive map.",
      stepsTitle: "Setup Steps",
      step1: "Obtain an API key via the Cloud Console.",
      step2: "Go to the Settings (Secrets) tab.",
      step3: "Add the GOOGLE_MAPS_PLATFORM_KEY secret.",
      autoUpdate: "Automatically updates"
    },
    RU: {
      inactive: "Карта неактивна",
      needsKey: "Для просмотра интерактивной карты требуется API-ключ Google Maps.",
      stepsTitle: "Шаги установки",
      step1: "Получите ключ через Cloud Console.",
      step2: "Перейдите в раздел Настройки (Secrets).",
      step3: "Добавьте секретное слово GOOGLE_MAPS_PLATFORM_KEY.",
      autoUpdate: "Обновляется автоматически"
    }
  }[language];

  if (!hasValidKey) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-[#fcfcfc] p-8 text-center border-l border-black/[0.03]">
        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-8 border border-black/5 shadow-xl">
          <MapIcon className="w-10 h-10 text-brand" />
        </div>
        <h2 className="text-3xl font-serif mb-4 text-slate-900">{tMap.inactive}</h2>
        <p className="max-w-xs text-slate-400 mb-8 font-light leading-relaxed">
          {tMap.needsKey}
        </p>
        <div className="bg-white border border-black/5 rounded-[2rem] p-8 text-left w-full max-w-sm mb-8 shadow-sm">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand mb-6 text-center">{tMap.stepsTitle}</h4>
          <ol className="text-xs space-y-5 text-slate-500 font-medium">
            <li className="flex gap-4">
              <span className="flex shrink-0 w-6 h-6 rounded-full bg-slate-50 border border-black/5 items-center justify-center text-[10px] text-slate-400">01</span>
              <span><a href="https://console.cloud.google.com/google/maps-apis/start" className="text-slate-900 underline decoration-brand/30 underline-offset-4">Cloud Console</a> {tMap.step1}</span>
            </li>
            <li className="flex gap-4">
              <span className="flex shrink-0 w-6 h-6 rounded-full bg-slate-50 border border-black/5 items-center justify-center text-[10px] text-slate-400">02</span>
              <span>{tMap.step2}</span>
            </li>
            <li className="flex gap-4">
              <span className="flex shrink-0 w-6 h-6 rounded-full bg-slate-50 border border-black/5 items-center justify-center text-[10px] text-slate-400">03</span>
              <span>{tMap.step3}</span>
            </li>
          </ol>
        </div>
        <p className="text-[10px] text-slate-300 uppercase tracking-widest font-black animate-pulse">{tMap.autoUpdate}</p>
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
