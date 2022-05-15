import PropTypes from 'prop-types';
/*COMPONENTS*/
import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from './MobileSidebar';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
	return (
		<>
			<MobileSidebar
				showSidebar={showSidebar}
				setShowSidebar={setShowSidebar}
			/>
			<DesktopSidebar showSidebar={showSidebar} />
		</>
	);
};

export default Sidebar;

Sidebar.propTypes = {
	showSidebar: PropTypes.bool.isRequired,
	setShowSidebar: PropTypes.func.isRequired
};
