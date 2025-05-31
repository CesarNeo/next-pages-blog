import { Loader2 } from 'lucide-react';

function Loading() {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center px-4">
      <div className="relative">
        <Loader2 className="animate-spin text-gray-400" />

        <div className="absolute top-0 left-0 size-full animate-[spin_3s_linear_infinite] rounded-full border-t-2 border-cyan-100" />
      </div>
    </div>
  );
}

export default Loading;
