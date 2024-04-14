import React, { useState } from 'react'

const Map = () => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="w-full">
      {!loaded && (
        <div>Loading...</div> // Aquí puedes reemplazar esto con tu componente de carga
      )}
      <iframe
        title="map"
        className={`w-full ${loaded ? '' : 'hidden'}`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8139104160045!2d-99.18450992453711!3d19.420444741068412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fecd47ed8f23%3A0xa6e0008524818b32!2sCastillo%20de%20Chapultepec!5e0!3m2!1ses-419!2smx!4v1713077817624!5m2!1ses-419!2smx"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setLoaded(true)}
      ></iframe>
    </div>
  )
}

export default Map
