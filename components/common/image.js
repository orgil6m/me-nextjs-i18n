import Image from "next/image";
import PropTypes from "prop-types";

const MeImage = ({ className, src, alt }) => {
  return (
    <div className={`${className} relative overflow-hidden`}>
      <Image
        fill
        src={src || "/next.svg"}
        alt={alt}
        className="object-center object-cover"
      />
    </div>
  );
};

MeImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default MeImage;
