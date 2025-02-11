import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Collapse } from "react-collapse";

interface AccordionItemProps {
  open: boolean;
  toggle: () => void;
  title: string;
  desc: string;
  Link?: string;
  titleLink?: string;
}

function AccordionItem({
  open,
  toggle,
  title,
  desc,
  Link,
  titleLink,
}: AccordionItemProps) {
  return (
    <div>
      <div className="border-b-[1px] border-[#151722] ">
        <div
          className=" p-3 md:p-5 flex justify-between items-center "
          onClick={toggle}
        >
          <p className="text-[13.5px] md:text-[15px] font-[400]p-[4px] md:p-[3.5px] text-[#e2e2e2] px-2">
            {title}
          </p>
          <div>
            {open ? (
              <IoIosArrowUp fontSize={12} />
            ) : (
              <IoIosArrowDown fontSize={12} />
            )}
          </div>
        </div>

        <Collapse isOpened={open}>
          <div className="text-[12px] md:text-[13.5px] text-[#979696] px-5 pb-4 rounded-b-[0.3rem]">
            {desc}
            <br />
            <br />

            {Link && (
              <a
                href={Link}
                className="underline md:cursor-pointer text-[11px] underline-offset-[4px] active:text-red-500"
              >
                {titleLink}
              </a>
            )}
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default AccordionItem;
