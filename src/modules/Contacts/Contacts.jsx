import React from "react";
import { ContactsHero } from "./ContactsHero";
import { Map } from "../../components/Map";
import { OurContacts } from "./OurContacts";
import { Footer } from "../../components/Footer/Footer";
import { FeedBack } from "../../components/FeedBack";

export default function Contacts() {
  return (
    <>
      <ContactsHero />
      <OurContacts />
      <FeedBack />
      <Map />
      <Footer />
    </>
  );
}
