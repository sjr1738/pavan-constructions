import { useEffect, useRef } from 'react';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Create map div
    const mapDiv = document.createElement('div');
    mapDiv.id = 'mapDiv';
    mapDiv.style.height = '100%';
    mapDiv.style.margin = '0';
    mapDiv.style.padding = '0';
    
    if (mapContainerRef.current) {
      mapContainerRef.current.innerHTML = '';
      mapContainerRef.current.appendChild(mapDiv);
    }

    // Set up the embed logic
    const onEmbedLoad = () => {
      console.log("Map embed loaded");
    };

    window.onEmbedLoad = onEmbedLoad;

    const onApiLoad = () => {
      const embed = document.createElement('script');
      embed.src = "https://maps.gstatic.com/maps-api-v3/embed/js/60/12/init_embed.js";
      document.body.appendChild(embed);
    };

    window.onApiLoad = onApiLoad;

    // Add the Google Maps script
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?client=google-maps-embed&paint_origin=&libraries=geometry,search&v=weekly&loading=async&language=en&region=in&callback=onApiLoad";
    script.async = true;
    script.defer = true;
    
    document.body.appendChild(script);

    return () => {
      // Clean up
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete window.onEmbedLoad;
      delete window.onApiLoad;
    };
  }, []);

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-full rounded-xl overflow-hidden"
      style={{
        height: '100%',
        margin: 0,
        padding: 0,
        boxShadow: '2px 4px 8px rgba(216, 81, 44, 0.6)' // Added box-shadow
      }}
    />
  );
};

export default Map;
