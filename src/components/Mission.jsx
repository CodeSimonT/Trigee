import { Styles } from "../styles";

const Mission = () => {
  return (
    <section
      className={`${Styles.SectionPaddingY} w-full flex justify-center items-center bg-thertiary`}
    >
      <h1
        className=" text-center text-[8px] xs:text-[12px] 
      sm:text-[20px] md:text-[30px] font-semibold"
      >
        Our mission is to ensure that every child has access to enough <br />
        nutritious food to support their healthy growth and development.
      </h1>
    </section>
  );
};

export default Mission;
