import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export const useDidUpdate = (func: EffectCallback, dependencies: DependencyList) => {
  const isDidMount = useRef(false);

  useEffect(() => {
    if (!isDidMount.current) {
      isDidMount.current = true;
    } else {
      func();
    }
  }, dependencies);
};

export const useDidMount = (fn: EffectCallback) => useEffect(() => fn && fn(), []);
