import React from 'react';

function Articles({ articles }) {

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles?.map(({ title, upvotes, date }) => (
            <tr data-testid="article" key={title}>
              <td data-testid="article-title">{title}</td>
              <td data-testid="article-upvotes">{upvotes}</td>
              <td data-testid="article-date">{date}</td>
            </tr>
          )
          )
          }
        </tbody>
      </table>
    </div>
  );

}

export default Articles;
