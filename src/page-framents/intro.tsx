import React from "react"
import { SkewTwo } from "../components/Skew"

const AntiPatterns = () => <SkewTwo fst="linquistic" snd="antipatterns"></SkewTwo>

export const Intro = () => {
  return (
  <div >
    <Welcome />
  </div>
  )
}

const Welcome = () =>  {
  return (
    <div className="p-5 bg-stone-300">
      <h1 className="text-2xl font-bold">Welcome!</h1>
      <p className="text-lg">This is a website to teach you to identify and fix <AntiPatterns /> in your code</p>
    </div>
  )
}

//const WhatIsIt = () => {
//    <h2>
//        What is a linguistic antipattern ?
//    </h2>
//
//    Have you ever had a gnarly bug, or even just a frustrating coding session, that could be ultimately traced back to something that just didn't do what you thought it did based on the name? We certainly have.
//
//    These can be caused by two people who interpret a word differently, or one person making too many assumptions by themselves. But more often than not, they're caused by a problem where the name predictably leads people to believe a function does something it simply doesn't. The ways in which this happens are **linguistic antipatterns**. As defined by the original researchers:
//
//    > Linguistic Antipatterns (LAs) in software systems are recurring poor practices in the naming,
//    > documentation, and choice of identifiers in the implementation of an entity, thus possibly impairing
//    > program understanding.
//
//    This website is dedicated to cataloguing types of linguistic antipatterns and discussing the deeper reasons they cause problems and how to fix them.
//}
//
//## Origin
//
//Linguistic antipatterns were first studied in a series of papers led by Venera Arnaoudova. In the two main papers, they identified many types of linguistic antipatterns by scrutinizing several codebases, built scanners to find large numbers of examples, and then conducted a study where 11 professional engineers and 19 graduate students were asked their opinions on examples of each anti-pattern.
//
//* [A New Family of Software Anti-Patterns: Linguistic Anti-Patterns](http://assets.ptidej.net/Publications/Documents/CSMR13d.doc.pdf)
//* [Linguistic Antipatterns: What They Are and How Developers Perceive Them](http://veneraarnaoudova.ca/wp-content/uploads/2014/10/2014-EMSE-Arnaodova-et-al-Perception-LAs.pdf)
//
//We take inspiration from Arnaoudova's work, but depart significantly from it, giving a smaller but broader set of anti-patterns.
//
//## About This Website
//
//### How does this website differ from the original Linguistic Antipatterns papers?
//
//The original Linguistic Antipattern papers catalogued 18 types. Each of these were very narrow. Some are exceptionally rare.
//
//This larger set is great for people trying to build static analyzers to find them. But we believe a smaller list of broader anti-patterns is better for learning and memory. We have collapsed the original list of 18 narrow patterns into 3 broader ones, and then added several of our own based on stories of bad bugs caused by poor names. We also try to connect each of the antipattern types to deeper software-engineering principles.
//
//For more of this philosophy, read our newsletter on [Why Not to Study Design Patterns](http://us16.campaign-archive.com/?u=8b565c97b838125f69e75fb7f&id=361788c0ea).
//
//### Who are we
//
//We are Mirdin[^1], the Code Quality Company. Through our intense courses and 1-on-1 coaching, we have trained over 250 software engineers at the advanced level. This website is part of our mission to make the world's software less buggy and easier to change by creating common knowledge of scientific coding principles. Many of the examples in this website are ones we have directly gathered from students asked to share stories about difficult bugs they've encountered.
//
//[^1]: Formerly *James Koppel Coaching, LLC*.