import { Contribute } from "../constance";

const Contribution = () => {
  return (
    <section>
      <div className="flex sm:flex-row flex-col flex-wrap items-center justify-evenly">
        {Contribute.map((con, index) => (
          <div
            key={con.id}
            className={`flex flex-col justify-start max-w-[350px] sm:min-w-[350px] sm:min-h-[480px]  min-h-[300px] m-3 flex-1 bg-thertiary rounded-[10px]
            ${index !== Contribute.length - 1 ? "sm:mb-0 mb-3" : "mb-0"} `}
          >
            <div className="flex flex-col relative">
              <img
                src={con.img}
                alt=""
                className="max-h-[180px] min-h-[180px] xs:max-h-[230px] xs:min-h-[230px] "
              />
              <div className="absolute bottom-0 right-0 w-[100%] h-[30%] flex items-center justify-center bg-black opacity-[0.5]">
                <h1 className="text-primary font-bold text-[30px]">
                  {con.title}{" "}
                </h1>
              </div>
            </div>
            <p className="ss:text-[15px] xs:text-[12px] text-[12px] max-w-[95%] mx-auto py-4">
              {con.content}{" "}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contribution;
