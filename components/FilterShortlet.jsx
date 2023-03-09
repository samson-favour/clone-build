import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./common/footer/Footer";
import Header from "./Header";
import Moment from "moment";
import InfoCard from "./InfoCard";
import MapView from "./Map";
import CopyrightFooter from "./common/footer/CopyrightFooter";
const FilterShortlet = ({ filteredEvents }) => {
  console.log("searchResult", filteredEvents);

  const router = useRouter();
  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = Moment(startDate).format("Do MMM YYYY");
  const formattedEndDate = Moment(endDate).format("Do MMM YYYY");

  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
      <Head>
        <title>Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />
      <main className=" xl:flex">
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
            {filteredEvents.map((item) => (
              <InfoCard {...item} />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <MapView filteredEvents={filteredEvents} />
        </section>
      </main>
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </div>
  );
};

export default FilterShortlet;
