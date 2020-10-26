import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { requestComicsAction } from "./actions/requestComicsAction";
import { FindComic } from "./components/FindComic";

const App = ({
  count,
  comics,
  error,
  isLoading,
  incrementCountAction,
  requestComicsAction,
}) => {
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   // change to work with specific comic (100)
  //   requestComicsAction(100);
  //   console.log(comics);
  // }, [requestComicsAction]);

  const handleSearch = (e) => {
    // handling search
    console.log("searching");
    requestComicsAction(search);

    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <h2>SEARCH FOR A COMIC</h2>
        <input
          type="number"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button>search</button>
      </form>
      <br />
      <FindComic error={error} isLoading={isLoading} comics={comics} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.comics.isLoading,
  comics: state.comics.entries,
  error: state.comics.error,
});

const mapDispatchToProps = {
  requestComicsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
