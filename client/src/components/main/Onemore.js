/** @format */

import { Link } from 'react-router-dom';
export default function Category({ category }) {
  const questions = category.questions;
  return (
    <>
      <div className='theme-container' style={{ display: 'flex' }}>
        <th scope='row' style={{ minWidth: '300px' }}>
          {' '}
          {category.name}{' '}
        </th>
        <tr>
          <td style={{ width: '40%' }}>
            {questions.length
              ? questions.map((question) => {
                  if (question.answered === false) {
                    return (
                      <>
                        <Link
                          style={{ border: 'none' }}
                          key={question._id}
                          to={`/game/${question._id}`}
                        >
                          <td style={{ padding: '30px' }}>{question.points}</td>
                        </Link>
                      </>
                    );
                  }
                })
              : 'No questions'}
          </td>
        </tr>
      </div>
    </>
  );
}
