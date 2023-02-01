import { Foot } from "../constance";

const Footer = () => {
  return (
    <section className="w-full flex flex-row justify-between items-center px-10">
      <div className="w-full flex ss:flex-row flex-col ss:justify-between justify-center items-center py-5 border-t-[1px] border-[bg-therthiary]">
        <h1 className="ss:mb-0 mb-5 ss:text-start text-center">
          Copyright @ 2000 Trigee. All Right Reserved
        </h1>
        <div className="flex">
          {Foot.map((foot, index) => (
            <img
              key={foot.id}
              src={foot.img}
              alt=""
              className={`
          ${index !== Foot.length - 1 ? "mr-5" : "mr-0"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
