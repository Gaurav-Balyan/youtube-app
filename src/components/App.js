import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";

class App extends React.Component {
  state = {
    items: [],
    selectedItem: null
  };

  componentDidMount(){
      this.onTermSubmit('songs');
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ 
        items: response.data.items ,
        selectedItem: response.data.items[0]
    });
  };

  onItemSelect = item => {
    this.setState({ selectedItem: item });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail item={this.state.selectedItem} />
            </div>
            <div className="five wide column">
              <VideoList
                items={this.state.items}
                onItemSelect={this.onItemSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
