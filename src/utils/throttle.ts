export function throttle(callback: (...args: any[]) => void, delay: number) {
  let timer: number | null = null;

  return function (...args: any[]) {
    if (!timer) {
      timer = window.setTimeout(() => {
        callback(...args);
        timer = null;
      }, delay);
    }
  };
}
