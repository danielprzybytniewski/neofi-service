import { useEffect } from "react";

export const useSectionObserver = (sectionIds: string[]) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const currentSection = entries.find((e) => e.isIntersecting)?.target.id;
        if (currentSection)
          history.replaceState(null, "", `#${currentSection}`);
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((el) => observer.observe(el!));

    return () => observer.disconnect();
  }, [sectionIds]);
};
