import 'react-loading-skeleton/dist/skeleton.css'

import { ArrowSquareOut, Buildings, GithubLogo, Users } from '@phosphor-icons/react'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

interface IUser {
    avatar_url: string
    name: string
    html_url: string
    bio: string
    login: string
    company: string
    followers: number
}

export function Profile() {
    const [user, setUser] = useState<IUser | null>(null)

    const getUser = useCallback(async () => {
        const response = await axios.get('https://api.github.com/users/lucasdebeterco')
        setUser(response.data)
    }, [])

    useEffect(() => {
        getUser()
    }, [getUser])

    return (
        <div className="relative mt-[-6rem] flex items-center gap-[2rem] rounded-[10px] border border-base-border bg-base-profile px-[2.5rem] py-[2rem]">
            {user ? (
                <img
                    src={user.avatar_url}
                    alt="Imagem do Perfil Github"
                    width={148}
                    draggable={false}
                    className="rounded-[10px]"
                />
            ) : (
                <Skeleton width={148} height={148} />
            )}
            <div className="flex w-full flex-col gap-[0.5rem]">
                {user ? (
                    <div className="flex items-center justify-between gap-[0.5rem]">
                        <h2 className="text-[1.5rem] text-base-title">{user.name}</h2>
                        <a
                            href={user.html_url}
                            target="_blank"
                            className="flex gap-[0.5rem] text-[0.75rem] text-blue"
                            rel="noreferrer"
                        >
                            GITHUB
                            <ArrowSquareOut size={14}/>
                        </a>
                    </div>
                ) :
                    <Skeleton width={'100%'} />
                }

                <span className="leading-[1.5rem]">
                    {user ? user.bio:  <Skeleton width={'100%'} />}
                </span>
                {user ? (
                    <div className="mt-[0.75rem] flex gap-[1.5rem]">
                        <div className="flex items-center gap-[0.5rem]">
                            <GithubLogo size={18} className="text-base-label"/>
                            <span className="text-base-subtitle">{user.login}</span>
                        </div>
                        <div className="flex items-center gap-[0.5rem]">
                            <Buildings size={18} className="text-base-label"/>
                            <span className="text-base-subtitle">{user.company}</span>
                        </div>
                        <div className="flex items-center gap-[0.5rem]">
                            <Users size={18} className="text-base-label"/>
                            <span className="text-base-subtitle">{user.followers} seguidores</span>
                        </div>
                    </div>
                ) : (
                    <Skeleton width={'100%'} />
                )}
            </div>
        </div>
    )
}