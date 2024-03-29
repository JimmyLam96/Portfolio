export type TypeProjectMarkdown = {
  allMarkdownRemark: {
    nodes: TypeNode[];
  };
};

export type TypeNode = {
  frontmatter: {
    technologies: string[];
    title: string;
    shortText: string;
    longText: string;
    subTitle: string;
    slug: string;
  };
  id: string;
};
