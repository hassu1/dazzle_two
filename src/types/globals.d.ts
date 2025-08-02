// types/globals.d.ts
export {};

declare global {
  interface Window {
    $: typeof import('jquery');
    jQuery: typeof import('jquery');
  }
}