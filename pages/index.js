import Image from 'next/image'
import Section from "../components/layouts/section/Section";
import First from "../components/slides/one/First";
import Second from "../components/slides/second/Second";
import Third from "../components/slides/third/Third";
import Navbar from "../components/navbar/Navbar";


export default function Home() {
  return (
      <>
          <main>
              <Section>
                <First/>
              </Section>
              <Section>
                  <Second/>
              </Section>
              <Section>
                  <Third/>
              </Section>
          </main>
      </>
  )
}
