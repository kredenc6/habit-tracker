import { signInWithGoogle, logout, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { Button } from '@headlessui/react';

export default function Auth() {
  const [user, loading, error] = useAuthState(auth);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success('Signed in successfully!');
    } catch (error) {
      toast.error('Error signing in');
    }
  };

  if (loading) return <div>Loading auth state...</div>;
  if (error) return <div>Auth error: {error.message}</div>;

  return (
    <div className="flex flex-col items-center gap-4">
      {user ? (
        <div className="text-center">
          <img 
            src={user.photoURL} 
            alt="Profile" 
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
          <p className="mb-4">Welcome, {user.displayName}!</p>
          <Button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Logout
          </Button>
        </div>
      ) : (
        <Button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
          </svg>
          Sign in with Google
        </Button>
      )}
    </div>
  );
}
