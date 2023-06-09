import React from "react";
import HeroBanner from "@/components/HeroBanner";
import Companies from "@/components/Companies";
import PopularInteneraries from "@/components/PopularIteneraries";
import Everything from "@/components/Everything";
import JoinViagely from "@/components/JoinViagely";
import Services from "@/components/Services";


function Index(){
  return (<div>
    <HeroBanner />
    <Companies/>
    <PopularInteneraries />
    <Everything />
    <Services />
    <JoinViagely />
    </div>
  )
}

export default Index;