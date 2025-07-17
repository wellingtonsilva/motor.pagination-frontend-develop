import './StatesList.css';
import { Card } from '../Card/Card';
import { Pagination } from '../Pagination/Pagination';
import { Loading } from '../Loading/Loading';
import { useStates } from '../../context/StatesContext';

export const StatesList = () => {
  const { data, currentPage, totalPages, loading, setCurrentPage } = useStates();

  if (loading && data.length === 0) {
    return <div className="loading">Carregando estados...</div>;
  }

  return (
    <div className="states-list">
      {loading && <Loading />}

      <div className="cards-grid">
        {data.map(state => (
          <Card key={state.id} state={state} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

