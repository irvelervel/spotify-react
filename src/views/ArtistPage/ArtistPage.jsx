import "./ArtistPage.css";
import { fetchArtist } from "../../apicalls";
import { useEffect, useState } from "react";
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum"
const ArtistPage = (props)=> {
    const [artist, setArtist] = useState({})
    useEffect(()=> {
        fetchArtist(props.match.params.id)
            .then((res)=> setArtist(res))
    }, [])
    return (<div className='artist-page__wrap'>
        <h2>Albums</h2>
        <div>
            {artist?.albums?.map((album)=> <SingleAlbum src={album.cover_medium} key={album.id}/> )}
        </div>
    </div>)
}
export default ArtistPage;
