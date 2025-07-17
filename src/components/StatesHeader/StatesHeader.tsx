import { useStates } from '../../context/StatesContext';
import './StatesHeader.css';

export const StatesHeader = () => {
  const { data, totalItems, currentPage, totalPages } = useStates();
  
  return (
    <div className="states-header">
      <h2>Estados do Brasil</h2>
      <p>
        Mostrando {data.length} de {totalItems} estados 
        (Página {currentPage} de {totalPages})
      </p>
    </div>
  );
};