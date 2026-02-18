import type { TopLevelContent } from "mdast";
import About from "~~/content/about.json";
import Work from "~~/content/work.json";
import Education from "~~/content/education.json";
import Projects from "~~/content/projects.json";
import Online from "~~/content/online.json";
import Social from "~~/content/social.json";

export default defineEventHandler((event) => {
  const children: TopLevelContent[] = [];

  children.push(md.h1("Callum Watkins"));
  children.push(md.h2("Introduction"));
  children.push(
    md.p(
      "I’m Callum Watkins, a BSc-qualified and experienced software engineer based in London.",
    ),
  );
  children.push(
    md.ul(
      Social.map((s) =>
        md.li([
          md.p([md.link(s.url, s.name), md.text(": "), md.text(s.title)]),
        ]),
      ),
    ),
  );

  children.push(md.h2("About"));
  children.push(...About.text.split("\n").map((p) => md.p(p)));

  children.push(md.h2("Résumé"));
  children.push(md.h3("Work Experience"));
  const visibleWork = Work.filter((item) => !item.hide);
  visibleWork.forEach((item, index) => {
    children.push(
      md.p([
        md.strong(item.role),
        md.br(),
        md.text(item.period),
        md.br(),
        md.text(item.company),
      ]),
    );
    children.push(...item.description.split("\n").map((p) => md.p(p)));
    if (item.badges?.length) {
      children.push(md.p(`Tech: ${item.badges.join(", ")}`));
    }
    if (index < visibleWork.length - 1) {
      children.push(md.hr());
    }
  });

  children.push(md.h2("Education"));
  Education.forEach((item, index) => {
    children.push(
      md.p([
        md.strong(item.level),
        md.br(),
        md.text(item.period),
        md.br(),
        md.text(item.institution),
        md.br(),
        md.text(item.grades.summary),
      ]),
    );
    children.push(
      md.ul(
        item.grades.grades.map((grade) =>
          md.li(`${grade.grade} ${grade.subject}`),
        ),
      ),
    );
    if (item.description !== null) {
      children.push(...item.description.split("\n").map((p) => md.p(p)));
    }
    if (item.badges.length > 0) {
      children.push(md.p(`Tech: ${item.badges.join(", ")}`));
    }
    if (index < Education.length - 1) {
      children.push(md.hr());
    }
  });

  children.push(md.h2("Online Profiles"));
  Object.values(Online).forEach((profile) => {
    children.push(md.h3(profile.title));
    children.push(...profile.description.split("\n").map((p) => md.p(p)));
    children.push(md.p(profile.url));
  });

  children.push(md.h2("Projects"));
  Projects.forEach((item, index) => {
    children.push(
      md.p([md.strong(item.title), md.br(), md.text(item.description)]),
    );

    const imageFile = item.images[0];
    if (imageFile) {
      children.push(
        md.p([md.image(`/images/projects/${imageFile}`, item.title)]),
      );
    }

    if (item.badges.length > 0) {
      children.push(md.p(`Tech: ${item.badges.join(", ")}`));
    }

    if (item.link?.url) {
      children.push(
        md.p([
          md.link(
            item.link.url,
            item.link.site ? `View on ${item.link.site}` : "View",
          ),
        ]),
      );
    }

    if (index < Projects.length - 1) {
      children.push(md.hr());
    }
  });

  children.push(md.h2("Contact"));
  children.push(
    md.p([
      md.text(
        "You can get in touch by emailing me directly. To encrypt your message first, use ",
      ),
      md.link("https://keybase.io/encrypt#callumwatkins", "Keybase"),
      md.text(" or "),
      md.link("https://keybase.io/callumwatkins/pgp_keys.asc", "PGP"),
      md.text("."),
    ]),
  );
  children.push(
    md.ul([
      md.li("contact@callumwatkins.com"),
      md.li("callumwatkins@protonmail.com"),
    ]),
  );

  setHeader(event, "content-type", "text/markdown; charset=UTF-8");
  return toMarkdown(md.root(children));
});
