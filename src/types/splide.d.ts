declare module '@splidejs/react-splide' {
    import { ComponentType } from 'react';
  
    interface SplideOptions {
      type?: 'slide' | 'loop' | 'fade';
      rewind?: boolean;
      width?: string | number;
      height?: string | number;
      gap?: string | number;
      perPage?: number;
      perMove?: number;
      autoplay?: boolean;
      interval?: number;
      arrows?: boolean;
      pagination?: boolean;
      drag?: boolean;
      focus?: string | number;
      lazyLoad?: boolean;
      [key: string]: any; // Allow other Splide.js options
    }
  
    export const Splide: ComponentType<{ options: SplideOptions } & any>;
    export const SplideSlide: ComponentType<any>;
  }
  