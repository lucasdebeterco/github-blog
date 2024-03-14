import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface IIssue {
    title: string
    created_at: string
    body: string
}

export function PostsList() {
    const [issues, setIssues] = useState<IIssue[]>([])
    const [search, setSearch] = useState('')

    const filteredIssues = search.length > 0 ? issues.filter((filter) => filter.title.includes(search)) : issues

    async function fetchIssues() {
        const response = await fetch('https://api.github.com/search/issues?q=repo:lucasdebeterco/github-blog')
        const data = await response.json()

        response.status === 200 ? setIssues(data.items) : toast.error(data.message)
    }

    useEffect(() => {
        fetchIssues()
    }, [])

    return (
        <>
            <div className="mt-[5rem] flex flex-col gap-[0.75rem]">
                <div className="flex justify-between">
                    <h3 className="text-[1.125rem] text-base-subtitle">Publicações</h3>
                    <span className="text-[0.875rem] text-base-span">6 publicações</span>
                </div>
                <input
                    className="w-full rounded-[6px] border-[1px] border-base-border bg-base-input p-[1rem] placeholder:text-base-label"
                    placeholder="Buscar contaúdo"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="my-[3rem] grid grid-cols-[repeat(auto-fit,minmax(416px,1fr))] gap-[2rem]">
                {filteredIssues.map((issue) => (
                    <div className="flex flex-col gap-[1.25rem] rounded-[10px] bg-base-post p-[2rem]" key={issue.title}>
                        <header className="flex justify-between">
                            <h3 className="text-[1.25rem] text-base-title">{issue.title}</h3>
                            <span className="whitespace-nowrap text-[0.875rem] text-base-span">{issue.created_at} Há 1 dia</span>
                        </header>
                        <p className="line-clamp-5">
                            {issue.body}
                        </p>
                    </div>
                ))}
            </div>
        </>)
}