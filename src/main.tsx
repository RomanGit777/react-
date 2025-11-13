import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { UserPage } from './pages/UserPage.tsx';

// Create a QueryClient instance (manages caching, fetching, and background updates)
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!)
    .render(
        // Wrap the app with QueryClientProvider to give all components access to the QueryClient
        // This allows useQuery and useMutation hooks to work anywhere inside the app
        <QueryClientProvider client={queryClient}>
             <BrowserRouter>
                 <Routes>
                    <Route path={'/'} element={<App/>}/>
                    <Route path={'/user/:id'} element={<UserPage/>}/>
                 </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
