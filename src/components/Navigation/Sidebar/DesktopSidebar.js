import SidebarContent from './SidebarContent';

const DesktopSidebar = () => {
	return (
		<aside className='flex-shrink-0 hidden w-64 border-2 border-primary-200 bg-gray-100 lg:block'>
			<SidebarContent />
		</aside>
	);
};
export default DesktopSidebar;
