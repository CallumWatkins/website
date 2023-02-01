import { Ref } from "vue";

/** Detect which section of a page is currently within the viewport. */
export default function (initialSectionId: string) {
  const sections: Ref<HTMLElement[]> = ref([]);

  const currentScrolledSectionId = ref(initialSectionId);

  function setSectionRef(element: any) {
    if (element && !sections.value.includes(element.$el)) {
      sections.value.push(element.$el);
    }
  }

  onMounted(() => window.addEventListener("scroll", onScroll));

  onUnmounted(() => window.removeEventListener("scroll", onScroll));

  function onScroll() {
    const scrollPos = window.scrollY;
    const finalScrollPos =
      document.body.scrollHeight -
      document.querySelector("footer")!.clientHeight -
      window.innerHeight;

    // The last section should always activate if we are scrolled to the bottom
    // of the page (minus the height of the footer).
    if (scrollPos >= finalScrollPos) {
      currentScrolledSectionId.value = sections.value
        .at(-1)!
        .getAttribute("id")!;
      return;
    }

    const topOffset = window.innerHeight / 4;

    for (const section of sections.value) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - topOffset;

      if (scrollPos > sectionTop && scrollPos <= sectionTop + sectionHeight) {
        currentScrolledSectionId.value = section.getAttribute("id")!;
        return;
      }
    }
  }

  return { setSectionRef, currentScrolledSectionId };
}
