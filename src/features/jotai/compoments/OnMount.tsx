import { atom } from 'jotai';

// https://twitter.com/dai_shi/status/1511711337864634371
// TODO: make some samples
const generalMountAtom = atom(
  null,
  (get, set, callback: (getter: typeof get, setter: typeof set) => void) => {
    callback(get, set);
  },
);
generalMountAtom.onMount = (run) => {
  let cleanup;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  run((get, set) => {
    console.log('do something!');
    cleanup = () => {};
  });
  return cleanup;
};
