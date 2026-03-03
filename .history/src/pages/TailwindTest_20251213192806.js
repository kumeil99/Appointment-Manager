const TailwindTest = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-red-500 p-10 rounded-2xl shadow-2xl">
        <h1 className="text-white text-6xl font-extrabold mb-4">
          TAILWIND TEST
        </h1>
        <p className="text-yellow-300 text-xl">
          If you see this styled box, Tailwind is WORKING ✅
        </p>
      </div>
    </div>
  );
};

export default TailwindTest;
