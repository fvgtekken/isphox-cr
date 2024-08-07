import { useEffect, useState } from 'react';

interface UseLoadImage {
  imageLoaded: boolean;
  loading: boolean;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useLoadImage = (imageUrl: string): UseLoadImage => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setImageLoaded(false);
    setLoading(true);
  }, [imageUrl]);

  return {
    imageLoaded,
    loading,
    setImageLoaded,
    setLoading,
  };
};
