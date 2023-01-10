import { computed } from "#build/imports";

interface ImagesComposable {
  getImageSrc: (fileName: string) => string;
}

export default function(): ImagesComposable {
  const images = computed(() => import.meta.glob("@/assets/images/**/*.(png|jpg|jpeg|svg|avif|webp)", { eager: true }));

  const getImageSrc = (fileName: string): string => {
    for (const path in images.value) {
      if (Object.hasOwn(images.value, path)) {
        if (path.endsWith(fileName)) {
          return (images.value[path] as unknown as { default: string }).default;
        }
      }
    }
    throw new Error(`Image source not found: ${fileName}`);
  };
  return { getImageSrc };
}
