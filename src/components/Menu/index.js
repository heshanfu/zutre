import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuDivider from './MenuDivider';
import { usePlugin, installPlugin } from '@/utils';

const VuePlugin = {
  install(Vue) {
    installPlugin(Vue, Menu);
    installPlugin(Vue, MenuItem);
    installPlugin(Vue, MenuDivider);
  },
};

usePlugin(VuePlugin);

export default VuePlugin;

export {
    Menu,
    MenuItem,
    MenuDivider,
};
