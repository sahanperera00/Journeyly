import { Outlet } from 'react-router-dom';
import EditorNavbar from '../components/EditorNavbar';

function EditorDashboard() {
  return (
    <div>
      <EditorNavbar />
      <h1 className='text-center'>Dashboard</h1>
      <Outlet />
    </div>
  );
}

export default EditorDashboard;
