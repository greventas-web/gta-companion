export type LaunchDetail = {
  label: string;
  value: string;
};

export type LaunchEntry = {
  slug: string;
  title: string;
  summary: string;
  details?: LaunchDetail[];
};
