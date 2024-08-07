import { useEffect } from 'react';

export interface PropsLazyImage {
  src: string;
  onLoadStart: () => void;
  onLoad: () => void;
}

const LazyImage = ({ src, onLoadStart, onLoad }: PropsLazyImage) => {
  useEffect(() => {
    const img = new Image();
    img.src = src;

    // Llama a onLoadStart al comenzar la carga
    img.onloadstart = () => {
      if (onLoadStart) onLoadStart();
    };

    img.onload = () => {
      if (onLoad) onLoad();
    };
  }, [src, onLoad, onLoadStart]);

  return null;
};

export default LazyImage;
