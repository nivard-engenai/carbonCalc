import QuestionOne from "@/Components/questionOne";
import Results from "@/Components/results";
import Head from "next/head";
import Title from "../Components/title";
import { useState } from "react";
import Router, { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const {
    query: { foodFootprint },
  } = router;
  const props = { foodFootprint };
  console.log(props.foodFootprint);
  let oldFootprint = Number(props.foodFootprint);

  if (Number.isNaN(oldFootprint)) {
    oldFootprint = 0;
  }

  const [clothes, setClothes] = useState(0);
  const [services, setServices] = useState(0);
  const [furniture, setFurniture] = useState(0);
  const [miscellaneous, setMiscellaneous] = useState(0);

  const values = [clothes, services, furniture, miscellaneous];

  const retailValues = values.map(function (item) {
    return Number(item);
  });

  console.log(values);
  console.log(retailValues);

  const cFootprint =
    oldFootprint +
    (retailValues[0] * 6.666666 +
    retailValues[1] * 3 +
    retailValues[2] * 6 +
    retailValues[3] * 5.655)/1000;

  const retailFootprint = cFootprint.toFixed(3);

  function sendProps() {
    Router.push({
      pathname: "/pets",
      query: { retailFootprint },
    });
  }

  function prevPage() {
    Router.push("/food");
  }

  const questions = [
    {
      id: 1,
      title: "Clothes (per month)",
      name: "Clothes",
      placeholder: "USD",
      category: "Retail Expenses",
      image: "images/retail/shirt.png",
    },
    {
      title: "Services (per month)",
      name: "Services",
      placeholder: "USD",
      category: "Retail Expenses",
      image: "images/retail/wifi.png",
    },
    {
      title: "Furniture (per month)",
      name: "Furniture",
      placeholder: "USD",
      category: "Retail Expenses",
      image: "images/retail/furniture.png",
    },
    {
      title: "Miscellaneous (per month)",
      name: "Miscellaneous",
      placeholder: "USD",
      category: "Retail Expenses",
      image: "images/retail/online-shopping.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Power Consumption</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center py-5">
      <div className="p-4 flex flex w-10/12 bg-gray-100 rounded-t-xl items-center justify-center">
          <Title name="Retail Footprint" />
        </div>
        <div className="h-20 mb-5 flex items-center justify-center w-10/12">
          <Results value={retailFootprint} sendData={sendProps} goBack={prevPage} />
        </div>
        <div className="my-2 flex flex-col w-10/12">
          <div className="flex flex-wrap gap-2 justify-center overflow-y-scroll h-96 p-2">
            <QuestionOne questions={questions[0]} setValue={setClothes} />
            <QuestionOne questions={questions[1]} setValue={setServices} />
            <QuestionOne questions={questions[2]} setValue={setFurniture} />
            <QuestionOne questions={questions[3]} setValue={setMiscellaneous} />
          </div>
        </div>
        <div className="my-2 flex items-center justify-center w-3/4">
        </div>
      </main>
    </>
  );
}
