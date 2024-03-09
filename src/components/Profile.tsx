import { ArrowSquareOut, Buildings, GithubLogo, Users } from '@phosphor-icons/react'

import profileImage from './../assets/profileImage.png'

export function Profile() {
    return (
        <div className="relative mt-[-5rem] flex items-center justify-between gap-[2rem] rounded-[10px] bg-base-profile px-[2.5rem] py-[2rem]">
            <img src={profileImage} alt="Imagem do Perfil Github" width={148} draggable={false} />
            <div className="flex flex-col gap-[0.5rem]">
                <div className="flex items-center justify-between gap-[0.5rem]">
                    <h2 className="text-[1.5rem] text-base-title">Cameron Williamsom</h2>
                    <a href="aaa" className="flex gap-[0.5rem] text-blue">
                        GITHUB
                        <ArrowSquareOut size={18} />
                    </a>
                </div>
                <span className="leading-[1.5rem]">
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam
                    dignissim aenean malesuada suscipit.Nunc, volutpat pulvinar vel mass.
                </span>
                <div className="mt-[0.75rem] flex gap-[1.5rem]">
                    <div className="flex items-center gap-[0.5rem]">
                        <GithubLogo size={18} className="text-base-label"/>
                        <span className="text-base-subtitle">cameronwll</span>
                    </div>
                    <div className="flex items-center gap-[0.5rem]">
                        <Buildings size={18} className="text-base-label"/>
                        <span className="text-base-subtitle">Rocketseat</span>
                    </div>
                    <div className="flex items-center gap-[0.5rem]">
                        <Users size={18} className="text-base-label"/>
                        <span className="text-base-subtitle">32 seguidores</span>
                    </div>
                </div>
            </div>
        </div>)
}