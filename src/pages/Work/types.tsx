export type TypeProjectMarkdown = {
  allMarkdownRemark: {
    nodes: TypeNode[];
  };
};

export type TypeNode = {
  frontmatter: {
    slug: string;
    technologies: string[];
    title: string;
  };
  id: string;
};
