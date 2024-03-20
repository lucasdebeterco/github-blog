import { ArrowLeft, ArrowSquareOut, Buildings, Chats, GithubLogo } from '@phosphor-icons/react'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import { Link, useMatch } from 'react-router-dom'

import { IssuesContext } from '../context/IssuesContext.tsx'

export function Issue() {
    const match = useMatch(
        '/issue/:issueId'
    )
    const { issues } = useContext(IssuesContext)
    const issue = issues.find(issue => issue.id === Number(match?.params.issueId))

    return (
        <div>
            <div className="relative mt-[-5rem] rounded-[10px] bg-base-profile p-[2rem]">
                <div className="flex justify-between">
                    <Link to={'/'} className="flex gap-[0.5rem] text-[0.75rem] text-blue">
                        <ArrowLeft size={14} />
                        VOLTAR
                    </Link>

                    <Link to={issue?.user.html_url ?? ''} className="flex gap-[0.5rem] text-[0.75rem] text-blue">
                        VER NO GITHUB
                        <ArrowSquareOut size={14}/>
                    </Link>
                </div>

                <h1 className="mt-[1.125rem] text-[1.25rem] text-base-title">
                    {issue?.title}
                </h1>

                <div className="mt-[0.75rem] flex gap-[1.5rem]">
                    <div className="flex items-center gap-[0.5rem]">
                        <GithubLogo size={18} className="text-base-label"/>
                        <span className="text-base-span">{issue?.user.login}</span>
                    </div>
                    {issue?.created_at && (
                        <div className="flex items-center gap-[0.5rem]">
                            <Buildings size={18} className="text-base-label"/>
                            <span className="text-base-span">
                                {formatDistance(new Date(issue?.created_at), new Date(), {
                                    addSuffix: true, locale: ptBR
                                })}
                            </span>
                        </div>
                    )}
                    <div className="flex items-center gap-[0.5rem]">
                        <Chats size={18} className="text-base-label"/>
                        <span className="text-base-span">{issue?.comments} Comentários</span>
                    </div>
                </div>
            </div>

            <div className="mt-[0.5rem] p-[2rem]">
                {issue?.body}
            </div>
        </div>)
}