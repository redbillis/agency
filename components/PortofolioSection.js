import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

const PortofolioSection = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 text-red-600">Portofolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eius{" "}
          <span className="text-red-500">quidem</span> sit recusandae quos,
          reprehenderit vero aperiam sunt ratione maiores{" "}
          <span className="text-red-500">excepturi</span> dignissimos ad
          molestiae voluptatem.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eius{" "}
          <span className="text-red-500">quidem</span> sit recusandae quos,
          reprehenderit vero aperiam sunt ratione maiores{" "}
          <span className="text-red-500">excepturi</span> dignissimos ad
          molestiae voluptatem.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image
            src={web1}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt="portfolio-img-1"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web2}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt="portfolio-img-2"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web3}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt="portfolio-img-3"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web4}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt="portfolio-img-4"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web5}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt="portfolio-img-5"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={web6}
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt="portfolio-img-6"
          />
        </div>
      </div>
    </section>
  );
};

export default PortofolioSection;
