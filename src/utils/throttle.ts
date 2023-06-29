export function throttle(callback: () => void, delay: number) {
  let timer: number | null = null;

  return function () {
    if (!timer) {
      timer = window.setTimeout(() => {
        callback();
        timer = null;
      }, delay);
    }
  };
}
