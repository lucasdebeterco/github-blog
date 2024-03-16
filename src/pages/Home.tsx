import { PostsList } from '../components/PostsList.tsx'
import { Profile } from '../components/Profile.tsx'

export function Home() {
    return (
        <div>
            <Profile/>
            <PostsList/>
        </div>
    )
}