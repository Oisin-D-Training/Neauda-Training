import Songs from "./Songs";

const SongList = () => {
  return (
    <div className="list">
      <ul>
        <li>
          <div className="details">
            <img
              src="https://veromerol.com.mx/wp-content/uploads/2017/03/Imagine-Dragons-Believer-Lil-Wayne-2019.jpg"
              alt="Believer"
            />
            <div className="title">
              <h3>Believer</h3>
              <h4>Imagine Dragons</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SongList;
