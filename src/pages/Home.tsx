import { PostsList } from '../components/PostsList.tsx'
import { Profile } from '../components/Profile.tsx'

export function Home() {
    return (
        <div>
            <div className="mx-auto max-w-[min(864px,100vw-60px)]">
                <Profile/>
                <PostsList/>
            </div>
        </div>
    )
}