import Listr from 'listr';
import buildApiReference from './api-reference';
import buildSearchIndex from './search-index';
import api from './tasks/api';
// import buildContributors from './file-contributors';

const tasks = new Listr([
  api
  // buildApiReference,
  // buildContributors,
  // buildReleaseNotes,
  // buildSearchIndex,
],
  // { renderer: 'verbose' }
);

export default tasks;

if (!module.parent) {
  tasks.run().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
