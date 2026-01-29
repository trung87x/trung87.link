import PreviewWrapper from "@/utils/ui/preview-wrapper";
import { getRaw } from "@/utils/ui/get-raw";

// ----------------------------------------------------------------------
// IMPORTS
// ----------------------------------------------------------------------

import InputWithInlineLeadingAddOnAndTrailingDropdown from "./input_with_inline_leading_add_on_and_trailing_dropdown";
import InputWithLabel from "./input_with_label";
import InputWithLabelAndHelpText from "./input_with_label_and_help_text";
import InputWithValidationError from "./input_with_validation_error";
import InputWithDisabledState from "./input_with_disabled_state";
import InputWithHiddenLabel from "./input_with_hidden_label";
import InputWithCornerHint from "./input_with_corner_hint";
import InputWithLeadingIcon from "./input_with_leading_icon";
import InputWithTrailingIcon from "./input_with_trailing_icon";
import InputWithAddOn from "./input_with_add_on";
import InputWithInlineAddOn from "./input_with_inline_add_on";
import InputWithInlineLeadingAndTrailingAddOns from "./input_with_inline_leading_and_trailing_add_ons";
import InputWithInlineLeadingDropdown from "./input_with_inline_leading_dropdown";
import InputWithLeadingIconAndTrailingButton from "./input_with_leading_icon_and_trailing_button";
import InputsWithSharedBorders from "./inputs_with_shared_borders";
import InputWithInsetLabel from "./input_with_inset_label";
import InputsWithInsetLabelsAndSharedBorders from "./inputs_with_inset_labels_and_shared_borders";
import InputWithOverlappingLabel from "./input_with_overlapping_label";
import InputWithPillShape from "./input_with_pill_shape";
import InputWithGrayBackgroundAndBottomBorder from "./input_with_gray_background_and_bottom_border";
import InputWithKeyboardShortcut from "./input_with_keyboard_shortcut";

// ----------------------------------------------------------------------
// COMPONENT
// ----------------------------------------------------------------------

const Page = () => {
  const layouts = [
    {
      id: "01",
      name: "Input with inline leading add-on and trailing dropdown",
      component: <InputWithInlineLeadingAddOnAndTrailingDropdown />,
      fileName: "input_with_inline_leading_add_on_and_trailing_dropdown.jsx",
    },
    {
      id: "02",
      name: "Input with label",
      component: <InputWithLabel />,
      fileName: "input_with_label.jsx",
    },
    {
      id: "03",
      name: "Input with label and help text",
      component: <InputWithLabelAndHelpText />,
      fileName: "input_with_label_and_help_text.jsx",
    },
    {
      id: "04",
      name: "Input with validation error",
      component: <InputWithValidationError />,
      fileName: "input_with_validation_error.jsx",
    },
    {
      id: "05",
      name: "Input with disabled state",
      component: <InputWithDisabledState />,
      fileName: "input_with_disabled_state.jsx",
    },
    {
      id: "06",
      name: "Input with hidden label",
      component: <InputWithHiddenLabel />,
      fileName: "input_with_hidden_label.jsx",
    },
    {
      id: "07",
      name: "Input with corner hint",
      component: <InputWithCornerHint />,
      fileName: "input_with_corner_hint.jsx",
    },
    {
      id: "08",
      name: "Input with leading icon",
      component: <InputWithLeadingIcon />,
      fileName: "input_with_leading_icon.jsx",
    },
    {
      id: "09",
      name: "Input with trailing icon",
      component: <InputWithTrailingIcon />,
      fileName: "input_with_trailing_icon.jsx",
    },
    {
      id: "10",
      name: "Input with add-on",
      component: <InputWithAddOn />,
      fileName: "input_with_add_on.jsx",
    },
    {
      id: "11",
      name: "Input with inline add-on",
      component: <InputWithInlineAddOn />,
      fileName: "input_with_inline_add_on.jsx",
    },
    {
      id: "12",
      name: "Input with inline leading and trailing add-ons",
      component: <InputWithInlineLeadingAndTrailingAddOns />,
      fileName: "input_with_inline_leading_and_trailing_add_ons.jsx",
    },
    {
      id: "13",
      name: "Input with inline leading dropdown",
      component: <InputWithInlineLeadingDropdown />,
      fileName: "input_with_inline_leading_dropdown.jsx",
    },
    {
      id: "14",
      name: "Input with leading icon and trailing button",
      component: <InputWithLeadingIconAndTrailingButton />,
      fileName: "input_with_leading_icon_and_trailing_button.jsx",
    },
    {
      id: "15",
      name: "Inputs with shared borders",
      component: <InputsWithSharedBorders />,
      fileName: "inputs_with_shared_borders.jsx",
    },
    {
      id: "16",
      name: "Input with inset label",
      component: <InputWithInsetLabel />,
      fileName: "input_with_inset_label.jsx",
    },
    {
      id: "17",
      name: "Inputs with inset labels and shared borders",
      component: <InputsWithInsetLabelsAndSharedBorders />,
      fileName: "inputs_with_inset_labels_and_shared_borders.jsx",
    },
    {
      id: "18",
      name: "Input with overlapping label",
      component: <InputWithOverlappingLabel />,
      fileName: "input_with_overlapping_label.jsx",
    },
    {
      id: "19",
      name: "Input with pill shape",
      component: <InputWithPillShape />,
      fileName: "input_with_pill_shape.jsx",
    },
    {
      id: "20",
      name: "Input with gray background and bottom border",
      component: <InputWithGrayBackgroundAndBottomBorder />,
      fileName: "input_with_gray_background_and_bottom_border.jsx",
    },
    {
      id: "21",
      name: "Input with keyboard shortcut",
      component: <InputWithKeyboardShortcut />,
      fileName: "input_with_keyboard_shortcut.jsx",
    },
  ];

  // Đường dẫn cơ sở đến thư mục chứa các file input-groups (Application UI > Forms)
  const baseDir =
    "src/app/(features)/tailwindcss/(ui)/(blocks)/application-ui/forms/input-groups";

  return (
    <div className="space-y-10 pb-20">
      {layouts.map((layout) => (
        <section
          key={layout.id}
          className="border-b border-gray-100 pb-10 last:border-0"
        >
          <h2 className="mb-4 text-lg font-bold text-gray-800">
            {layout.id}. {layout.name}
          </h2>
          <PreviewWrapper
            name={layout.name}
            // Nạp mã nguồn động qua getRaw dựa trên fileName và baseDir
            code={getRaw(`${baseDir}/${layout.fileName}`)}
          >
            {layout.component}
          </PreviewWrapper>
        </section>
      ))}
    </div>
  );
};

export default Page;
