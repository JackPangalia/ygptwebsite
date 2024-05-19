import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex mt-44 gap-24 px-[8rem] pb-[6rem]">
      <div>
        <div className="flex gap-2 mb-3">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1.7em"
            width="1.7em"
          >
            <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
          </svg>

          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1.7em"
            width="1.7em"
          >
            <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
          </svg>
        </div>
        <span className="">© 2024 companyname* technologies Inc</span>
      </div>

      <div>
        <span className="text-gray-500 text-sm">EXAMPLE OFFERINGS</span>
        <ul className="mt-3 space-y-2">
          <li>
            <Link href="#">example item 1*</Link>
          </li>
          <li>
            <Link href="#">example item 2*</Link>
          </li>
          <li>
            <Link href="#">example item 3*</Link>
          </li>
          <li>
            <Link href="#">example item 4*</Link>
          </li>
          <li>
            <Link href="#">example item 5*</Link>
          </li>
          <li>
            <Link href="#">example item 6*</Link>
          </li>
          <li>
            <Link href="#">example item 7*</Link>
          </li>
          <li>
            <Link href="#">example item 8*</Link>
          </li>
        </ul>
      </div>

      <div>
        <span className="text-gray-500 text-sm">DOCUMENTS</span>
        <ul className="mt-3 space-y-2">
          <li>
            <Link href="#">document item 1*</Link>
          </li>
          <li>
            <Link href="#">document item 2*</Link>
          </li>
          <li>
            <Link href="#">document item 3*</Link>
          </li>
          <li>
            <Link href="#">document item 4*</Link>
          </li>
          <li>
            <Link href="#">document item 5*</Link>
          </li>
        </ul>
      </div>

      <div>
        <span className="text-gray-500 text-sm">CAPABILITIES</span>
        <ul className="mt-3 space-y-2">
          <li>
            <Link href="#">capabilities item 1*</Link>
          </li>
          <li>
            <Link href="#">capabilities item 2*</Link>
          </li>
          <li>
            <Link href="#">capabilities item 3*</Link>
          </li>
          <li>
            <Link href="#">capabilities item 4*</Link>
          </li>
          <li>
            <Link href="#">capabilities item 5*</Link>
          </li>
          <li>
            <Link href="#">capabilities item 5*</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
