import { configure, addDecorator } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import centered from '@kadira/react-storybook-decorator-centered';

addDecorator(centered)

import '../components/lazyCard.scss'
import './custom.scss'

setOptions({
  name: 'REACT-LAZY-SLIDE',
  url: 'https://github.com/housinghq/react-lazy-slide',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: false,
});

function loadStories () {
  require('../stories/LazyCard.story.js');
}

configure(loadStories, module);
