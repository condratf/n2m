'use client'
import { FC } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

export const LocationMap: FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ''
    // process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  })

  const center = {
    lat: 55.751244,
    lng: 37.618423
  }

  return isLoaded ? (
    <GoogleMap
      center={center}
      zoom={14}
      mapContainerStyle={{
        width: '100%',
        height: '100%',
        borderRadius: '20px'
      }}
      options={{
        clickableIcons: false,
      }}
    />
  ) : null;
}
