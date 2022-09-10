import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import Header from "./parts/header/Header";
function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className="container"><Header/></div>
    </QueryClientProvider>
  );
}

export default App;
