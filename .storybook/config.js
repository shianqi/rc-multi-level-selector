import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/MultiLevelSelector');
}

configure(loadStories, module);
