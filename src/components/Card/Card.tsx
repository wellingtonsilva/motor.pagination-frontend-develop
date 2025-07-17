import type { Estado } from '../../types/estado';
import './Card.css';

interface CardProps {
  state: Estado;
}

export const Card = ({ state }: CardProps) => {
  return (
    <div className="card">
      <div className="card-header">
        <div>
            <img 
          src={`/flags/${state.flag_icon}`} 
          alt={`Bandeira ${state.name}`}
          className="flag-icon"
        />
        <h3>{state.name} - <strong>{state.acronym}</strong></h3>
     
        </div>
        <p><strong>ID:</strong> {state.id}</p>
      </div>
      <div className="card-body">
        
        
        <span className={`status ${state.isClient ? 'client' : 'non-client'}`}>
          {state.isClient ? `😄 Temos Clientes no ${state.name}` : `☹️ Ainda não temos clientes no ${state.name}`}
        </span>
      </div>
    </div>
  );
};
