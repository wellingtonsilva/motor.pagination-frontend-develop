import type { Estado } from './estado';

export type StatesContextType = {
  data: Estado[];
  currentPage: number;
  totalItems: number;
  loading: boolean;
  itemsPerPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};