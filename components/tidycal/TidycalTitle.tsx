import { useTidycalModal } from "@/contexts/TidycalModalContext";
import colors from "@/lib/colors";
import { CrossIcon } from "@/services/assets/svgs";

function TidycalTitle() {
  const { handleCloseModal } = useTidycalModal();
  return (
    <div className="flex items-start justify-between px-4">
      <p className="font-inter text-2xl font-bold !leading-[1.4] text-white">
        Schedule a meeting
      </p>
      <button
        className="bg-transparent border-none outline-none ring-0 hover:ring-2 ring-natural-800"
        onClick={handleCloseModal}
      >
        <CrossIcon className="h-6 w-6" color={colors.natural[50]} />
      </button>
    </div>
  );
}

export default TidycalTitle;
