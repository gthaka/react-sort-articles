import React from 'react';
import Article from './Article';

function Article(articles) {

  return (
    <React.Fragment>
      {articles &&
        articles.map(({ title, upvotes, date }, index) => (

          <tr data-testid="article" key={index}>
            <td data-testid="article-title">{title}</td>
            <td data-testid="article-upvotes">{upvotes}</td>
            <td data-testid="article-date">{date}</td>
          </tr>
        )
        )
      }
    </React.Fragment>
  );

}

export default Article;
