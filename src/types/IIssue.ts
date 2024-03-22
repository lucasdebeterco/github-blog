export interface IIssue {
    id: number
    number: number
    title: string
    created_at: string
    body: string
    comments: number
    html_url: string
    user: {
        html_url: string
        login: string
    }
}