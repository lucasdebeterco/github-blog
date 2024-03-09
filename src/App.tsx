import cover from './assets/cover.png'
import { Profile } from './components/Profile.tsx'

export function App() {
    return (
        <div>
            <header>
                <img src={cover} alt="" draggable={false}/>
            </header>

            <div className="mx-auto max-w-[min(864px,100vw-20px)]">
                <Profile/>

                <div>
                    <div>
                        <h3>Publicações</h3>
                        <span>6 publicações</span>
                    </div>
                    <input placeholder="Buscar contaúdo"/>
                </div>

                <div className="grid grid-cols-2 gap-[2rem]">
                    <div>
                        <header>
                            <h3>Javascript data types and data structures</h3>
                            <span>Há 1 dia</span>
                        </header>
                        <p>
                            Programming languages all have built-in data structures, but these often differ from one
                            language to another.
                            This article attempts to list the built-in data structures available in JavaScript and what
                            properties they have.
                            These can be used to build other data structures. Wherever possible, comparisons with other
                            languages are drawn.
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}