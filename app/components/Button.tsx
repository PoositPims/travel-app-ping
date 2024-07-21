import Image from "next/image";

type ButtonnProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

function Button({ type, title, icon, variant }: ButtonnProps) {
  return (
    <button
      type={type}
      className={`flexCenter gap3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
}

export default Button;
