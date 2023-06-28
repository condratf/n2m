import { FC } from "react"

type PolicyListItem = {
  title: string,
  text?: string,
  Text?: FC,
  ul?: string[],
  ol?: string[]
}

export type PolicyPageProps = {
  title: string,
  policiesList: PolicyListItem[]
}
