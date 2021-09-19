import React from 'react'
import './experience.css';

const Experience = () => {

    return(
        <div>
            <h1 className='set'>
                Experience
                <img width='50' src="https://cdn4.iconfinder.com/data/icons/marketing-and-digital-marketing/32/business_marketing_advertising_research-256.png"/>
            </h1>
            
            <div className='exp'>

                <div>                    
                    <b>Data Science Intern | Aug 21 - Present </b>                
                    <div className="para">
                        @LetsGrowMore, I'm working completely vitually. I'm working on a problems like 
                        prediction using decision tree algorithm, ML facial recognition to detect mood and suggest songs accordingly
                        and Develop a neural network that can read handwriting.
                    </div>
                </div>

                <div>                    
                    <b>Data Engineer | Aug 21 - Sep 21 </b>                
                    <div className="para">
                        @ANZ, it was completely internship with flexible timeing and I was working
                        on two tasks, exploratory data analysis and predictive analytics. 
                    </div>
                </div>

                <div>                    
                    <b>Data Analyst | July 21 - Aug 21 </b>                
                    <div className="para">
                        @KPMG, I was working on three tasks, data quality assesment, data exploration, and data visualization. 
                    </div>
                </div>


                <div>                    
                    <b>AI Intern | Jan 21 - Feb 21 </b>                
                    <div className="para">
                        @Moyyn, I was working in a team which was building AI base architecture to automating the recruitment process. 
                        Which takes hundreds of CVs and shortlist just most relevant to the job system. 
                    </div>
                </div>

                
                <div>                    
                    <b>AI Developer | Dec 20 - Jan 21 </b>                
                    <div className="para">
                        @Alphatrone Technologies, I have led team of two inspiring developers to build an Google Home type 
                        speech recognition project where 10+ AI based model working parralel to produce better result than Google Home. 
                    </div>
                </div>

            </div>
        </div>
    )    
}
export default Experience
