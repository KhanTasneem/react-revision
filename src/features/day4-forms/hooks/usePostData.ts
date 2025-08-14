// src/hooks/usePostData.ts
import { useState } from 'react';
import { api } from '../services/api';

export const usePostData = <T = any>(url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  async function post(body: any) {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post(url, body);
      setData(res.data);
      return res.data;
    } catch (err: any) {
      setError(err.message || 'Request failed');
    } finally {
      setLoading(false);
    }
  }

  return { post, loading, error, data };
}
