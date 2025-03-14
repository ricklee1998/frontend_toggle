import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ImageInfo } from '../interface/detail';

interface ImageStore {
  imageInfo: ImageInfo | null;
  setImageInfo: (info: ImageInfo) => void;
  clearImageInfo: () => void;
}

export const useImageStore = create<ImageStore>()(
  persist(
    (set) => ({
      imageInfo: null,
      setImageInfo: (info) => set({ imageInfo: info }),
      clearImageInfo: () => set({ imageInfo: null }),
    }),
    {
      name: 'image-storage',
    },
  ),
);
