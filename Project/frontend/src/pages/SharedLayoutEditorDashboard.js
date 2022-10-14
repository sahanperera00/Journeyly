import { Outlet } from 'react-router-dom';
import EditorDashSidebar from '../components/EditorDashSidebar';
import '../styles/sahan/SharedLayoutEditorDashboard.css';

function SharedLayoutEditorDashboard() {
  return (
    <div className='SharedLayoutEditorDashMainCont'>
      <EditorDashSidebar />
      <Outlet />
    </div>
  );
}

export default SharedLayoutEditorDashboard;
