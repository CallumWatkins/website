// Import *all* images from /assets/images for dynamic use at runtime
const images = import.meta.glob(
  "@/assets/images/**/*.(png|jpg|jpeg|svg|avif|webp)",
  { eager: true },
);

export default function () {
  const getImageSrc = (fileName: string): string => {
    for (const path in images) {
      if (Object.hasOwn(images, path) && path.endsWith(fileName)) {
        return (images[path] as unknown as { default: string }).default;
      }
    }
    throw new Error(`Image source not found: ${fileName}`);
  };

  return { getImageSrc };
}
