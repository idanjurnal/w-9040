
import React from 'react';
import { AlertCircle } from 'lucide-react';

const ConfigurationWarning = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <AlertCircle className="text-orange-500 mb-4" size={48} />
      <h3 className="text-lg font-medium mb-2">Configuration Required</h3>
      <p className="text-sm text-gray-600 text-center">
        Supabase environment variables are missing. Please configure your Supabase connection to enable image management.
      </p>
    </div>
  );
};

export default ConfigurationWarning;
