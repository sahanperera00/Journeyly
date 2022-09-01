import { Outlet } from 'react-router-dom';
import EditorNavbar from '../components/EditorNavbar';

function SharedLayoutEditorDashboard() {
  return (
    <div>
      <EditorNavbar />
      <Outlet />
    </div>
  );
}

export default SharedLayoutEditorDashboard;
