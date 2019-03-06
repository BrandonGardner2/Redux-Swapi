import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { CharacterList } from "../components";
import { getCharacters } from "../actions/index";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      return (
        <Loader
          type="Ball-Triangle"
          color="#00BFFF"
          height="300px"
          width="200px"
          className="loader"
        />
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer }) => ({
  characters: charsReducer.characters,
  fetching: charsReducer.fetching
});

export default connect(
  mapStateToProps,
  {
    getCharacters
  }
)(CharacterListView);
