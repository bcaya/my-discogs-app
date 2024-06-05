import React from 'react'
import { Link } from 'react-router-dom'
import './assets/StylesMain'

export default function Home(){
  return(
    <box-l padding="var(--s4)">
      <stack-l>
          <h1>My name is Bobby, I am a <span>Full-Stack Developer</span></h1>
        <box-l>
          <p>Creating responsive and acessible websites. View my projects for more info!</p>
        </box-l>
        <box-l><div className="home-container">
        <cluster-l>
            <p>Currently available for hire</p>
            <Link to="records">My Record Collection </Link>
          </cluster-l>
          </div></box-l>
        <box-l>
         <div className="skills-container">
            <box-l>
              <div className="visual-box"><h2>About</h2></div>
            </box-l>
         

           
                  <box-l>
                    <p>Passionate web developer with a keen interest in creating responsive and accessible websites. I specialize in front-end development, utilizing a robust set of skills including HTML, CSS, JavaScript, and React. My experience also extends to back-end technologies such as Ruby on Rails, PostgreSQL, GraphQL, and Eleventy.</p>

                    <p>I am committed to building user-friendly web experiences that are both visually appealing and highly functional. My goal is to combine my technical expertise with my creative vision to develop websites that not only look great but also provide an intuitive and seamless user experience.</p>
                    <p>
In addition to my professional interests, I love spending my free time camping, listening to records, and exploring new places. These hobbies inspire my work by giving me fresh perspectives and new ideas.
</p>

<p>I'm excited to bring my skills and passion to new projects and challenges in the web development world. Let's create something amazing together!</p>
                  </box-l>

          
         </div>
          </box-l>
      </stack-l>
      </box-l>
      
  )
}