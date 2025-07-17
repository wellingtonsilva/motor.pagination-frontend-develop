import { useState, useEffect } from 'react';
import './StatesList.css';
import { Card } from '../Card/Card';
import { Pagination } from '../Pagination/Pagination';
import type { Estado } from '../../types/estado';
import { api } from '../../lib/axios';
import { Loading } from '../Loading/Loading';

export const StatesList = () => {
  const [data, setData] = useState<Estado[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // calcular o indice no inicio
      const start = (page - 1) * itemsPerPage;
      
      const response = await api.get(`/states?_start=${start}&_limit=${itemsPerPage}`);
    
      setData(response.data);
      setTotalItems(parseInt(response.headers['x-total-count'] || '0'));
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading && data.length === 0) {
    return <div className="loading">Carregando estados...</div>;
  }

  return (
    <div className="states-list">
      <div className="states-header">
        <h2>Estados do Brasil</h2>
        <p>
          Mostrando {data.length} de {totalItems} estados 
          (Página {currentPage} de {totalPages})
        </p>
      </div>

      {loading && (
        <>
          <Loading />
          
        </>
      )}

      <div className="cards-grid">
        {data.map(state => (
          <Card key={state.id} state={state} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      
    </div>
  );
};



