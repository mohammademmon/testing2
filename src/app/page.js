import Rootlayout from '@/component/Rootlayout'
import About from '@/component/about/About'
import Blog from '@/component/blog/Blog'
import Experience from '@/component/experience/Experience'
import Hero from '@/component/hero/Hero'
import Newsletter from '@/component/newsletter/Newsletter'
import Partners from '@/component/partners/Partners'
import Skills from '@/component/skills/Skills'

export default function Home() {
  return (
    (
      <Rootlayout>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Blog/>
        <Partners/>
        <Newsletter/>
      </Rootlayout>
    )
  )
}
