import React from 'react';
import Article from './Article';

function Articles(articles) {

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
                  <Article articles={articles} />
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
