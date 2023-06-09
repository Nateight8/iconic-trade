import { useField } from "formik";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  icon?: React.ReactNode;
  name: string;
}

const TextField: React.FunctionComponent<TextFieldProps> = ({
  label,
  icon,
  ...props
}) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <div className="">
      <label
        htmlFor="email-address-icon"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          // placeholder={placeholder}
          style={icon ? { paddingLeft: "40px" } : {}}
          {...field}
          {...props}
        />
      </div>
    </div>
  );
};

export default TextField;

{
  /* <svg
aria-hidden="true"
className="w-5 h-5 text-gray-500 dark:text-gray-400"
fill="currentColor"
viewBox="0 0 20 20"
xmlns="http://www.w3.org/2000/svg"
>
<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
</svg> */
}
