import classNames from "classnames";
import { useState } from "react";
import Button from "src/components/Button/Button";
import SectionHeading from "src/components/SectionHeading/SectionHeading";
import { bulletPointStyle } from "src/styles/styles";
import { WORKED_COMPANIES } from "src/utils/constants";
import { formatToMMYY } from "src/utils/helpers";
import { CompanyInfo } from "src/utils/types";

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState<CompanyInfo>(
    WORKED_COMPANIES[0]
  );

  return (
    <section className="h-full flex flex-col justify-center mb-28 md:mx-14">
      <SectionHeading placement={2} title="My Professional Background" />
      <div className="w-full flex flex-col md:flex-row gap-3">
        <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible">
          {WORKED_COMPANIES.map((company) => (
            <Button
              description={company.title}
              size="md"
              type="secondary"
              onClick={() => setActiveCompany(company)}
              active={company === activeCompany}
            />
          ))}
        </div>
        <div className="flex flex-col md:pt-2.5">
          <h3 className="text-2xl font-semibold mb-1">
            {activeCompany.position}{" "}
            <span className="text-electric-yellow">
              @ {activeCompany.title}
            </span>
          </h3>
          <p className="text-sm mb-4">
            {formatToMMYY(new Date(activeCompany.startDate))} -{" "}
            {activeCompany.endDate
              ? formatToMMYY(new Date(activeCompany.endDate))
              : "Present"}
          </p>
          <ul className="text-lg mb-3">
            {activeCompany.responsibilities.map((responsibility) => (
              <li className={`relative pl-5 ${bulletPointStyle} after:top-0`}>
                {responsibility}
              </li>
            ))}
          </ul>
          <ul className="text-base flex flex-wrap">
            {activeCompany.skills.map((skill, index) => (
              <li
                className={classNames(
                  "rounded-lg text-electric-yellow bg-faded-blue-heavy mt-2 py-1 px-3 font-semibold whitespace-nowrap",
                  index !== activeCompany.skills.length - 1 && "mr-2"
                )}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
