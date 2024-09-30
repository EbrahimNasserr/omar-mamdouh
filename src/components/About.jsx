import Image from "next/image";

const About = () => {
  return (
    <section className="py-24 bg-custom-blue bg-about-pattern relative z-20">
      <div className=" absolute top-0 right-0 left-0 w-full h-full bg-black bg-opacity-75 -z-10"></div>
      <div className=" max-w-6xl mx-auto flex flex-col lg:flex-row text-center lg:text-start justify-between gap-10 items-center z-20">
        <div>
          <Image
            src="/about.png"
            width={600}
            height={600}
            priority
            alt="einstain"
          />
        </div>
        <div className=" w-11/12 lg:w-1/2">
          <h2 className=" text-5xl font-bold font-customFont text-custom-yellow">
            ليه م/ عمر ممدوح ؟
          </h2>
          <p className=" text-2xl mt-5 text-slate-200">
            لأن سواء كنت بتواجه صعوبة في المفاهيم الأساسية أو عايز تتعمق في
            المواضيع المتقدمة، هدفي إني أبسط لك الأفكار المعقدة وأخلي تعلم
            الرياضيات تجربة ممتعة ومفيدة. تعال نبدأ الرحلة دي سوا، وهنتعلم إزاي
            نحل أي مسألة رياضية بكل ثقة وسهولة!
          </p>

          <button className=" mt-5 px-3 py-3 hover:scale-105 transition-all font-customFont text-slate-900 rounded-lg bg-custom-yellow">
            اختار مرحتلك
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
