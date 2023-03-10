import QuestionOne from "@/Components/questionOne";
import Results from "@/Components/results";
import Head from "next/head";
import Title from "../Components/title";
import { useState } from "react";
import Router, { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const {
    query: { landFootprint },
  } = router;
  const props = { landFootprint };
  console.log(props.landFootprint);
  let oldFootprint = Number(props.landFootprint);

  if (isNaN(oldFootprint)) {
    oldFootprint = 0;
  }

  const [domestic, setDomestic] = useState(0);
  const [economic, setEconomic] = useState(0);
  const [premium, setPremium] = useState(0);
  const [business, setBusiness] = useState(0);
  const [first, setFirst] = useState(0);

  const values = [domestic, economic, premium, business, first];

  const airValues = values.map(function (item) {
    return Number(item);
  });

  console.log(values);
  console.log(airValues);

  const cFootprint =
    oldFootprint +
    (airValues[0] * 0.09612 +
      airValues[1] * 0.0736152 +
      airValues[2] * 0.11778 +
      airValues[3] * 0.21348 +
      airValues[4] * 0.29445) /
      1000;

  const airFootprint = cFootprint.toFixed(3);

  function sendProps() {
    Router.push({
      pathname: "/output",
      query: { airFootprint },
    });
  }

  function prevPage() {
    Router.push({
      pathname: "/land",
      query: { airFootprint },
    });
  }

  const questions = [
    {
      id: 1,
      title: "Domestic Air Travel (km)",
      name: "Domestic",
      category: "Air Travel",
    },
    {
      id: 2,
      title: "Economy Class Flights (km)",
      name: "Economy",
      category: "Air Travel",
    },
    {
      id: 3,
      title: "Premium Economy Class Flights (km)",
      name: "Premium",
      category: "Air Travel",
    },
    {
      id: 4,
      title: "Business Class Flights (km)",
      name: "Business",
      category: "Air Travel",
    },
    {
      id: 5,
      title: "First Class Flights (km)",
      name: "First",
      category: "Air Travel",
    },
  ];

  return (
    <>
      <Head>
        <title>Power Consumption</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex flex-col items-center justify-center py-5">
        <div className="p-4 flex flex w-10/12 bg-gray-100 rounded-t-xl items-center justify-center">
          <Title name="Air Travel Footprint" />
        </div>
        <div className="h-20 mb-5 flex items-center justify-center w-10/12">
          <Results
            value={airFootprint}
            sendData={sendProps}
            goBack={prevPage}
          />
        </div>
        <div className="my-2 flex flex-col w-10/12 overflow-y-scroll h-96 p-2">
          <img
            src="images/air/commercial-plane.png"
            alt="cartoon car"
            className="w-24 self-center"
          />
          <h1 className="text-xl text-slate-700 font-bold mb-6 text-center">
            Distance Travelled in a:
          </h1>
          <div className="flex flex-wrap gap-2 justify-center">
            <QuestionOne questions={questions[0]} setValue={setDomestic} />
            <QuestionOne questions={questions[1]} setValue={setEconomic} />
            <QuestionOne questions={questions[2]} setValue={setPremium} />
            <QuestionOne questions={questions[3]} setValue={setBusiness} />
            <QuestionOne questions={questions[4]} setValue={setFirst} />
          </div>
        </div>
      </main>
    </>
  );
}
