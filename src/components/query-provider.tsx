'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren, useMemo } from 'react';

interface QueryProviderProps extends PropsWithChildren {}

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  const client = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
    []
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
