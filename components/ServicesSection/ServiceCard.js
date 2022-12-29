import Image from "next/image";

const ServiceCard = ({
  cardImg,
  cardTitle,
  cardDetails,
  cardDesignTools,
  ToolOne,
  ToolTwo,
  ToolThree,
}) => {
  return (
    <div className="text-center p-10 rounded-xl my-10 flex flex-col items-center shadow-2xl hover:shadow-xl">
      <Image src={cardImg} width={500} height={500} alt="design-icon" />
      <h3 className="text-xl font-medium pt-8 pb-2 text-red-600">
        {cardTitle}
      </h3>
      <p className="py-2 dark:text-white">{cardDetails}</p>
      <h4 className="py-4 text-red-600">{cardDesignTools}</h4>
      <p className="text-gray-800 py-1 dark:text-gray-400">{ToolOne}</p>
      <p className="text-gray-800 py-1 dark:text-gray-400">{ToolTwo}</p>
      <p className="text-gray-800 py-1 dark:text-gray-400">{ToolThree}</p>
    </div>
  );
};

export default ServiceCard;
