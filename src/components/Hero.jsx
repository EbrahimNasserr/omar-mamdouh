const Hero = () => {
  return (
    <section className=" bg-hero-pattern bg-center bg-contain bg-no-repeat w-full h-screen">
      <div className=" h-full flex justify-center text-slate-950 dark:text-slate-200 text-center flex-col items-center max-w-6xl mx-auto">
        <h1 className=" mb-5 font-bold text-3xl sm:text-4xl md:text-5xl">
          افهم قوة الأرقام.. مسألة واحدة في كل مرة
        </h1>
        <h2 className=" mb-5 text-xl w-80 sm:w-full">
          &quot;الرياضيات مش مجرد أرقام أو معادلات، دي طريقة تفكير وفهم.&quot;
        </h2>
        <p className=" text-lg">
          {" "}
          مع{" "}
          <span className=" font-customFont text-3xl font-bold text-custom-blue">
            م/ عمر ممدوح
          </span>{" "}
          هتقدر تحل أي مشكلة رياضية بكل سهولة وثقة{" "}
        </p>
      </div>
    </section>
  );
};

export default Hero;
