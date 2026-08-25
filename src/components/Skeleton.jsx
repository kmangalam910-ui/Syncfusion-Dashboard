import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full min-h-screen p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-lg animate-pulse space-y-4 flex flex-col justify-evenly">
      <div className="w-full h-20 rounded-xl shadow-lg animate-pulse bg-gray-200 dark:bg-slate-700"></div>
      <div className="w-full h-20 rounded-xl shadow-lg animate-pulse bg-gray-200 dark:bg-slate-700"></div>
      <div className="w-full h-20 rounded-xl shadow-lg animate-pulse bg-gray-200 dark:bg-slate-700"></div>
      <div className="w-full h-20 rounded-xl shadow-lg animate-pulse bg-gray-200 dark:bg-slate-700"></div>
      <div className="w-full h-20 rounded-xl shadow-lg animate-pulse bg-gray-200 dark:bg-slate-700"></div>
      <div className="w-full h-20 rounded-xl shadow-lg animate-pulse bg-gray-200 dark:bg-slate-700"></div>
      <div className="w-full h-20 rounded-xl shadow-lg animate-pulse bg-gray-200 dark:bg-slate-700"></div>
      <div className="w-full h-20 rounded-xl shadow-lg animate-pulse bg-gray-200 dark:bg-slate-700"></div>
      <div className="w-full h-20 rounded-xl shadow-lg animate-pulse bg-gray-200 dark:bg-slate-700"></div>
    </div>
  );
};

export default Skeleton;
