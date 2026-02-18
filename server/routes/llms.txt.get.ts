import Social from "~~/content/social.json";

export default defineEventHandler((event) => {
  const tree = md.root([
    md.h1("Callum Watkins"),
    md.blockquote(
      "Personal website and portfolio for Callum Watkins, a BSc-qualified and experienced software engineer based in London.",
    ),
    md.p(
      "This site is a single-page portfolio containing work experience, education, projects, online profiles, and contact information.",
    ),
    md.p([
      md.text("For full content in text form, see "),
      md.link("https://www.callumwatkins.com/llms-full.txt", "llms-full.txt"),
      md.text("."),
    ]),
    md.h2("Canonical"),
    md.ul([
      md.li([
        md.p([
          md.link("https://www.callumwatkins.com", "Callum Watkins"),
          md.text(": Personal website and portfolio"),
        ]),
      ]),
    ]),
    md.h2("External profiles"),
    md.ul(
      Social.map((s) =>
        md.li([
          md.p([md.link(s.url, s.name), md.text(": "), md.text(s.title)]),
        ]),
      ),
    ),
  ]);

  setHeader(event, "content-type", "text/markdown; charset=UTF-8");
  return toMarkdown(tree);
});
