import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/MultiLevelSelector/index');
  require('../stories/MultiLevelSelector/index');
}

configure(loadStories, module);
