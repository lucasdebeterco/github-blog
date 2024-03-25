import { ArrowLeft, ArrowSquareOut, Buildings, Chats, GithubLogo } from '@phosphor-icons/react'
import axios from 'axios'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useCallback, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'

import { IIssue } from '../types/IIssue.ts'

export function Issue() {
    const [issue, setIssue] = useState<IIssue>(null)
    const { issueNumber } = useParams()

    const getIssue = useCallback(async () => {
        const response = await axios.get(`https://api.github.com/repos/lucasdebeterco/github-blog/issues/${issueNumber}`)
        setIssue(response.data)
    }, [])

    useEffect(() => {
        getIssue()
    }, [getIssue])

    return (
        <div>
            <div className="relative mt-[-6rem] rounded-[10px] border border-base-border bg-base-profile p-[2rem]">
                <div className="flex justify-between">
                    <Link to={'/'} className="flex gap-[0.5rem] text-[0.75rem] text-blue">
                        <ArrowLeft size={14} />
                        VOLTAR
                    </Link>

                    <Link to={issue?.html_url ?? ''} target="_blank" className="flex gap-[0.5rem] text-[0.75rem] text-blue">
                        VER NO GITHUB
                        <ArrowSquareOut size={14}/>
                    </Link>
                </div>

                <h1 className="mt-[1.125rem] text-[1.25rem] text-base-title">
                    {issue ? issue.title : <Skeleton />}
                </h1>

                {issue ? (
                    <div className="mt-[0.75rem] flex gap-[1.5rem]">
                        <div className="flex items-center gap-[0.5rem]">
                            <GithubLogo size={18} className="text-base-label"/>
                            <span className="text-base-span">{issue.user.login}</span>
                        </div>
                        {issue.created_at && (
                            <div className="flex items-center gap-[0.5rem]">
                                <Buildings size={18} className="text-base-label"/>
                                <span className="text-base-span">
                                    {formatDistance(new Date(issue.created_at), new Date(), {
                                        addSuffix: true, locale: ptBR
                                    })}
                                </span>
                            </div>
                        )}
                        <div className="flex items-center gap-[0.5rem]">
                            <Chats size={18} className="text-base-label"/>
                            <span className="text-base-span">{issue.comments} Comentários</span>
                        </div>
                    </div>
                ) : <Skeleton style={{marginTop: '0.9125rem'}} />}
            </div>

            {issue ? (
                <ReactMarkdown className="mt-[0.5rem] p-[2rem]">
                    {issue.body}
                </ReactMarkdown>
            ) : (
                <Skeleton style={{marginTop: '2.5rem'}} height={100} />
            )}
        </div>
    )
}