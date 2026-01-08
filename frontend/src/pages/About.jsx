import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full max-w-112.5" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nobis vel cum neque molestias voluptatum beatae quibusdam itaque
            maxime magni?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis eum dolores, optio commodi aut necessitatibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            placeat atque modi fugiat iusto fugit, obcaecati eveniet nostrum
            incidunt, deserunt nam, sunt libero dolores suscipit enim sint. Non
            officiis voluptates iusto inventore facilis, tenetur illum.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            perferendis optio quod obcaecati unde! Debitis architecto cupiditate
            error nostrum ipsam perspiciatis magnam animi ab quod.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assuarence:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            sequi facilis, quidem quo quae amet?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            sequi facilis, quidem quo quae amet?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            illo rerum aut ut odio. Repellat enim nam sunt sint maxime!
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
