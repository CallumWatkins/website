import type { RouterOptions } from "@nuxt/schema";

export default <RouterOptions>{
  scrollBehavior: async (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;

    const findHashElement = async (
      hash: string,
      attempt: number = 0,
    ): Promise<HTMLElement | null> => {
      return (
        (document.querySelector(hash) as HTMLElement | null) ||
        new Promise<HTMLElement | null>((resolve) => {
          if (attempt > 10) {
            return resolve(null);
          }
          setTimeout(() => resolve(findHashElement(hash, ++attempt || 1)), 100);
        })
      );
    };

    if (to.hash) {
      const el = await findHashElement(to.hash);
      if (el === null) {
        console.error(`Element not found: ${to.hash}`);
        return { x: 0, y: 0 };
      }

      if ("scrollBehavior" in document.documentElement.style) {
        return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      } else {
        return window.scrollTo(0, el.offsetTop);
      }
    }

    return { x: 0, y: 0 };
  },
};
