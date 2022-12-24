import { filename } from "pathe/utils";
import { computed } from "#build/imports";

interface ImagesComposable {
  getImageSrc: (fileName: string) => string | undefined;
}

export default function(): ImagesComposable {
  const images = computed(() => import.meta.glob("@/assets/images/*.(png|jpg|jpeg|svg)", { eager: true }));

  const getImageSrc = (fileName: string): string | undefined => {
    for (const path in images.value) {
      if (Object.hasOwn(images.value, path)) {
        const image: unknown = images.value[path];
        const imagePath = (image as { default: string }).default;
        if (filename(imagePath) === filename(fileName)) {
          return imagePath;
        }
      }
    }
    return undefined;
  };
  return { getImageSrc };
}
