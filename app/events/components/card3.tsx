"use client";
import { Card, Grid, Text, Link } from "@nextui-org/react";
import Image from "next/image";

const App2 = () => {
  return (
    <Card
      isHoverable
      variant="bordered"
      css={{ p: "$7", mw: "600px", backgroundColor: "white" }}
    >
      <Card.Header>
        <Image
          src="/images/events/event7.jpg"
          width={70}
          height={70}
          alt="event1"
          className="rounded-full"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              WELLNESS FESTIVAL
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>www.visitsingapore.com</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Come enjoy the "WELLNESS FESTIVAL SINGAPORE" with your peers!
          <br />
          VENUE: EVENT PLAZA, MARINA BAY SANDS
          <br />
          DATE: 17 JUNE - 9 JULY
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          color="primary"
          target="_blank"
          href="https://www.visitsingapore.com/festivals-events-singapore/annual-highlights/wellness-festival-singapore/"
        >
          Visit their website
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default App2;
