import { BLOCK } from '../constants/actions';

const inital_state = null;

const Block = (state = inital_state, action) => {
  switch (action.type) {
    /*
     * +—————————————————————————————————————————————————————————————————————————————————————+
     * | +—————————————————————————————————————————————————————————————————————————————————+ |
     * | | Create block.
     * | +—————————————————————————————————————————————————————————————————————————————————+ |
     * +—————————————————————————————————————————————————————————————————————————————————————+
     */
    case BLOCK.CREATE:
      console.log(action);
      return state;

    /*
     * +—————————————————————————————————————————————————————————————————————————————————————+
     * | +—————————————————————————————————————————————————————————————————————————————————+ |
     * | | Mine block.
     * | +—————————————————————————————————————————————————————————————————————————————————+ |
     * +—————————————————————————————————————————————————————————————————————————————————————+
     */
    case BLOCK.MINE:
      return state;

    /*
     * +—————————————————————————————————————————————————————————————————————————————————————+
     * | +—————————————————————————————————————————————————————————————————————————————————+ |
     * | | Update block data.
     * | +—————————————————————————————————————————————————————————————————————————————————+ |
     * +—————————————————————————————————————————————————————————————————————————————————————+
     */
    case BLOCK.UPDATE:
      return state;

    /*
     * +—————————————————————————————————————————————————————————————————————————————————————+
     * | +—————————————————————————————————————————————————————————————————————————————————+ |
     * | | Verify block integrity.
     * | +—————————————————————————————————————————————————————————————————————————————————+ |
     * +—————————————————————————————————————————————————————————————————————————————————————+
     */
    case BLOCK.VERIFY:
      return state;

    /*
     * +—————————————————————————————————————————————————————————————————————————————————————+
     * | +—————————————————————————————————————————————————————————————————————————————————+ |
     * | | Calculate cryptographic hash.
     * | +—————————————————————————————————————————————————————————————————————————————————+ |
     * +—————————————————————————————————————————————————————————————————————————————————————+
     */
    case BLOCK.CALCULATE_HASH:
      return state;

    default:
      return state;
  }
};

export default Block;