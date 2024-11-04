import React, { useEffect } from 'react';
import mount from 'vueApp/AppVue';

function VueApp() {
  useEffect(() => {
    mount();
  }, []);

  return <vue-app />;
}

export default VueApp;
