import { useState } from "react";
import { Styles } from "../styles";

const Article = () => {
  const [toggle, SetToggle] = useState(false);
  return (
    <section className="flex py-10 justify-center items-center text-primary w-full text-justify">
      <div
        className="bg-thertiary flex flex-col items-center justify-center
      max-w-[85%] sm:text-[15px] xs:text-[12px] text-[10px]"
      >
        <h1 className="text-secondary text-[25px] font-semibold pb-3">
          Malnutrition
        </h1>
        <div>
          <p>
            Malnutrition is a{" "}
            <span className={`${Styles.SpanColor}`}>
              serious global health problem
            </span>{" "}
            that affects people of all ages, particularly in developing
            countries. It refers to a state of poor health resulting from a diet
            lacking in necessary nutrients, or inadequate intake of essential
            vitamins and minerals. Malnutrition can take several forms,
            including undernutrition, overnutrition, and micronutrient
            malnutrition. Undernutrition occurs when the body does not receive
            enough energy and nutrients to meet its basic needs. It can lead to{" "}
            <span className={`${Styles.SpanColor}`}>wasting</span>,{" "}
            <span className={`${Styles.SpanColor}`}>stunted</span> growth,
            <span className={`${Styles.SpanColor}`}>
              weakened immune systems
            </span>
            , and increased risk of illness and death.
            <br />
            <br />
            Undernutrition is a major concern in developing countries, where
            food insecurity and poverty are common.{" "}
            <span className={`${Styles.SpanColor}`}>
              {" "}
              Children and pregnant women are particularly vulnerable to
              undernutrition
            </span>
            . Overnutrition, on the other hand, occurs when a person consumes
            too many calories and nutrients, leading to obesity and other health
            problems. This form of malnutrition is increasingly becoming a
            concern in developed countries, where unhealthy diets and sedentary
            lifestyles are prevalent.{" "}
            <span className={`${Styles.SpanColor}`}>
              Obesity can lead to serious health problems, including type 2
              diabetes, heart disease, and certain cancers
            </span>
            . Micronutrient malnutrition, also known as "hidden hunger," occurs
            when the body lacks specific vitamins and minerals, despite
            consuming enough calories. It affects people who consume enough
            calories but lack essential vitamins and minerals, leading to
            stunted growth, weakened immune systems, and increased risk of
            illness. This form of malnutrition is particularly prevalent in
            developing countries, where access to a diverse and nutritious diet
            is limited.
            <br />
            <br />
          </p>
        </div>
        <button
          onClick={() => SetToggle((prev) => !prev)}
          className={`${
            toggle ? "hidden" : "block"
          } text-secondary font-semibold py-5`}
        >
          {toggle ? "See Less" : "See More"}
        </button>
        <div className={toggle ? "block" : "hidden"}>
          <p>
            The{" "}
            <span className={`${Styles.SpanColor}`}> COVID-19 pandemic</span>{" "}
            has exacerbated the issue of malnutrition globally, as lockdowns and
            economic hardships have disrupted food systems and access to
            nutritious food. A growing number of children are experiencing acute
            malnutrition, also known as wasting, due to conflict, displacement,
            and economic hardship.{" "}
            <span className={`${Styles.SpanColor}`}>
              {" "}
              This is a serious concern as wasting can lead to long-term health
              problems and death
            </span>
            . There are several interventions aimed at reducing malnutrition,
            including{" "}
            <span className={`${Styles.SpanColor}`}>
              {" "}
              fortifying staple foods{" "}
            </span>{" "}
            with essential vitamins and minerals, promoting breastfeeding, and
            providing supplementary feeding to children and pregnant women.
            Fortifying staple foods with essential vitamins and minerals is a
            cost-effective and efficient way to address micronutrient
            malnutrition.
            <br />
            <br />{" "}
            <span className={`${Styles.SpanColor}`}> Breastfeeding </span> is
            also essential for ensuring that infants receive the necessary
            nutrients for proper growth and development. Supplementation
            programs provide high-quality, nutritious food to those who need it
            most, including children, pregnant women, and people living with
            HIV/AIDS. Malnutrition is one of the 17 United Nations Sustainable
            Development Goals (SDGs), with the goal to end all forms of
            malnutrition by 2030. This goal is achievable through a combination
            of efforts, including improving access to nutritious food, promoting
            healthy diets, and addressing the underlying causes of malnutrition,
            such as poverty, food insecurity, and poor health systems. In
            conclusion, malnutrition is a serious global health problem that
            affects people of all ages, particularly in developing countries. It
            takes several forms, including undernutrition, overnutrition, and
            micronutrient malnutrition, and has serious consequences for health
            and well-being. Interventions, including fortifying staple foods
            with essential vitamins and minerals, promoting breastfeeding, and
            providing supplementary feeding, can help reduce malnutrition and
            ensure that everyone has access to a diverse and nutritious diet.
            The goal of ending all forms of malnutrition by 2030 is achievable
            through collective action and commitment from all stakeholders.
          </p>
        </div>
        <button
          onClick={() => SetToggle((prev) => !prev)}
          className={`${
            toggle ? "block" : "hidden"
          } text-secondary font-semibold py-5`}
        >
          {toggle ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default Article;
