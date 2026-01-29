import Image from "next/image";

export function Flag({ code, className }) {
  // Flagpack sử dụng các mã quốc gia như VN, US, CA...
  // Component này sẽ trả về thẻ img hoặc svg tương ứng
  return (
    <Image
      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
      className={className}
      alt={code}
      width={24}
      height={16}
    />
  );
}
