import { computed } from "#build/imports";

interface ImagesComposable {
  getImageSrc: (fileName: string) => string;
}

export default function(): ImagesComposable {
  const images = computed(() => import.meta.glob("@/assets/images/*.(png|jpg|jpeg|svg)", { eager: true }));

  const getImageSrc = (fileName: string): string => {
    for (const path in images.value) {
      if (Object.hasOwn(images.value, path)) {
        const image: unknown = images.value[path];
        const imagePath = (image as { default: string }).default;
        if (imagePath.endsWith(fileName)) {
          return imagePath;
        }
      }
    }
    throw new Error(`Image source not found: ${fileName}`);
  };
  return { getImageSrc };
}
