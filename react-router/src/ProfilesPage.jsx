import { NavLink, Outlet} from "react-router-dom";


const ProfilesPage = () => {
    const profiles = [1, 2, 3, 4, 5];

    return (
        <div >
            <div>
                {profiles.map((profile) => (
                    <NavLink key={profile} to={`/profiles/${profile}`}
                             className={({isActive}) => {return isActive ? 'white' : 'blue'}}>
                        Profile {profile}</NavLink>
                ))}
            </div>

            <Outlet/>
        </div>
    )
}

export default ProfilesPage;