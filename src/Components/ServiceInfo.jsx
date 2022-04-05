import React from 'react';
import service from './../Data/ServiceInfoData';
import '../Sass/ServiceInfo.scss';

function ServiceInfo() {
  return (
    <>
      {service.map((services, idx) => {
        return (
          <div key={idx} className="service-info">
            <h1>{services.title}</h1>
            <h2>{services.subtitle}</h2>
            <p>{services.text}</p>
          </div>
        );
      })}
    </>
  );
}

export default ServiceInfo;
