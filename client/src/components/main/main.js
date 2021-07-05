/** @format */

import { useDispatch, useSelector } from 'react-redux';
import { getCategoryFromServer } from '../../redux/actions/questAction';
import { useEffect } from 'react';
import Category from './Onemore';
import { Table } from 'react-bootstrap';
import User from '../User/User';

export default function Main() {
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);
  const getQuestions = async () => {
    const result = await fetch('http://localhost:8080/api/v1/game');
    const response = await result.json();
    console.log(response);
    dispatch(getCategoryFromServer(response));
  };
  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <User name={name} />
      <Table style={{ width: 'fit-content' }} striped bordered variant='dark'>
        <tbody>
          {categories?.length
            ? categories.map((categorie) => {
                return <Category key={categorie.id} category={categorie} />;
              })
            : 'ничего'}
        </tbody>
      </Table>
    </>
  );
}
