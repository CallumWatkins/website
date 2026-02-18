import { unified } from "unified";
import remarkStringify from "remark-stringify";
import { u } from "unist-builder";
import type {
  BlockContent,
  Blockquote,
  Break,
  Code,
  DefinitionContent,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Paragraph,
  PhrasingContent,
  Root,
  Strong,
  ThematicBreak,
  Text,
  TopLevelContent,
} from "mdast";

export const md = {
  root: (children: TopLevelContent[]): Root => u("root", children) as Root,
  h1: (text: string): Heading =>
    u("heading", { depth: 1 }, [u("text", text)]) as Heading,
  h2: (text: string): Heading =>
    u("heading", { depth: 2 }, [u("text", text)]) as Heading,
  h3: (text: string): Heading =>
    u("heading", { depth: 3 }, [u("text", text)]) as Heading,
  p: (children: PhrasingContent[] | string): Paragraph =>
    typeof children === "string"
      ? (u("paragraph", [u("text", children)]) as Paragraph)
      : (u("paragraph", children) as Paragraph),
  strong: (children: PhrasingContent[] | string): Strong =>
    typeof children === "string"
      ? (u("strong", [u("text", children)]) as Strong)
      : (u("strong", children) as Strong),
  text: (text: string): Text => u("text", text) as Text,
  br: (): Break => u("break") as Break,
  link: (url: string, label: string): Link =>
    u("link", { url }, [u("text", label)]) as Link,
  image: (url: string, alt = ""): Image => u("image", { url, alt }) as Image,
  ul: (items: ListItem[]): List =>
    u("list", { ordered: false, spread: false }, items) as List,
  li: (children: Array<BlockContent | DefinitionContent> | string): ListItem =>
    typeof children === "string"
      ? (u("listItem", { spread: false }, [
          u("paragraph", [u("text", children)]) as Paragraph,
        ]) as ListItem)
      : (u("listItem", { spread: false }, children) as ListItem),
  blockquote: (
    children: Array<BlockContent | DefinitionContent> | string,
  ): Blockquote =>
    typeof children === "string"
      ? (u("blockquote", [
          u("paragraph", [u("text", children)]) as Paragraph,
        ]) as Blockquote)
      : (u("blockquote", children) as Blockquote),
  code: (lang: string, value: string): Code =>
    u("code", { lang }, value) as Code,
  hr: (): ThematicBreak => u("thematicBreak") as ThematicBreak,
};

/**
 * Serialize MDAST to Markdown.
 */
export function toMarkdown(tree: Root): string {
  const file = unified()
    .use(remarkStringify, {
      bullet: "-",
      fences: true,
      listItemIndent: "one",
      rule: "-",
    })
    .stringify(tree);

  // remark serializes line breaks as `\\\n`; normalize to two spaces + newline.
  return String(file).replaceAll("\\\n", "  \n");
}
