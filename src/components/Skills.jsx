import SkillCard from "./SkillCard"
import { SKILLS } from "../constants"

const Skills = () => {
  return (
   <section className="section">
    <div className="container">
      <h2  className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
       Current Stack
      </h2>
      <p className="leading-7 mt-3 mb-8 text-center text-responsive ">A small list of cool things I use to construct my projects.</p>

      <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
        {
          SKILLS.map(({imgSrc, label,desc},key)=>
          (
           <SkillCard
           key={key}
           imgSrc={imgSrc}
           label={label}
           desc={desc} />
          ))
        }
      </div>
    </div>
   </section>
  )
}

export default Skills