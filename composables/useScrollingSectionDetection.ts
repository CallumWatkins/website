import { Ref } from 'vue';

/** Detect which section of a page is currently within the viewport. */
export default function(initialSectionId: string) {
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
    const scrollPos = window.pageYOffset;
    const topOffset = window.innerHeight / 4;

    for (const section of sections.value) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - topOffset;

      if (scrollPos > sectionTop && scrollPos <= sectionTop + sectionHeight) {
        currentScrolledSectionId.value = section.getAttribute("id")!;
      }
    }
  }

  return { setSectionRef, currentScrolledSectionId }
}
