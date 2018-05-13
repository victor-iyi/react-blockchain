import { BLOCK } from '../constants/actions';

export const createBlock = (data) => {
  return { type: BLOCK.CREATE, payload: data };
};

export const updateBlock = (block, data) => {
  const payload = { block, data };

  return { type: BLOCK.UPDATE, payload };
}
