import { MalnutritionInfo } from "../constance/index";
const DataInfo = () => {
  return (
    <section className="py-4 bg-secondary md:py-16">
      <div className="flex sm:flex-row flex-col flex-wrap items-center justify-evenly">
        {MalnutritionInfo.map((data, index) => (
          <div
            key={data.id}
            className={` xs:max-w-[350px] sm:max-w-[380px] max-w-[300px] min-w-[350px] xs:min-h-[370px] max-h-[300px] m-3 flex-1 bg-thertiary p-4 text-center rounded-[10px]
            ${
              index !== MalnutritionInfo.length - 1 ? "sm:mb-0 mb-3" : "mb-0"
            } `}
          >
            <h1 className="uppercase xs:text-[25px] text-[15px] mb-3 font-semibold">
              {data.title}
            </h1>
            <div className="flex flex-col justify-center items-center">
              <img
                src={data.img}
                alt=""
                className="max-h-[180px] min-h-[180px] sm:max-h-[230px] sm:min-h-[230px]"
              />
            </div>
            <div className="  min-h-[70px] flex flex-col items-center">
              <h3 className="xs:text-[15px] text-[12px] py-1 ">
                {data.heading}
              </h3>
              <p className="xs:text-[12px] text-[10px] max-w-[85%]">
                {data.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DataInfo;
