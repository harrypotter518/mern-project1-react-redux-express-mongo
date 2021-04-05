import TOGGLE_TREE from './treeTbConstants';

const openAction = (keyID, child, branch) => ({
  branch,
  type: `${branch}/${TOGGLE_TREE}`,
  keyID,
  child
});

export default openAction;
