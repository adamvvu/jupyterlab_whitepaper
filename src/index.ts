import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_whitepaper extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_whitepaper:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_whitepaper is activated!');
    const style = 'jupyterlab_whitepaper/index.css';

    manager.register({
      name: 'jupyterlab_whitepaper',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
