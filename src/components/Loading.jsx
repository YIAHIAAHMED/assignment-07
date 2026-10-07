const Loading = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center">

      <div className="text-center">

        <div className="w-12 h-12 border-4 border-[#DCE8E2] border-t-[#244D3F] rounded-full animate-spin mx-auto"></div>

        <p className="mt-4 text-[#64748B] font-medium">
          Loading friends...
        </p>

      </div>

    </div>
  );
};

export default Loading;