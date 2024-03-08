import { Buildings, GithubLogo, Users } from '@phosphor-icons/react'

import profileImage from './../assets/profileImage.png'

export function Profile() {
    return (
        <div className="flex items-center justify-between gap-[2rem] rounded-[10px] bg-base-profile px-[2.5rem] py-[2rem]">
            <img src={profileImage} alt="Imagem do Perfil Github" />
            <div className="flex flex-col">
                <h2>Cameron Williamsom</h2>
                <span>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam
                    dignissim aenean malesuada suscipit.Nunc, volutpat pulvinar vel mass.
                </span>
                <div className="flex gap-[1.5rem]">
                    <div className="flex">
                        <GithubLogo size={18} className="text-base-label"/>
                        <span className="text-base-subtitle">cameronwll</span>
                    </div>
                    <div className="flex">
                        <Buildings size={18} className="text-base-label"/>
                        <span className="text-base-subtitle">Rocketseat</span>
                    </div>
                    <div className="flex">
                        <Users size={18} className="text-base-label"/>
                        <span className="text-base-subtitle">32 seguidores</span>
                    </div>
                </div>
            </div>
        </div>
    )
}