import { useTidycalModal } from "@/contexts/TidycalModalContext";
import { DayPicker } from "react-day-picker";

function TidycalDatePicker() {
  const { selectedDate, setSelectedDate, setActiveStage, fromDate, toDate } =
    useTidycalModal();
  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={(value) => {
        setSelectedDate(value);
        setActiveStage(1);
      }}
      disabled={{ before: fromDate, after: toDate }}
      defaultMonth={new Date(2025, 10, 15)}
      showOutsideDays={false}
      classNames={{
        months: "flex flex-col items-center justify-center relative", // center align
        month: "space-y-4", // relative for absolute children
        month_caption: "absolute top-0 left-1/2 -translate-x-1/2",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-base font-medium text-white",
        nav: "flex items-center justify-between w-full px-2 mb-4 mx-auto max-w-[300px]",
        nav_button:
          "h-7 w-7 bg-pink-500 text-white rounded-md flex items-center justify-center hover:bg-pink-600 transition-colors duration-200 [&>svg]:!stroke-white [&>svg]:w-4 [&>svg]:h-4",
        nav_button_previous: "!stroke-white !fill-white",
        nav_button_next: "!stroke-white !fill-white",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-gray-500 rounded-md w-10 font-medium text-xs uppercase",
        row: "flex w-full mt-2",
        cell: "text-end bg-pink-500 text-sm p-0 relative focus-within:relative focus-within:z-20",
        weekday: "!text-gray-500",
        day: 'h-10 w-10 p-0 font-normal text-white hover:bg-gray-800 rounded-lg transition-colors !rounded-full [data-outside="true"]:hover:bg-transparent',
        day_button:
          "h-full w-full flex items-center justify-center !rounded-full",
        day_selected:
          "bg-main-600 text-black hover:bg-main-500 hover:text-black focus:bg-white focus:text-black font-semibold",
        day_today: "font-semibold",
        day_outside: "text-gray-700 opacity-50 cursor-not-allowed",
        outside: "cursor-default hover:bg-transparent",
        day_disabled:
          "text-gray-700 opacity-50 cursor-not-allowed hover:bg-transparent",
        day_hidden: "invisible",
        disabled: "!opacity-25 pointer-events-none !cursor-not-allowed",
      }}
      modifiersClassNames={{
        selected: "bg-main-600 text-black !rounded-full",
      }}
      components={{
        PreviousMonthButton: (props) => (
          <button
            {...props}
            aria-label="Previous Month"
            className="w-7 h-7 flex items-center justify-center hover:bg-gray-800 rounded duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        ),
        NextMonthButton: (props) => (
          <button
            {...props}
            aria-label="Next Month"
            className="w-7 h-7 flex items-center justify-center hover:bg-gray-800 rounded duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        ),
      }}
      // hideNavigation
      className="bg-black rounded-none py-4 shadow-2xl border border-gray-800"
    />
  );
}

export default TidycalDatePicker;
