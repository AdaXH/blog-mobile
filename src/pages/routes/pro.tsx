/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line no-use-before-define
import './pro.css';

import { useRegisterSW } from 'virtual:pwa-register/react';

function ReloadPrompt() {
  // replaced dynamically
  // replaced dyanmicaly
  const reloadSW = '__RELOAD_SW__';

  useRegisterSW({
    onRegistered(r: any) {
      // @ts-ignore
      if (reloadSW === 'true') {
        r &&
          setInterval(() => {
            console.log('Checking for sw update');
            r.update();
          }, 20000 /* 20s for testing purposes */);
      } else {
        // eslint-disable-next-line prefer-template
        console.log('SW Registered: ' + r);
      }
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  return null;
}

export default ReloadPrompt;
