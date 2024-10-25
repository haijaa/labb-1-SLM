import { mdiRotate3dVariant } from "@mdi/js";
import { Icon } from "@mdi/react";
import PropTypes from "prop-types";

export default function RandomMagazine({ testObject, setCurrentIndex }) {
  const RandomMagazine = () => {
    const currentIndex = Math.floor(Math.random() * testObject.length);
    setCurrentIndex(currentIndex);
  };
  return (
    <div
      className="flex items-center mt-10 ml-10 hover"
      onClick={RandomMagazine}
    >
      <Icon path={mdiRotate3dVariant} size={2} />
      <p>Random magazine</p>
    </div>
  );
}

RandomMagazine.propTypes = {
  testObject: PropTypes.object.isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};