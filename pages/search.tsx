import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Moment from "moment";
import InfoCard from "../components/InfoCard";
import { AnyCnameRecord } from "dns";

const Search = ({ searchResult }: any) => {
  console.log(searchResult);

  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = Moment(startDate).format("Do MMM YYYY");
  const formattedEndDate = Moment(endDate).format("Do MMM YYYY");

  console.log(formattedStartDate);

  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Head>
        <title>Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuests} number of guests
          </p>
          <p className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </p>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>{" "}
            <p className="button"> Price</p>
            <p className="button"> Rooms and Beds</p>
            <p className="button"> More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResult.map((item: any) => (
              <InfoCard {...item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}

export default Search;
