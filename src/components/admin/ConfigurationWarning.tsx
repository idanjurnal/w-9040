
import React from 'react';
import { AlertCircle } from 'lucide-react';

const ConfigurationWarning = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <AlertCircle className="text-orange-500 mb-4" size={48} />
      <h3 className="text-lg font-medium mb-2">Storage Setup Required</h3>
      <p className="text-sm text-gray-600 text-center">
        Storage bucket needs to be created. Please contact administrator to set up the image storage bucket.
      </p>
    </div>
  );
};

export default ConfigurationWarning;
