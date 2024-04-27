import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigator from './src/navigation/navigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
};

export default App;
