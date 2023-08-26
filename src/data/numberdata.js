"use client"
import CountUp from 'react-countup';

const Numberdata = [
    {
        num: <CountUp start={0} end={30} duration={3} />,
        sign: "+",
        title: "Team Member"
    },
    {
        num: <CountUp start={0} end={150} duration={3} />,
        title: "Completed Projects"
    },
    {
        num: <CountUp start={0} end={50} duration={3} />,
        sign: "+",
        title: "Satisfied Clients"
    },
]

export default Numberdata