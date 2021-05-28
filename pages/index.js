import Image from 'next/image'
import Base from "../components/layouts/Base";
import First from "../components/slides/one/First";
import Second from "../components/slides/second/Second";
import Third from "../components/slides/third/Third";


export default function Home() {
  return (
          <main>
              <Base>
                <First/>
              </Base>
              <Base>
                  <Second/>
              </Base>
              <Base>
                  <Third/>
              </Base>
          </main>
  )
}
