import React from 'react';
import { MousePointer2 } from 'lucide-react';

interface HeaderProps {
  onToggleCursor: () => void;
  canCreateDiv: boolean;
}

export function Header({ onToggleCursor, canCreateDiv }: HeaderProps) {
  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Interactive Div Creator</h1>
        <button
          onClick={onToggleCursor}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            canCreateDiv 
              ? 'bg-green-500 hover:bg-green-600 text-white' 
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
          disabled={canCreateDiv}
        >
          <MousePointer2 size={20} />
          <span>{canCreateDiv ? 'Click to Place Div' : 'Create New Div'}</span>
        </button>
      </div>
    </header>
  );
}