import cover from './assets/cover.png'
import { Profile } from './components/Profile.tsx'
import { trimString } from './utils/trimString.ts'

export function App() {
    return (
        <div>
            <header>
                <img src={cover} alt="" draggable={false}/>
            </header>

            <div className="mx-auto max-w-[min(864px,100vw-60px)]">
                <Profile/>

                <div className="mt-[5rem] flex flex-col gap-[0.75rem]">
                    <div className="flex justify-between">
                        <h3 className="text-[1.125rem] text-base-subtitle">Publicações</h3>
                        <span className="text-[0.875rem] text-base-span">6 publicações</span>
                    </div>
                    <input
                        className="w-full rounded-[6px] border-[1px] border-base-border bg-base-input p-[1rem] placeholder:text-base-label"
                        placeholder="Buscar contaúdo"
                    />
                </div>

                <div className="my-[3rem] grid grid-cols-[repeat(auto-fit,minmax(416px,1fr))] gap-[2rem]">
                    <div className="flex flex-col gap-[1.25rem] rounded-[10px] bg-base-post p-[2rem]">
                        <header className="flex justify-between">
                            <h3 className="text-[1.25rem] text-base-title">Javascript data types and data
                                structures</h3>
                            <span className="whitespace-nowrap text-[0.875rem] text-base-span">Há 1 dia</span>
                        </header>
                        <p>
                            {trimString('Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available is JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.', 200)}
                        </p>
                    </div>

                    <div className="flex flex-col gap-[1.25rem] rounded-[10px] bg-base-post p-[2rem]">
                        <header className="flex justify-between">
                            <h3 className="text-[1.25rem] text-base-title">Javascript data types and data
                                structures</h3>
                            <span className="whitespace-nowrap text-[0.875rem] text-base-span">Há 1 dia</span>
                        </header>
                        <p>
                            {trimString('Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available is JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.', 200)}
                        </p>
                    </div>

                    <div className="flex flex-col gap-[1.25rem] rounded-[10px] bg-base-post p-[2rem]">
                        <header className="flex justify-between">
                            <h3 className="text-[1.25rem] text-base-title">Javascript data types and data
                                structures</h3>
                            <span className="whitespace-nowrap text-[0.875rem] text-base-span">Há 1 dia</span>
                        </header>
                        <p>
                            {trimString('Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available is JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.', 200)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}