import Image from "next/image";
import Link from "next/link";

function Preps() {
  return (
    <section className=" pt-24 px-10">
      <h2 className=" text-4xl md:text-6xl font-customFont text-center mb-2">
        اختار مرحلتك
      </h2>
      <svg
        width="auto"
        height="18"
        viewBox="0 0 518 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.339746 9L9 17.6603L17.6603 9L9 0.339746L0.339746 9ZM517.66 9L509 0.339746L500.34 9L509 17.6603L517.66 9ZM9 10.5H509V7.5H9V10.5Z"
          fill="#064556"
        ></path>
      </svg>
      <div className="flex flex-col items-center justify-evenly gap-10 mt-5 max-w-xs md:flex-row md:max-w-6xl mx-auto">
        <Link
          href="/prep1"
          className="w-full text-center shadow-xl pb-3 md:w-1/3"
        >
          <Image
            src="/green-hand-draw-visual-thinking.png"
            width={500}
            height={500}
            priority
            alt="einstain"
          />
          <h3 className=" text-xl font-bold mt-4">الصف الأول الأعدادي</h3>
          <hr className=" border border-custom-blue w-9/12 my-2 mx-auto border-solid" />
          <p>كل كورسات الصف الأول الأعدادي</p>
        </Link>
        <Link
          href="/prep2"
          className="w-full text-center shadow-xl pb-3 md:w-1/3"
        >
          <Image
            src="/green-hand-draw-visual-thinking.png"
            width={500}
            height={500}
            priority
            alt="einstain"
          />
          <h3 className=" text-xl font-bold mt-4">الصف الثاني الأعدادي</h3>
          <hr className=" border border-custom-blue w-9/12 my-2 mx-auto border-solid" />
          <p>كل كورسات الصف الثاني الأعدادي</p>
        </Link>
        <Link
          href="/prep3"
          className="w-full text-center shadow-xl pb-3 md:w-1/3"
        >
          <Image
            src="/green-hand-draw-visual-thinking.png"
            width={500}
            height={500}
            priority
            alt="einstain"
          />
          <h3 className=" text-xl font-bold mt-4">الصف الثالث الأعدادي</h3>
          <hr className=" border border-custom-blue w-9/12 my-2 mx-auto border-solid" />
          <p>كل كورسات الصف الثالث الأعدادي</p>
        </Link>
      </div>
    </section>
  );
}

export default Preps;
