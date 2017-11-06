import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpenseListItem = ({ description, id, amount, createdAt, note }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h4>{description}</h4>
        </Link>
        <p>
            Amount: {numeral((amount / 100)).format('$0,0.00')}
             -
            Created at: {moment(createdAt).format('MMMM Do, YYYY')}
             -
            Note: {note}
        </p>
    </div>
);

export default ExpenseListItem;