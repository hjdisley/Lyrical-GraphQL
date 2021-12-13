import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = ({ data: { error, loading, songs } }) => {
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <ul className="collection">
        {songs.map((song) => (
          <li className="collection-item" key={song.id}>
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
