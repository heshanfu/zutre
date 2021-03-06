import Toast from './toast';
import ToastBody from './toast-body';
import ToastTitle from './toast-title';

import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Toast);
    installPlugin(Vue, ToastBody);
    installPlugin(Vue, ToastTitle);

    const ZToast = Toast;
    
    // toast method used to display new Toast component
    Vue.prototype.$zutre.toast = function(options = null) {
      // if globally assigned default settings and provided options in 
      // method call, then merge those two
      if (typeof this.toast.settings === 'object' && options !== null) {
        options = Object.assign(Object.assign({}, this.toast.settings), options);  
      }

      let $elNotify = document.getElementById('zutre-toast');
      let body = document.getElementsByTagName('body')[0];

      let pos = (typeof options.position === 'string') ? options.position : '';
      let $listNotify = null;

      $listNotify = document.getElementsByClassName('toast-list '+ pos);

      if ($listNotify.length < 1) {
        $listNotify = document.createElement('div');
        $listNotify.className = 'toast-list '+ pos;
      } else {
        if (pos === 'bottom' || pos === 'top') {
          let i = 0;
          let exist = false;

          for(; i < $listNotify.length; i++) {
            if ($listNotify[i].classList.contains('left') || $listNotify[i].classList.contains('right')) continue;
            else  {
              exist = true;
              $listNotify = $listNotify[i];
              break;
            }
          }

          if (exist === false) {
            $listNotify = document.createElement('div');
            $listNotify.className = 'toast-list '+ pos;
          }
        } else {
          $listNotify = $listNotify[0];
        }
      }

      body.appendChild($listNotify);

      if ($elNotify === null) {
        $elNotify = document.createElement('span');
        $elNotify.id = 'zutre-toast';

        $listNotify.appendChild($elNotify);
      }

      let componentClass = Vue.extend(ZToast);
      let $toast = new componentClass( { propsData: options } );

      $toast.$mount('#zutre-toast');
    };
    // console.log(Vue.$zutre);
      // toast(options) {
      //   console.log(options);
      // },
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Toast,
    ToastBody,
    ToastTitle,
};
