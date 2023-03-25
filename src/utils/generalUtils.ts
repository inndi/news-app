// TODO: is it necessary in my project?

export const debounce = (callback: Function, time: number = 300) => {
  let debounceTimer: NodeJS.Timeout;

  return function (...args: any[]) {
    const callbackCall = () => {
      callback(...args);
    };
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(callbackCall, time);
  };
};

export const throttle = (fn: Function, time: number) => {
  let isThrottled: boolean = false;
  let isFirstCall: boolean = true;

  return function (this: Function) {
    const args = arguments;

    if (isFirstCall) {
      isFirstCall = false;
      return fn.apply(this, args);
    }

    if (isThrottled) return;

    isThrottled = true;

    setTimeout(() => {
      fn.apply(this, args);
      isThrottled = false;
    }, time);
  };
};
