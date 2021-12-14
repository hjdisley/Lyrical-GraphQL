import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";

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
      <Link className="btn-floating btn-large red right" to="/songs/new">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default graphql(query)(SongList);
