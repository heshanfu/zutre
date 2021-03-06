import Code from './code';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Code);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Code,
};
