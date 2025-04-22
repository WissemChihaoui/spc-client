import { useRoutes } from 'react-router-dom';

import { routes } from './routing';

export function Router() {
    return useRoutes([
        ...routes
    ])
}