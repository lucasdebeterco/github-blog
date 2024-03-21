import { createContext, ReactNode, useEffect, useState } from 'react'

import { mockIssues } from '../data/mockIssues.ts'

export interface IIssue {
    id: number
    number: number
    title: string
    created_at: string
    body: string
    comments: number
    user: {
        html_url: string
        login: string
    }
}

interface IssuesContextType {
    issues: IIssue[]
}

interface IssuesContextProps {
    children: ReactNode
}

export const IssuesContext = createContext<IssuesContextType>({} as IssuesContextType)

export function IssuesContextProvider({children}: IssuesContextProps) {
    const [issues, setIssues] = useState<IIssue[]>([])

    async function fetchIssues() {
        const response = await fetch('https://api.github.com/search/issues?q=repo:lucasdebeterco/github-blog')
        const data = await response.json()

        response.status === 200 ? setIssues(data.items) :  setIssues(mockIssues)
    }

    useEffect(() => {
        fetchIssues()
    }, [])

    return (
        <IssuesContext.Provider value={{issues}}>
            {children}
        </IssuesContext.Provider>
    )
}