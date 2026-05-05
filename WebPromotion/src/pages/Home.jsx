import Hero from '../Features/Home/Hero'
import SectionOne from '../Features/Home/BestSeller'
import SectionTwo from '../Features/Home/Arrival'
import Dress from '../Features/Home/Dresses'
import Contact from '../Features/Home/SectionContact'
import Introduction from '../Features/Home/Introduction'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <SectionOne />
      <Dress />
      <SectionTwo />
      <Contact />
    </>
  );
}