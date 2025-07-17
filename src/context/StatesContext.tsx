import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../lib/axios';
import type { Estado } from '../types/estado';
import type { StatesContextType } from '../types/states-context';

const StatesContext = createContext<StatesContextType | null>(null);


export function StatesProvider({ children }: { children: React.ReactNode }) {
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

  const value = {
    data,
    currentPage,
    totalItems,
    loading,
    itemsPerPage,
    totalPages,
    setCurrentPage,
  };

  return (
    <StatesContext.Provider value={value}>
      {children}
    </StatesContext.Provider>
  );
}


export function useStates() {
  const context = useContext(StatesContext);
  if (!context) {
    throw new Error('use dentro de StatesProvider');
  }
  return context;
}
