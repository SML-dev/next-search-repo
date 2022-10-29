export interface ResultRes {
  id: string
  name: string
  description: string
  owner: {
    avatar_url: string
    login: string
    html_url: string
  }
  stargazers_count: number
}
