import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const [sorted,setSorted] = React.useState([]);
   
    const sortByRecent = () => {
      const theArticles = [...articles];
      theArticles.sort((a,b)=> new Date(b.date) -  new Date(a.date));
      setSorted(theArticles);
    }

    const sortByVoted = () => {
      const theArticles = [...articles];
      theArticles.sort((a,b)=>b.upvoted - a.upvoted);
      setSorted(theArticles);
    }
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={sortByVoted}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={sortByRecent}>Most Recent</button>
            </div>
            <Articles articles={sorted}/>
        </div>
    );

}

export default App;
