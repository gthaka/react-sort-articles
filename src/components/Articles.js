import React from 'react';

function Articles({ articles = [], sorting = true }) {
  console.log(sorting ? "Upvote" : "Recent");

    console.log(
        articles.sort((a, b) =>
            a[sorting ? "upvotes" : "date"] > b[sorting ? "upvotes" : "date"]
                ? -1
                : 1
        )
    );

    let updatedArticles = articles.map((art, i) => (
        <tr key={i}>
            <th>{art.title}</th>
            <th>{art.upvotes}</th>
            <th>{art.date}</th>
        </tr>
    ));

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
          {updatedArticles}
        </tbody>
      </table>
    </div>
  );

}

export default Articles;
