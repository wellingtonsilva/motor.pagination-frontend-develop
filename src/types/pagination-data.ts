import type { Estado } from './estado';

export type PaginationData = {
  data: Estado[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}