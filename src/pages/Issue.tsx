import { Buildings, Chats, GithubLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Issue() {
    return (
        <div>
            <div className="rounded-[10px] bg-base-profile">
                <div className="flex justify-between">
                    <Link to={'/'}>
                        VOLTAR
                    </Link>

                    <Link to={'/'}>
                        VER NO GITHUB
                    </Link>
                </div>

                <h1>
                    JavaScript data types and data structures
                </h1>

                <div className="mt-[0.75rem] flex gap-[1.5rem]">
                    <div className="flex items-center gap-[0.5rem]">
                        <GithubLogo size={18} className="text-base-label"/>
                        <span className="text-base-subtitle">cameronwll</span>
                    </div>
                    <div className="flex items-center gap-[0.5rem]">
                        <Buildings size={18} className="text-base-label"/>
                        <span className="text-base-subtitle">Há 1 dia</span>
                    </div>
                    <div className="flex items-center gap-[0.5rem]">
                        <Chats size={18} className="text-base-label"/>
                        <span className="text-base-subtitle">Comentários</span>
                    </div>
                </div>
            </div>
        </div>
    )
}