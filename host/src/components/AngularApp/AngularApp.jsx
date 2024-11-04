import React, { useEffect } from 'react';
import { mount } from 'angularApp/Component';

const AngularApp = () => {
  useEffect(() => {
    mount();
  }, []);
  return (
    <div className='angular-remote-app'>
      <app-root></app-root>
    </div>
  );
};

export default AngularApp;
