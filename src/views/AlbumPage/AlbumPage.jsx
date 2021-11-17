import { useEffect, useState } from "react";
import "./AlbumPage.css";
import { fetchAlbum } from "../../apicalls";
import SingleSong from "../../components/SingleSong/SingleSong";
import Button from "../../components/Button/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
const AlbumPage = (props) => {
  const [album, setAlbum] = useState({});
  const params = useParams()
  useEffect(() => {
    console.log(params)
    fetchAlbum(params.id).then((res) => setAlbum(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="album__wrap">
      <div className="album__info">
        <img src={album.cover_medium} alt="album-pic" />
        <h2>{album.title}</h2>
        <Link to={"/artist/" + album?.artist?.id}>
          <h3>{album?.artist?.name}</h3>
        </Link>
        <Button text={"Play"} />
        <span>
          {album?.release_date?.slice(0, 4)} ∙ {album?.tracks?.data.length} SONGS
        </span>
        <span>
          <AiOutlineHeart className="artist__icon" />
          <BsThreeDots className="artist__icon" />
        </span>
      </div>
      <div className="album__tracks">
        {album?.tracks?.data.map((track) => (
          <SingleSong
            getSong={() => props.passSong({ ...track, cover: album.cover_medium })}
            title={track.title}
            artist={track.artist.name}
            duration={track.duration / 60}
            key={track.id}
          />
        ))}
      </div>
    </div>
  );
};
export default AlbumPage;
