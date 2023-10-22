
const FormLayout = ({ open, closeForm, formTitle, formContent }) => {
  return (
    <div
      //   id="hs-overlay-right-form"
      class={`hs-overlay ${
        open ? "translate-x-0" : "translate-x-full"
      }   fixed top-0 right-0 transition-all duration-300 transform h-full w-full sm:w-[40rem] z-[62] bg-bg_form text-text_default`}
      tabindex="-1"
    >
      <div class="flex justify-between items-center py-3 px-4 sm:px-10 md:px-12 border-b dark:border-gray-700 ">
        <h3 class="text-[1.625rem] font-semibold">{formTitle}</h3>
        <button
          type="button"
          class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md  focus:outline-none  text-sm cursor-pointer"
          onClick={closeForm}
        >
          <span class="sr-only">Close modal</span>
          <img src="/icons/crossIcon.svg" alt="Close" />
        </button>
      </div>
      <div className="w-full h-[0.5px] bg-bg_input " />
      {formContent}
    </div>
  );
};

export default FormLayout;
