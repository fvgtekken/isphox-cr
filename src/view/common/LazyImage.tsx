import { useEffect } from 'react';

export interface PropsLazyImage {
  src: string;
  onLoad: () => void;
}

const LazyImage = ({ src, onLoad }: PropsLazyImage) => {
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (onLoad) onLoad();
    };
  }, [src, onLoad]);

  return null; // No renderiza nada directamente
};

export default LazyImage;
