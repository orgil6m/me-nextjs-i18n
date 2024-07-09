import PropTypes from "prop-types";
import ConditionalWrapper from "./wrapper";

const MeInput = ({
  label,
  icon,
  valid,
  value,
  onChange,
  placeholder,
  className = "",
  type = "text",
  textarea = false,
}) => {
  const wrapper = (children) => (
    <InputIconWrapper icon={icon}>{children}</InputIconWrapper>
  );

  return (
    <ConditionalWrapper condition={!!icon} wrapper={wrapper}>
      <div className="w-full flex flex-col gap-1">
        {label && <label>{label}</label>}
        <Input
          icon={icon}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          className={className}
          textarea={textarea}
          type={type}
        />
      </div>
      {valid && value && (
        <div className="italic text-secondary text-sm mt-1">
          {valid(value).message}
        </div>
      )}
    </ConditionalWrapper>
  );
};

export default MeInput;

const InputIconWrapper = ({ icon, children }) => (
  <div className="w-full relative me-rounded overflow-hidden">
    <button className="absolute h-full pl-4 flex-center">{icon}</button>
    {children}
  </div>
);

const Input = ({
  icon,
  value,
  onChange,
  placeholder,
  className = "",
  textarea = false,
  type = "text",
}) => {
  const InputElement = textarea ? "textarea" : "input";
  const leftPadding = icon ? "!pl-10" : "";

  const props = {
    value,
    placeholder,
    onChange: (e) => onChange(e.target.value),
    className: `${className} ${leftPadding} me-input disabled:cursor-not-allowed`,
    disabled: !onChange,
    onWheel: (e) => e.target.blur(),
  };

  return <InputElement {...props} type={type} />;
};

MeInput.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  valid: PropTypes.func,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  textarea: PropTypes.bool,
};
