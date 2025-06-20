export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );
} 