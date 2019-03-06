import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions/index";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <p>Fetching data</p>;
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
