import { useState } from "react";
import Song from "./Song";
import "./Songs.css";

const SongList = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const initialSongs = [
    { title: "Last thing on my mind", artist: "Steps", votes: 0 },
    { title: "If you're over me", artist: "Years and years", votes: 0 },
    { title: "Top of the world", artist: "Carpenters", votes: 0 },
    { title: "Sometimes", artist: "Erasure", votes: 0 },
    { title: "Sometimes", artist: "Another Artist", votes: 0 },
  ];

  const [songs, setSongs] = useState(initialSongs);

  //VERSION 1 - LONG HAND OLD STYLE JAVASCRIPT
  // const displaySongs = [];
  // for(const [index, value] of songs.entries()) {
  //     displaySongs.push(<Song key={index} song={value} vote={addVote} />)
  // }
  // console.log(displaySongs)

  //VERSION 2 - MODERN JAVASCRIPT
  //const displaySongs = songs.map ( (value, index) => <Song key={index} song={value} vote={addVote} />)

  const addVote = (index) => {
    //take song in position index and add 1 to votes
    const newSongs = [...songs];
    newSongs[index].votes += 1;
    setSongs(newSongs);
  };

  return (
    <div>
      <h1>Your favourite songs are:</h1>
      <button onClick={toggleVisibility}>
        {visible ? "Hide" : "Show"} songs
      </button>

      {visible &&    <ul className={visible ? "songs-display" : "songs-hidden"}>
        {songs.map((song, index) => (
          <Song song={song} key={index} vote={() => addVote(index)} />
        ))}
      </ul>}
    </div>
  );
};

export default SongList;
