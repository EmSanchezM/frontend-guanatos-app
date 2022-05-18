import { Route, Routes } from 'react-router-dom';
import HomeRoutes from './HomeRoutes';
import { PrivateRoute } from './PrivateRoute';
import PublicistRoutes from './PublicistRoutes';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
	return (
		<div className='pattern__background'>
			<Routes>
				<Route
					path='/'
					element={
						<PublicRoute>
							<HomeRoutes />
						</PublicRoute>
					}
				/>
				<Route
					path='/publicist/*'
					element={
						<PrivateRoute>
							<PublicistRoutes />
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
};

export default AppRouter;
