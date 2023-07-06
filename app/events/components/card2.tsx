"use client";
import { Card, Grid, Text, Link } from "@nextui-org/react";
import Image from "next/image";

const App1 = () => {
  return (
    <Card
      isHoverable
      variant="bordered"
      css={{ p: "$7", mw: "600px", backgroundColor: "white" }}
    >
      <Card.Header>
        <Image
          src="/images/events/event4.avif"
          width={70}
          height={70}
          alt="event2"
          className="rounded-full"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              NATIONAL DAY
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>www.visitsingapore.com</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          Come enjoy the "SINGAPORE NATIONAL DAY" with your peers!
          <br />
          VENUE: MARINA WATERFRONT
          <br />
          DATE: 9 AUGUST
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          color="primary"
          target="_blank"
          href="https://www.visitsingapore.com/festivals-events-singapore/cultural-festivals/national-day/"
        >
          Visit their website
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default App1;
