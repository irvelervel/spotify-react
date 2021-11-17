import "./ArtistPage.css";
import { fetchArtist } from "../../apicalls";
import { useEffect, useState } from "react";
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum";
import Button from "../../components/Button/Button"
import SingleSong from "../../components/SingleSong/SingleSong"
import { useParams } from "react-router-dom"
const ArtistPage = () => {
  const [artist, setArtist] = useState({});
  const params = useParams()
  useEffect(() => {
    fetchArtist(params.id).then((res) => setArtist(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="artist-page__wrap">
      <img className="artist__header" src={artist.picture_xl} alt="artist-pic" />
      <div className="header__wrap--art">
        <div className='listeners'>{artist?.nb_fan} MONTHLY LISTENERS</div>
        <h1>{artist?.name}</h1>
        <div>
          <Button text="Play" />
          <button className='follow__btn'>Sign up</button>
        </div>
      </div>
      <h2>Albums</h2>
      <div className='artist__line'>
        {artist?.albums?.map((album) => (
          <SingleAlbum src={album.cover_medium} key={album.id} />
        ))}
      </div>
      <h2>Top tracks</h2>
      <div className='artist__tracks'>
        {artist?.tracklist?.map((song) => (
          <SingleSong title={song.title} artist={song.artist.name} duration={song.duration / 60} key={song.id} />
        ))}
      </div>
    </div>
  );
};
export default ArtistPage;
