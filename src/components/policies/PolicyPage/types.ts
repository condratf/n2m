type PolicyListItem = {
  title: string,
  text?: string,
  ul?: string[],
  ol?: string[]
}

export type PolicyPageProps = {
  title: string,
  policiesList: PolicyListItem[]
}
