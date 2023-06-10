import React from "react";
import HeroBanner from "@/components/Landing/HeroBanner";
import Companies from "@/components/Landing/Companies";
import PopularInteneraries from "@/components/Landing/PopularIteneraries";
import Everything from "@/components/Landing/Everything";
import JoinViagely from "@/components/Landing/JoinViagely";
import AuthWrapper from "@/components/AuthWrapper";


function Index(){
  return (<div className= "w-full h-screen bg-gradient-to-r from-darkGreen to-lightGreen">
    <HeroBanner />
    <Companies/>
    <PopularInteneraries />
    <Everything />
    <JoinViagely />
    <AuthWrapper/>
    </div>
  )
}

export default Index;