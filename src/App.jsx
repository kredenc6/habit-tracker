import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Auth from './components/Auth';
import HabitList from './components/HabitList';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="p-4">Loading app...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Toaster position="top-right" />
      <div className="mb-8">
        <Auth />
      </div>
      
      {user && (
        <main>
          <h1 className="text-2xl font-bold mb-4">Your Habits</h1>
          <HabitList />
        </main>
      )}
    </div>
  );
}